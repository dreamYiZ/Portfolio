router = require('express').Router();

const sendGrid = require('@sendgrid/mail');
// console.log('SENDGRID_API_KEY', process.env.SENDGRID_API_KEY);
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/', (req, res) => {
    res.send('API Status: Running');
});

// router.post('/api/email', (req, res) => {});

router.post('/email', (req, res, next) => {
    let email = req.body.email;
    let msg = req.body.message;
    const message = {
        to: 'tnt81@hotmail.it', // Change to your recipient
        from: 'm.capurri@gmail.com', // Change to your verified sender
        subject: `Message from ${email}`,
        text: msg,
        // email: email,
    };
    console.log('message', message);

    sendGrid
        .send(message)
        .then(() => console.log('send mail success'))
        .catch((err) => next(err));
});

router.get('*', function (req, res) {
    res.redirect('localhost:3000/Home');
});

module.exports = router;
