const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError, validateEmail, strongPasswordOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = {name: req.body.name, email: req.body.email, password: req.body.password, confirmPassword: req.body.confirmPassword}
    
        //if(!req.originalUrl.startsWith('/users')) user.admin = false
        //if(!req.user || req.user.admin) user.admin = false

        try{
            
            existsOrError(user.name, 'Nome não informado.')
            existsOrError(user.email, 'E-mail não informado.')
            existsOrError(user.password, 'Senha não informado.')
            existsOrError(user.confirmPassword, 'Confirmação de senha não informado.')
            validateEmail(user.email, 'E-mail Não existe')
            strongPasswordOrError(user.password, 'Senha fraca!! A senha tem que ter no mínimo 8 dígitos e uma letra maiúscula e um número')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem.')
           
            
            const userFromDB = await app.db('users')
                .where({email: user.email}).first()
            if(!user.id){
                notExistsOrError(userFromDB, 'Usúario já cadastrado')
            }
        }catch(msg){
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        
        app.db('users')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch( err => res.status(500).send(err))
        
    }
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }
    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin', 'imgUrl')
            .where({id: req.params.id})
            .whereNull('deletedAt')
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }
    const updateNameAndEmail = (req, res) => {

        const user = {name: req.body.name, email: req.body.email}
        if(req.params.id) user.id = req.params.id
        try{
            existsOrError(user.name, 'Nome não informado.')
            existsOrError(user.email, "Email não informado.")
            validateEmail(user.email, "E-mail não é válido.")
        }catch(msg){
            return res.status(400).send(msg)
        }
        app.db('users')
            .update({name: user.name, email: user.email})
            .where({id: user.id})
            .then(() => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const updatePassword = async (req, res) => {
        const user = {oldPassword: req.body.oldPassword, password: req.body.password, confirmPassword: req.body.confirmPassword}
        if(req.params.id) user.id = req.params.id

        try{

            existsOrError(user.oldPassword, "Informe sua senha antiga.")
            existsOrError(user.password,"Informe a nova senha.")
            existsOrError(user.confirmPassword,"Confirme a nova senha.")
            strongPasswordOrError(user.password, "Senha fraca!! A senha tem que ter no mínimo 8 dígitos e uma letra maiúscula e um número")
            equalsOrError(user.password, user.confirmPassword)

            const oldpass = await app.db('users')
                .where({id: user.id})
                .first()

            const isMatch =  bcrypt.compareSync(req.body.oldPassword, oldpass.password)
            if (!isMatch) return res.status(401).send('Senha antiga inválida')

        }catch(msg){
            return res.status(400).send(msg)
        }

        
            
        delete user.oldPassword
        delete user.confirmPassword
        user.password = encryptPassword(user.password)

        app.db('users')
            .update({password: user.password })
            .where({id: user.id})
            .then(() => res.status(204).send())
            .catch(err => res.status(500).send(err))

    }
    const remove = async (req, res) => {
        try{    
            const rowsUpdated = await app.db('users')
                .update({deletedAt: new Date()})
                .where({id: req.params.id})
            existsOrError(rowsUpdated, 'usuário não foi encontrado')

            res.status(204).send()
        }catch(e){
            res.status(400).send(e)
        }
    }

    return { save, get , getById, remove, updateNameAndEmail, updatePassword}
}