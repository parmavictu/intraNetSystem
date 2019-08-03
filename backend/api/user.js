const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError, validateEmail, strongPasswordOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = {...req.body}
        if(req.params.id) user.id = req.params.id

        //if(!req.originalUrl.startsWith('/users')) user.admin = false
        //if(!req.user || req.user.admin) user.admin = false

        try{
            existsOrError(user.name, 'Nome não informado.')
            existsOrError(user.email, 'E-mail não informado.')
            validateEmail(user.email, 'E-mail Não existe')
            existsOrError(user.password, 'Senha não informado.')
            strongPasswordOrError(user.password, 'Senha fraca!! A senha tem que ter no mínimo 8 dígitos e uma letra maiúscula e um número')
            existsOrError(user.confirmPassword, 'Confirmação de senha não informado.')
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

        if(user.id){
            app.db('users')
                .update(user)
                .where({ id: user.id})
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch( err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch( err => res.status(500).send(err))
        } 
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

    return { save, get , getById, remove}
}