const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    res.send('API is running...');
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))