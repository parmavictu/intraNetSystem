module.exports = app => {
    const {existsOrError} = app.api.validation

    const save =  (req,res) =>{
        const post = {...req.body}

        if(req.params.id) post.id = req.params.id

        try{

            existsOrError(post.content, 'Você não digitou nada para postar....')

        }catch(msg){
            return res.status(400).send(msg)
        }
        
        if(post.id){
            app.db('post')
                .update(post)
                .where({id: post.id})
                .then(_ => res.status(204).send())
                .catch( err => res.status(500).send(err))
        }else{
            app.db('post')
                .insert(post)
                .then(_ => res.status(204).send())
                .catch( err => res.status(500).send(err))
        }

    }
    const getById =  (req, res) => {
        app.db('post')
            .select('id', 'content', 'userId')
            .where({id: req.params.id})
            .first()
            .then(post => res.json(post))
            .catch(err => res.status(500).send(err))
    }
    const get =  (req, res) => {
        app.db('post')
            .select('id', 'content', 'userId')
            .first()
            .then(posts => res.json(posts))
            .catch(err => res.status(500).send(err))
    }  
    return { save, get, getById}
}