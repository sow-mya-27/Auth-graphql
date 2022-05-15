const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const {typeDefs}=require("./schema/Schema")
const {Query}=require("./resolvers/Query");
const {db}=require("./data/db");
// const { db } = require("./db");
const { Tweet } = require('./resolvers/Tweet');
// const { typeDefs } = require("./schema");

// console.log(db)
const app = express();

const server=new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Tweet
    },
    context:{
        db,
    },
});


server.listen(8080)