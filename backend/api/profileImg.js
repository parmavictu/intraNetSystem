
module.exports = app =>{
    const saveImg =  ( req, res ) =>{
        app.db('users')
          .update({imgUrl: `http://localhost:4000/files/${req.params.id}`})
          .where({id: req.params.id})
          .then(() =>res.status(200).send())
          .catch(err => res.status(500).send(err))
    }

    return {saveImg}
}