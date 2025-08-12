// Task : Design Product Management System 
// In Simple terms, Design CRUD APIs for products

const products = [
    {id:1, name:"iphone", price: 3000},
    {id:2, name: "samsung", price: 2000}
]

const http = require("http");

const server = http.createServer((req, res)=>{

    console.log(typeof req);
    console.log(typeof res);

    console.log(req.url);
    console.log(req.method);

    //  routing

    if(req.method === 'GET' && req.url === '/health'){
        return res.end('Server is up and running');
    } else if(req.method === 'GET' && req.url === '/products'){
        // get all resources
        return res.end(JSON.stringify(products));

    }  else if(req.method === 'POST' && req.url === '/products'){
        // create new product
        let body = '';
        req.on('data', (chunk)=>{body = body + chunk.toString()});
        req.on('end', ()=>{
            console.log('data is ', body);
        });

        // hard-coded
        const newProduct = {id:3, name:"xiami", price:1000}
        products.push(newProduct);

        return res.end(JSON.stringify(products));
    }
    else if( req.method === 'DELETE' && req.url.startsWith('/products/')){

        // id
        const id = Number(req.url.split('/')[2]);
        console.log(id)
        const index = products.findIndex( product => product.id === id);
        console.log(index)

        if(index == -1){
            res.statusCode = 404;
            return res.end('Product not found');
        }

        // delete 

        const deletedProduct = products.splice(index, 1);
        console.log(deletedProduct);
        console.log(products);
        return res.end(JSON.stringify({
            message:"Product delted",
            response: products
        }));


        // check if exists
    } else if(req.method === 'PUT' && req.url.startsWith('/products/')){
        // id
        // check if resource exists or not
        const id = Number(req.url.split('/')[2]);
        console.log(id)
        const index = products.findIndex( product => product.id === id);
        console.log(index)

        if(index == -1){
            res.statusCode = 404;
            return res.end('Product not found');
        }
        // 
        let body = '';
        req.on('data', (chunk)=>{body = body + chunk.toString()});
        req.on('end', ()=>{
            console.log('data is ', body);
            const data = JSON.parse(body);
            // console.log(JSON.parse(data));

            // manipulation : update: put : full update
            console.log(products[index]);
            console.log(id);
            console.log(data);
            products[index] = {id, ...data}; // full update

            res.end(JSON.stringify({
                message : "Product Update",
                response : products
            }))
            return;
        });


        

        return;

    } else if( req.method === 'PATCH' && req.url.startsWith('/products')){

        // id
        const id = Number(req.url.split('/')[2]);
        console.log(id)
        const index = products.findIndex( product => product.id === id);
        console.log(index)

        // exists or not
        if(index == -1){
            res.statusCode = 404;
            return res.end('Product not found');
        }
        // body
        let body = '';
        req.on('data', (chunk)=>{body = body + chunk.toString()});
        req.on('end', ()=>{
            console.log('data is ', body);
            const data = JSON.parse(body);
            // console.log(JSON.parse(data));

            // manipulation : update: patch : partial update
            console.log(products[index]);
            console.log(id);
            console.log(data);
            // products[index] = {id, ...data};
            products[index] = {...products[index], ...data}; // partial update
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
                message : "Product Update",
                response : products
            }))
            return;
        });
    }

});


const PORT = 6800;
server.listen({
    host:'localhost',
    port: PORT
}, ()=>{
    console.log(`Server started on localhost:${PORT}`);
})

