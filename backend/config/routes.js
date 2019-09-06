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
        .delete(app.api.post.remove)


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

    app.route('/admin/type')
        .post(app.api.admin.saveType)
        .get(app.api.admin.getTypes)
        
        
    app.route('/admin/type/:id')
        .get(app.api.admin.getType)
        .put(app.api.admin.updateType)
        .delete(app.api.admin.removeType)
        
        

    app.route('/admin/users')
        .get(app.api.admin.getUsers)

    app.route('/admin/users/id')
        .get(app.api.admin.getUser)
        .put(app.api.admin.changeUsers)


        
}