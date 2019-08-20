module.exports = {

    // Source:  Express API with auto-generated OpenAPI doc through Swagger
    //          http://www.acuriousanimal.com/2018/10/20/express-swagger-doc.html
    //
    // Swagger Editor: Use this help build Swagger definition YAML - https://editor.swagger.io/

    options: {
        swaggerDefinition: {
            // Like the one described here: https://swagger.io/specification/#infoObject
            info: {
                title: 'Test Data Store',
                version: '1.0.0',
                description: 'Test Express API with auto-generated swagger doc',
                license: {
                    name: 'Apache 2.0',
                    url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
                },
            },
            tags: [
                {name: "booking", description: "Retrieve and modification to booking data"},
                {name: "customer", description: "Retrieve and modification to customer data"}
            ],
            schemes: ['http', 'https'],
        },
        // List of files containing your routes to be processed. You can also set globs './routes/*.js'
        apis: ['./app/routes/data_routes*.js'],
    }
};
