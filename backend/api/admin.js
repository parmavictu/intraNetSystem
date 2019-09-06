module.exports = app => {
    const {existsOrError} = app.api.validation

    const updateType = (req, res) => {
        const infoBody = req.body.name
        try {
            existsOrError(infoBody, 'Nome do tipo não informado.')
        }catch(msg){
            return res.status(400).send(msg)
        }
        app.db('type')
            .update({name:infoBody})
            .where({id:req.params.id})
            .then(() => res.status(201).send())
            .catch(err => res.status(500).send(err))
    }

    const saveType = async (req, res) => {
        const infoBody = req.body.name
        try {
            existsOrError(infoBody, 'Nome do tipo não informado.')
        }catch(msg){
            return res.status(400).send(msg)

        }

        const typeExists = await app.db('type')
                                    .where({name:infoBody})
                                    .first()
        if(typeExists) return res.status(409 ).send('O tipo já existe!!')

        app.db('type')
            .insert({name:infoBody})
            .then(() => res.status(201).send())
            .catch(err => res.status(500).send(err))
    }

    const changeUsers = (req,res) => {
        const userInfo = {wage:req.body.wage, admin: req.body.admin, jobTitle: req.body.jobtitle}
        try{
            existsOrError(userInfo.wage, 'Salário não informado')
            existsOrError(userInfo.jobTitle, 'Profissão não informada')
        }catch(msg){
            return res.status(400).send(msg)
        }
        app.db('users')
            update({wage:userInfo.wage, admin:userInfo.admin, jobTitle:userInfo.jobTitle})
            .where({id: req.params.id})
            .then(() => res.status(200).send())
            .catch(err => res.status(500).send(err))
    }

    const getUsers =  (req, res) => {
        app.db('users')
            .select('id', 'name','wage','jobtitle', 'admin')
            .then((users) => res.json(users))
            .catch(err => res.status(500).send(err))
    }
    const getUser =  (req, res) => {
        app.db('users')
            .select('id', 'name','wage','jobtitle', 'admin')
            .where({id: req.params.id})
            .then((user) => res.json(user))
            .catch(err => res.status(500).send(err))
    }
    const getType =  (req, res) => {
        app.db('type')
            .select('id','name')
            .where({id: req.params.id})
            .then((type) => res.json(type))
            .catch(err => res.status(500).send(err))
    }

    const getTypes =  (req, res) => {
        app.db('type')
            .select('id','name')
            .then((type) => res.json(type))
            .catch(err => res.status(500).send(err))
    }

    const removeType = (req, res) => {
        app.db('type')
            .where({id:req.params.id})
            .del()
            .then(() => res.status(200).send())
            .catch( err => res.status(500).send(err))
    }

    return {saveType,changeUsers, getUser, getUsers, getType, getTypes,updateType,removeType}
}