import express from 'express';
import { app, auth, firestore } from './firebaseConfig.js'; // Import the required Firebase functionalities

const app = express();
const port = 3000;

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        res.send(`User created: ${userCredential.user.uid}`);
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});

app.post('/addData', async (req, res) => {
    try {
        const { name, email } = req.body;
        const docRef = await firestore.collection('users').add({
            name: name,
            email: email
        });
        res.send(`Document written with ID: ${docRef.id}`);
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
