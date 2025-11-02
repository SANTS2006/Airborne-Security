require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const contactMessageRoutes = require('./routes/AirborneContactMessage');
app.use('/airborne', contactMessageRoutes);


app.listen(`${process.env.PORT}`, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})
