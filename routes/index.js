router = require('express').Router();

const sendGrid = require('@sendgrid/mail');
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/', (req, res) => {
    res.send('API Status: Running');
});

// router.post('/api/email', (req, res) => {});

router.post('/email', (req, res, next) => {
    let email = req.body.email;
    let msg = req.body.message;
    const message = {
        to: 'tnt81@hotmail.it',
        from: 'm.capurri@gmail.com',
        subject: `Message from ${email}`,
        text: msg,
    };
    console.log('message', message);

    sendGrid
        .send(message)
        .then(() => res.status(201).json({ success: 'message sent' }))
        .catch((err) => next(err));
});

router.get('*', function (req, res) {
    res.redirect('localhost:3000/Home');
});

module.exports = router;
