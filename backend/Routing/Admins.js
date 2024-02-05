const express = require('express');
const router = express.Router();
const Admin = require('../db/Admin/AdminSchema');
const temples = require('../db/Organizer/TempleSchema');
const darshans = require('../db/Organizer/DarshanSchema');


router.post('/alogin', (req, resp) => {
    const { email, password } = req.body;
    Admin.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
})

// singup Api 
router.post('/asignup', (req, resp) => {
    const { name, email, password } = req.body;
    Admin.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                Admin.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
})


 


module.exports = router;    