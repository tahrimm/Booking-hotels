///swagers
import swaggerAutogen from 'swagger-autogen';
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const doc = {
    info: {
        title: 'Hotel booking api',
    description: 'this is a RESTful API'
    },
    host: `localhost:${process.env.PORT || 8080}`
};

const outputFile = './swagger-output.json';
const routes = [
    './routes/auth.js',
    './routes/users.js',
    './routes/hotels.js',
    './routes/rooms.js',
    'index.js',
    './controllers/hotel.js',
    // Add more route files as needed
  ];


/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
