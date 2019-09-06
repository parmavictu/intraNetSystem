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
        app.db({p:'post', u:'users'})
            .select('p.id','p.content', 'u.name','u.email','u.imgUrl')
            .whereRaw('?? = ??', ['p.userId','u.id'])
            .orderBy('p.id','desc')
            .then(posts => res.json(posts))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        const replies = await app.db('reply')
            .where({postId : req.params.id})
            .del()
        app.db('post')
        .where({id:req.params.id})
        .del()
        .then(() => res.status(200).send())
        .catch( err => res.status(500).send(err))
    }  
    return { save, get, getById, remove}
}