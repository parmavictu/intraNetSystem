module.exports = app => {
    const { existsOrError } = app.api.validation
    const limit = 10

    const save = ( req, res ) => {
        const item = {...req.body}
        if(req.params.id) item.id = req.params.id

        try
        {
            existsOrError(item.name,'Produto não informado.' )
            existsOrError(item.amount,'Quantidade não informada.' )
            existsOrError(item.type, 'Tipo não informado.' )
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
        app.db( 'inventory' )
            .select( 'name', 'amount', 'typeId', 'price' )
            .where({ id: req.params.id })
            .then( item => res.json(item) )
            .catch(err => res.status(500).send(err))
    }
    
    const get = async ( req, res ) => {
        const page = req.query.page || 1

        const result = await app.db('inventory').count('id').first()
        const count = parseInt(result.count)

        app.db( 'inventory' )
            .select( 'name', 'amount', 'typeId', 'price' )
            .limit(limit).offset( page * limit - limit)
            .then(items => res.json( {itemsData: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }
}