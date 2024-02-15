import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions, connect } from "mongoose"
type ConnectionOptionsExtend = {
  useNewUrlParser: boolean
  useUnifiedTopology: boolean
}
const options: ConnectOptions & ConnectionOptionsExtend = {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}

// Create Express app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = 'mongodb://localhost:27017/contact_form_db';
mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));




// Create schema and model for form data
const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// POST endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Create a new FormData document
    const formData = new FormData({ name, email, message });

    // Save the FormData document to the database
    formData
        .save()
        .then(() => {
            console.log('Form data saved to database:', formData);
            res.status(200).send('Form data saved successfully');
        })
        .catch((err) => {
            console.error('Error saving form data:', err);
            res.status(500).send('Error saving form data');
        });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
