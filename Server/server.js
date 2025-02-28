import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// Initialize Express
const app = express()

// Connect to the DataBase 
await connectDB() 

// Middlewares
app.use(cors()) 

// Routes 
app.get("/" , (req , res) => res.send("Hello World - API working"))
app.post('clerk' , express.json() , clerkWebhooks)

// Port
const PORT = process.env.PORT  || 5602

app.listen(PORT , () => {
    console.log(`Server is running on port localhost:${PORT}`)
})
