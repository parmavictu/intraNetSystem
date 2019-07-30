module.exports = app => {
    const {existsOrError} = app.api.validation

    const save = (req, res) => {        
        const reply = {...req.body}

        try {
            existsOrError(reply.content,'Você não digitou nada no comentário')
        }catch(msg){
            return res.status(500).send(msg)
        }

        app.db('reply')
            .insert(reply)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = async (req, res) => {
        const postId = req.params.id
        
        app.db({r:'reply',u:'users',p:'post'})
            .select('r.id','r.content', 'u.email','u.name')
            .distinct()
            .where('r.postId', postId )
            .whereRaw( 'r.userIdReply = u.id' )
            .then(replies => res.json(replies))
            .catch(err => res.status(500).send(err))
    }

    return { save, get}   
}