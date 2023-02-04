const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const memberRoutes = require('./routes/members');
const workoutplanRoutes = require('./routes/workoutplan');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(memberRoutes);
app.use(workoutplanRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://gym_management_system:gym123@gymmanagementsystem.mgho2.mongodb.net/GymManagementSystem?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});