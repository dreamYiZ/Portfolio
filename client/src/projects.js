import vetClinic from './assets/images/Vet-clinic-screenshot.png';
import vetClinicVideo from './assets/videos/VetClinic-video.mp4';
import futura from './assets/images/Futura-screenshot.png';
import FuturaVideo from './assets/videos/Futura-video.mp4';

const projects = [
    {
        id: 0,
        title: 'Vet Clinic',
        imgSrc: vetClinic,
        selected: false,
        description:
            'Booking manager of a vet clinic powered by Google Calendar',
        techs: 'Node.js, Express.js, React, Bootstrap, Passport, JWT, Mongoose, Cloudinary, Mapbox GL, Google API',
        videoSrc: vetClinicVideo,
        gitHubUrl: 'https://github.com/mcapurri/Vet-Clinic',
        link: 'https://vet-clinic-project.herokuapp.com',
    },
    {
        id: 1,
        title: 'Futura',
        imgSrc: futura,
        selected: false,
        description:
            'Responsive Mobile Eco-App built to promote plastic recycling in Nigeria.',
        techs: 'Node.js, Express.js, React, Bootstrap, JWT, Passport, Mongoose, Cloudinary, Mapbox GL, Socket.io',
        videoSrc: FuturaVideo,
        gitHubUrl: 'https://github.com/mcapurri/Futura',
        link: 'https://futura-recycling.herokuapp.com',
    },
];

export default projects;
