import space from './assets/images/space.png';

const projects = [
    {
        id: 0,
        title: 'Vet Clinic',
        imgSrc: space,
        selected: false,
        description:
            'Booking manager of a vet clinic through the implemented Google Calendar',
        techs: 'Node.js, Express.js, React, Bootstrap, Passport, JWT, Mongoose, Cloudinary, Mapbox GL, Google API',
        videoSrc: '',
        gitHubUrl: 'https://github.com/mcapurri/Vet-Clinic',
        link: 'https://vet-clinic-project.herokuapp.com',
    },
    {
        id: 1,
        title: 'Futura',
        imgSrc: space,
        selected: false,
        description:
            'Responsive Mobile Eco-App built to promote plastic recycling in Nigeria.',
        techs: 'Node.js, Express.js, React, Bootstrap, JWT, Passport, Mongoose, Cloudinary, Mapbox GL, Socket.io',
        videoSrc: '',
        gitHubUrl: 'https://github.com/mcapurri/Futura',
        link: 'https://futura-recycling.herokuapp.com',
    },
];

export default projects;
