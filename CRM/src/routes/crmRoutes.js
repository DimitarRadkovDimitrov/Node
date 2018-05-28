const routes = (app) => {
    app.route('/contact')

    .get((req, res, next) => 
    {
        //Middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next();
    }, (req, res, next) => 
    {
        res.send('GET req successful');
    })
    

    .post((req, res) =>
    res.send('POST req successful'));

    app.route('/contact/:contactId')

    .put((req, res) =>
    res.send('PUT req successful'))

    .delete((req, res) =>
    res.send('DELETE req successful'));
}

export default routes;