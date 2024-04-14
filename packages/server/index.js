const express = require('express');
const cors = require('cors')
const db = require('./db')
const { sendEmail } = require('./mailgun');
const app = express();
const PORT = process.env.PORT || 5555;

require('dotenv').config();

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from server');
});

app.get('/reminders', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM reminders');
        res.json(rows);
    } catch (error) {
        console.error("Failed to retrieve reminders:", error);
        res.status(500).send("Failed to retrieve data");
    }
});

app.post('/reminders', async (req, res) => {
    try {
        const { email, reminder, time } = req.body;
        const { rows } = await db.query('INSERT INTO reminders (email, reminder, time) VALUES ($1, $2, $3) RETURNING *', [email, reminder, time]);
        res.status(201).send(rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/send-reminder', (req, res) => {
    const { userEmail, subject, text, html, deliveryTime } = req.body;
    sendEmail(userEmail, "Excited User <mailgun@sandbox-123.mailgun.org>", subject, text, html, deliveryTime)
        .then(response => {
        res.status(200).json({ message: 'Email sent successfully', data: response });
        })
        .catch(error => {
        console.error('Failed to send email:', error);
        res.status(500).json({ error: 'Failed to send email' });
        });
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});