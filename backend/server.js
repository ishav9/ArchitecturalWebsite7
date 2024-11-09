// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// const MONGODB_URI = "mongodb+srv://isha:<isha@123>@cluster0.aryzw6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // JWT Secret
// const JWT_SECRET = 'your_jwt_secret';

// // Authentication Routes
// const authRoutes = require('./routes/auth')(JWT_SECRET);
// app.use('/api/auth', authRoutes);

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection

// mongoose.connect("mongodb+srv://isha:isha123@cluster0.aryzw6n.mongodb.net/",{
mongoose.connect("mongodb://localhost:27017",{
    
    dbName: "Archnew",
})
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(`No connection ${err}`);
})


// JWT Secret
const JWT_SECRET = 'your_jwt_secret';

// Authentication Routes
const authRoutes = require('./routes/auth')(JWT_SECRET);
app.use('/api/auth', authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
