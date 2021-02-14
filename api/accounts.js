const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const salt = 10;

router.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;


    if (!username || !password || !email) {
        res.status(500).json()
    }

    bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
            res.status(500).json(error);
        }
        else if (hash) {
            const query = `INSERT INTO users SET ?`
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'farhans',
                password: '123456',
                database: 'worklog'
            });
            connection.connect();
            connection.query(query, [username, hash, email, phoneNo], (error, results) => {
                if (error) {
                    res.status(500).json(error);
                }

                else {
                    res.status(201).json(results[0]);
                }

            });
        }
    });


});

module.exports = router;