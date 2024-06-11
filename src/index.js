import { createUserWithEmailAndPassword, getAdditionalUserInfo } from "@firebase/auth";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import express from "express";
import { auth, firestore } from "./firebaseConfig.js"; // Renaming Firebase app to avoid conflict

const expressApp = express();
const port = 3000;

// Middleware to parse JSON requests
expressApp.use(express.json());

expressApp.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const infor = getAdditionalUserInfo(userCredential)
            console.log(infor);
            res.send(`User created!`);
        })
        .catch((error) => {
            // Handle signup errors
            res.status(400).send(`Error: ${error.message}`);
        });
});

// Example usage of Firestore
expressApp.post("/addData", async (req, res) => {
    try {
        const { name, email } = req.body;
        const timestamp = serverTimestamp();
        await addDoc(collection(firestore, "users"), {
            uid: `${timestamp}+ '_' + ${name}`,
            name,
            email,
            createdAt: timestamp,
            updatedAt: timestamp,
        });

        res.send(`Add data success`);
    } catch (error) {
        res.status(400).send(`Error: ${error.message} `);
    }
});

expressApp.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
