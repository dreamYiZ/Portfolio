import space from './assets/images/space.png';

const projects = [
    {
        id: 0,
        title: 'Animal Clinic',
        imgSrc: space,
        // imgSrc: vetClinic,
        link: '',
        selected: false,
        description:
            'Booking manager of a vet clinic through the implemented Google Calendar',
        techs: 'Node.js, Express.js, React, Bootstrap, Passport, JWT, Mongoose, Cloudinary, Mapbox GL, Google API',
        videoSrc: '',
    },
    {
        id: 1,
        title: 'Futura',
        imgSrc: space,
        link: '',
        selected: false,
        description:
            'Responsive Mobile Eco-App built to promote plastic recycling in Nigeria.',
        techs: 'Node.js, Express.js, React, Bootstrap, JWT, Passport, Mongoose, Cloudinary, Mapbox GL, Socket.io',
        videoSrc: '',
    },
];

export default projects;
