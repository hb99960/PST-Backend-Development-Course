const {gql, ApolloServer} = require('apollo-server')

const USERS = [
    {
        id : 1,
        name : "Ankit Singh",
        email : "ankit@pst.in",
        password : "5265sfgffs"
    },
     {
        id : 2,
        name : "Rahul Kumar",
        email : "rahul@pst.in",
        password : "5265sfgffs"
    },
     {
        id : 3,
        name : "Shivam Jha",
        email : "shivam@pst.in",
        password : "5265sfgffs"
    },
     {
        id : 4,
        name : "Sneha Kumari",
        email : "sneha@pst.in",
        password : "5265sfgffs"
    },
     {
        id : 5,
        name : "Gautam Kumar",
        email : "gautam@pst.in",
        password : "5265sfgffs"
    }
]

const POSTS = [
    {
        id : 1,
        title : "Learning GraphQL",
        content : "Today we are learning GraphQL",
        authorId : 1,
        publishedAt : "2025-08-25"
    },
     {
        id : 2,
        title : "Learning JS",
        content : "Today we are learning JS",
        authorId : 3,
        publishedAt : "2025-08-22"
    }
]

const typeDefs = gql`
    type User {
        id : ID!
        name : String!
        email : String!
        posts : [Post!]!
    }

    type Post {
        id : ID!
        title : String!
        content : String!
        author : User!
        publishedAt : String!
    }

    type Query {
        getUsers : [User!]!
        getUser(id : ID) : User!
        getPosts : [Post!]!
        getPost(id : ID) : Post!
    }

    input CreateUserInput {
        name : String!
        email : String!
    }

    input CreatePostInput {
        title : String!
        content : String!
        authorId : ID!
    }

    type Mutation {
        createUser(input : CreateUserInput) : User!
        createPost(input : CreatePostInput) : Post!
    }
`
const resolvers = {
    Query : {
        getUsers : () => USERS,
        getUser : (_, {id}) => {
            return USERS.find((user)=>user.id==id)
        },
        getPosts : () => POSTS,
        getPost : (_, {id}) => {
            return POSTS.find((post)=>post.id==id)
        } 
    },

    User : {
        posts : (user) => POSTS.filter((post)=>post.authorId===user.id)
    },

    Post : {
        author : (post) => USERS.find(user=>user.id===post.authorId)
    },

    Mutation : {
        createUser : (_, {input})=>{
            const newUser = {
                ...input,
                id : USERS.length+1
            }

            USERS.push(newUser)

            return newUser
        },
        createPost : (_, {input})=>{

            console.log(input)

            const newPost = {
                ...input,
                authorId : parseInt(input.authorId),
                id : POSTS.length + 1,
                publishedAt : new Date().toISOString()
            }

            POSTS.push(newPost)

            console.log(POSTS)

            return newPost
        }
    }
}

const graphQLServer = new ApolloServer({typeDefs, resolvers})

graphQLServer.listen().then(({url})=>{
    console.log("GraphQL Server started on ", url)
})