const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/contact",async (req, res) => {
    const newContact = new Contact({
        username: req.body.username,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });

    try {
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;