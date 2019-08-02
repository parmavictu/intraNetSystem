module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)



    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)
        

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
}