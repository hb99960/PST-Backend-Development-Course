const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")

const packageDefs =  protoLoader.loadSync("greeter.proto")

const grpcObject = grpc.loadPackageDefinition(packageDefs)

const greeter = grpcObject.Greeter

const server = new grpc.Server()

function sayHello (call, callback){
    callback(null, { message : `Hello ${call.request.name}`})
}

server.addService(greeter.service, {SayHello : sayHello})

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), ()=>{
    server.start()
})