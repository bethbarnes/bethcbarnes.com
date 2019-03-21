const projectData =[
  {
    id: 1,
    name: "The Network",
    description: "The Network is a professional networking website that I built with a group as our Capstone project for Fullstack Academy. The Network is a Progressive Web App created using mobile-first responsive design, and styled with Semantic UI and CSS. The Network’s frontend was built using modular React components and React-Redux. It's integrated with multiple APIs such as Google Maps, Google Places, and React Big Calendar. Data is stored using Google Cloud Firestore which enables a flexible, scalable, and real-time database.",
    technologies: "Cloud Firestore, Mobile-First Design, React-Redux, Google Maps API, Semantic UI",
    images: ['images/network-alumni.png', 'images/network-map.png', 'images/network-feed.png'],
    github: 'https://github.com/ThenetworkFS/the-network',
    deployed: 'https://thefsnetwork.com/',
    video: 'https://www.youtube.com/watch?v=jdGSlqeM_xM',
  },
  {
    id: 4,
    name: "LearnDot",
    description: "Working with large production code base, my role was to convert components from AngularJS to React",
    technologies: "AngularJS, React, HTML, CSS, mongoDB",
    github: 'https://github.com/FullstackAcademy/newlearn',
  },
  {
    id: 2,
    name: "ApARtment Picker",
    description: "ApARtment Picker is a React Native mobile app for viewing apartments in Augmented Reality. The app was built using ViroReact, a platform for building AR/VR apps in React Native. My role was to use ViroReact to render 3D Portals in Augmented Reality, which users can walk through to view 360 degree images of apartments that matched their search criteria.",
    technologies: "React, React Native, Redux, ViroReact, Material UI ",
    images: ['images/home-image.png', 'images/3D-object-image.png', 'images/portal-image.png'],
    github: 'https://github.com/djxr35/ARtathon',
    video: 'https://www.youtube.com/watch?v=bGUN9zSSJIw',
  },
  {
    id: 3,
    name: "Personal Website",
    description: "I created my personal website in order to practice using HTML and CSS, and to create a hub for my projects and contact information",
    technologies: "React, HTML, CSS",
    github: 'https://github.com/bethbarnes/beth-page',
    deployed: 'https://bethcbarnes.com',
  },
  {
    id: 5,
    name: "Cucumber",
    description: "Cucumber is an E-commerce grocery website that I built as part of a group project. Cucumber’s frontend was built using modular React components and styled with Material UI and CSS. We built the backend using Express.JS, Sequelize and PostgreSQL and deployed the app on heroku. My main role was to create a Cart functionality which lived in the state, was managed through React-Redux and persisted over sessions using local storage.",
    technologies: "Technologies used: React.JS, React-Redux, Sequelize, Express.JS, PostgreSQL, CSS, HTML, Material UI, Heroku, Google OAuth",
    images: ['images/cucumber-all-products.png', 'images/cucumber-order-confirm.png', 'images/cucumber-single-product.png'],
    github: "http://picklr.herokuapp.com/",
    deployed: "http://picklr.herokuapp.com/"
  },
  {
    id: 6,
    name: "Calendar App",
    description: "A simple calendar web app for keeping track of events. Calendar renders accurately for each month and user can add, edit and delete events.",
    technologies: "Technologies used: React.JS, React-Redux, Sequelize, Express.JS, PostgreSQL, CSS, HTML, Heroku",
    github: "https//github.com/bethbarnes/calendar-app",
    deployed: "https://beth-calendar-app.herokuapp.com/"
  },
]

export default projectData
