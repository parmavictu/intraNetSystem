const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
module.exports = app =>{
    const saveImg =  async ( req, res ) =>{
        app.db('users')
          .update({imgUrl: `http://localhost:4000/files/${req.params.id}`})
          .where({id: req.params.id})
          .catch(err => res.status(500).send(err))

        const userUpdated = await app.db('users')
            .where({id: req.params.id}).first()

        const now = Math.floor(Date.now()/1000)

        const payload = {
            id: userUpdated.id,
            name: userUpdated.name,
            email: userUpdated.email,
            admin: userUpdated.admin,
            imgUrl: userUpdated.imgUrl,
            iat: now,
            exp: now + (60 * 60)
            }
        res.json({...payload, token: jwt.encode(payload, authSecret)})
    }

    return {saveImg}
}