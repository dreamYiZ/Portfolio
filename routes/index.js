router = require('express').Router();

const sendGrid = require('@sendgrid/mail');
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/', (req, res) => {
    res.send('API Status: Running');
});

router.post('/email', (req, res, next) => {
    const { email, msg } = req.body;
    const message = {
        to: 'tnt81@hotmail.it',
        from: 'm.capurri@gmail.com',
        subject: `Message from ${email}`,
        text: msg,
    };
    console.log('message', message);

    sendGrid
        .send(message)
        .then(() => console.log('success! email sent'))
        .catch((err) => next(err));
});

router.get('*', function (req, res) {
    res.redirect('localhost:3000/Home');
});

module.exports = router;
