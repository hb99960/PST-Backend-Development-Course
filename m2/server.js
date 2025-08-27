const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")

const packageDefs =  protoLoader.loadSync("greeter.proto")

const grpcObject = grpc.loadPackageDefinition(packageDefs)

const Greeter = grpcObject.Greeter;

const client = new Greeter("localhost:50051", grpc.credentials.createInsecure())

client.SayHello({name : "Ankit"}, (err, response)=>{
    console.log(response)
})