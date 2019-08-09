const configMulter = require('./multer.js')
const multer = require('multer')
const path = require('path')
module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)



    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)


    
        
    app.route('/users/:id')
        .put(app.api.user.updateNameAndEmail)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/users/:id/password')
        .put(app.api.user.updatePassword)

    
    
    app.route('/posts')
        .post(app.api.post.save)
        .get(app.api.post.get)


    app.route('/posts/:id')
        .put(app.api.post.save)
        .get(app.api.post.getById)


    app.route('/reply')
        .post(app.api.reply.save)

    app.route('/posts/:id/reply')
        .get(app.api.reply.get)
        

    app.route('/inventory')
        .post(app.api.inventory.save)
        .get(app.api.inventory.get)

    app.route('/inventory/:id')
        .post(app.api.inventory.save)
        .get(app.api.inventory.getById)

    app.route('/images/:id')
        .post(multer(configMulter).single('avatar'), app.api.profileImg.saveImg)

    app.route('/files/:id')
        .get((req,res)=> {
            res.sendFile(path.resolve(__dirname, '..','tmp','uploads', `profileImg${req.params.id}.jpeg`))
        })
        
}