module.exports = app => {
    const { existsOrError } = app.api.validation
    const limit = 3

    const save = ( req, res ) => {
        const item = {...req.body}
        if(req.params.id) item.id = req.params.id

        try
        {
            existsOrError(item.name,'Produto não informado.' )
            existsOrError(item.amount,'Quantidade não informada.' )
            existsOrError(item.typeId, 'Tipo não informado.' )
        }
        catch(msg)
        {
            return res.status(400).send(msg)
        }
        
        if(item.id)
        {
            app.db('inventory')
                .update(item)
                .where({ id: item.id })
                .then( () => res.status(204).send() )
                .catch(err => res.status(500).send(err)) 
        } 
        else 
        {
            app.db('inventory')
                .insert(item)
                .then( () => res.status(204).send() )
                .catch( err => res.status(500).send(err))
        }

    }

    const getById = ( req, res ) => {
        app.db({ i:'inventory', t:'type'}  )
            .select('i.id', 'i.name', 'i.amount','i.price','i.val','i.fab','i.lastUpdate','t.id as idtype','t.name as typename' )
            .where({ id: req.params.id })
            .whereRaw('?? = ??', ['i.typeId','t.id'])
            .then( item => res.json(item) )
            .catch(err => res.status(500).send(err))
    }
    
    const get = async ( req, res ) => {
        const page = req.query.page || 1

        const result = await app.db('inventory').count('id as count').first()
        const count = parseInt(result.count)

        app.db({ i:'inventory', t:'type'} )
            .select( 'i.id', 'i.name', 'i.amount','i.price','i.val','i.fab','t.id as idtype','t.name as typename' )
            .limit(limit).offset( page * limit - limit)
            .whereRaw('?? = ??', ['i.typeId','t.id'])
            .then(items => res.json( { data:items, count, limit }))
            .catch(err => res.status(500).send(err))
    }


    return {save, get , getById}
}