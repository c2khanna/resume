/* eslint max-len: 0 */

export default {
  name: 'Chaitanya Khanna',
  email: {
    display: 'chaitanyakhanna13@gmail.com',
    ref: 'mailto:chaitanyakhanna13@gmail.com',
  },
  subtitle: 'Software Developer',
  links: [{
    type: 'Phone',
    display: '+1-519-572-0813',
    ref: 'tel:+15195720813',
  }, {
    type: 'GitHub',
    display: 'github.com/c2khanna',
    ref: 'https://github.com/c2khanna',
  }, {
    type: 'LinkedIn',
    display: 'Chaitanya Khanna',
    ref: 'https://www.linkedin.com/in/c2khanna/',
  }, {
    type: 'Website',
    display: 'chaitanyakhanna.me',
    ref: 'http://chaitanyakhanna.me',
  }],
  education: {
    university: {
      name: 'University of Waterloo',
      degree: 'BASc Computer Engineering',
      startDate: '2013-09-01',
      endDate: '2018-04-30',
      done: true,
    },
  },
  skills: {
    languages: [{
      name: 'JavaScript/ES6',
      proficiency: 0.9,
    }, {
      name: 'TypeScript',
      proficiency: 0.8,
    }, {
      name: 'GraphQL',
      proficiency: 0.8,
    }, {
      name: 'SQL',
      proficiency: 0.7,
    }, {
      name: 'Python',
      proficiency: 0.8,
    }],
    libraries: [
      'ReactJS',
      'Node.js',
      'Redux',
      'Angular',
    ],
    technologies: [
      'REST APIs',
      'WebSockets',
      'Microservices',
      'Git',
      'Unix',
    ],
    certifications: [{
      display: 'PSD I - Scrum.org',
      ref: 'https://www.scrum.org/certificates/576846',
    }],
  },
  experience: {
    jobs: [{
      isDisplayed: true,
      jobTitle: 'Full Stack Engineer',
      company: 'Yelp Inc.',
      technologies: [
        'Python',
        'React',
        'Typescript',
        'GraphQL',
      ],
      startDate: '2021-02-21',
      endDate: '',
      description: [
        'Led multiple projects that recommend new actions to business owners based on their Yelp Ads performance leading to multi-million dollar revenue growth',
        'Created various reusable server-driven UI components which surface data-driven insights on the Yelp Ads dashboard and cancel flow to reduce churn',
        'Improved developer experience by creating a Chrome extension that simplifies batched GraphQL queries and their responses in the browser',
        'Collaborated with cross-functional and cross-platform partners such as product managers and designers to define scope of the projects',
        'Actively participated in a company-wide mentorship program as a senior engineer to help other engineers achieve career goals at Yelp',
      ],
    },{
      isDisplayed: true,
      jobTitle: 'Software Consultant',
      company: 'Capgemini Canada Inc. (Manulife)',
      technologies: [
        'Node.js',
        'ReactJS',
        'Redux',
      ],
      startDate: '2018-10-15',
      endDate: '2021-02-15',
      description: [
        'Developed a unified customer login portal for all Manulife products using ReactJS and Node.js',
        'Implemented state management using Redux to reduce redundant network calls and improve latency',
        'Designed the architecture for session management to create a seamless single sign-in experience across legacy and modern Manulife products',
        'Undertook the role of technical lead and managed a team of four developers for a UI reskinning project at Manulife',
      ],
    }, {
      isDisplayed: true,
      jobTitle: 'Full Stack Developer',
      company: 'Go Ubiq Inc. (YC S17)',
      technologies: [
        'ReactJS',
        'Redux',
        'SASS',
      ],
      startDate: '2018-06-02',
      endDate: '2018-10-02',
      description: [
        'Developed a new web conferencing application using React and Redux',
        'Integrated Twilio call API for VOIP and dial out capabilities',
        'Implemented user feedback over iterations to improve user interface and overall experience',
      ],
    }, {
      isDisplayed: false,
      jobTitle: 'Software Developer',
      company: 'OpenText CORPORATION',
      technologies: [
        'Python',
        'Node.js',
        'AngularJS',
      ],
      startDate: '2017-01-01',
      endDate: '2017-12-30',
      description: [
        'Maintained desktop application for cloud-based content management system',
        'Updated desktop client with a new sharing permission level of a cloud-based content management system',
        'Enhanced synchronization engine to improve accuracy of image overlays in Windows Explorer and Mac Finder',
        'Created end to end tests using pytest for the new permission level which increased test coverage to 60% ',
      ],
    }, {
      isDisplayed: false,
      jobTitle: 'Programmer Analyst-I',
      company: 'TELUS HEALTH',
      technologies: [],
      startDate: '2016-05-01',
      endDate: '2016-08-30',
      description: [
        'Optimized SQL queries by creating SQL indexes and adding index hints',
        'Developed a service to asynchronously execute SQL queries using WebMethods',
        'Created a cluster and a sender/receiver app for continuous message processing; processed 5 to 10kb messages at up to 60,000 msgs/hr',
      ],
    }, {
      isDisplayed: false,
      jobTitle: 'Programmer Analyst',
      company: 'ONTARIO TEACHERS’ PENSION PLAN',
      technologies: [
        'C#',
        'AngularJS',
        'SQL',
      ],
      startDate: '2015-09-01',
      endDate: '2015-12-30',
      description: [
        'Developed a service with a RESTful API to establish communication between the database and the front-end of a web application',
        'Enhanced the in-house report management system using SQL stored procedures',
        'Implemented an interactive training module using AngularJS backed by a SOAP service',
      ],
    }, {
      isDisplayed: false,
      jobTitle: 'Mobile Web Developer',
      company: 'Canadian Blood Services',
      technologies: [
        'Groovy',
        'REST',
        'Spock',
      ],
      startDate: '2015-01-02',
      endDate: '2015-04-30',
      description: [
        'Developed a web application and REST API to deliver dynamic content to mobile apps, including documentation and unit tests',
        'Implemented automated tests using SPOCK testing framework',
        'Complete regression testing of the iOS and Android application',
      ],
    }, {
      isDisplayed: false,
      jobTitle: 'Business Solutions Intern',
      company: 'SSA Infosystems',
      technologies: [],
      startDate: '2014-05-01',
      endDate: '2014-08-30',
      description: [
        'Developed a Windows Mobile application to utilize RFID for inventory tracking, using C# & symbol.dll',
        'Tested functionality and UI/UX of a responsive web application on various devices',
      ],
    }],
    projects: [{
      name: 'Key Picker',
      isDisplayed: true,
      technologies: [
        'Angular',
        'Node.js',
        'PostgreSQL',
        'AWS',
      ],
      startDate: '2020-12-15',
      endDate: '2020-12-20',
      links: [{
        type: 'GitHub',
        display: 'github.com/c2khanna/key-picker',
        ref: 'https://github.com/c2khanna/key-picker',
      }, {
        type: 'Demo',
        display: 'KeyPicker',
        ref: 'http://keypicker.s3-website.us-east-2.amazonaws.com/',
      }],
      description: [
        'A single-page application which consolidates all mechanical keyboards into one sortable and filterable interface',
        'Implemented front-end using Angular, Express server in Node.js and PostgreSQL for the mechanical keyboard database',
        'Used knex.js library to convert filter requests into SQL queries',
        'Deployed website using AWS S3 for the frontend, EC2 for Express server and RDS for PostgreSQL database',
      ],
    }, {
      name: 'Affine Weddings',
      isDisplayed: true,
      technologies: [
        'ReactJS',
        'Node.js',
        'AWS',
      ],
      startDate: '2017-10-15',
      endDate: '2017-11-15',
      links: [{
        type: 'GitHub',
        display: 'github.com/c2khanna/affine_wedding',
        ref: 'https://github.com/c2khanna/affine_wedding',
      }, {
        type: 'Demo',
        display: 'affineweddings.com',
        ref: 'http://www.affineweddings.com',
      }],
      description: [
        'A single-page application website for a local wedding planning company',
        'Implemented inquiry form by incorporating Amazon Web Services\' Lambda functions and Simple Email Service',
      ],
    }, {
      name: 'Can you even Uber',
      isDisplayed: false,
      technologies: [
        'AngularJS',
        'HTML5',
        'CSS',
      ],
      startDate: '2016-03-01',
      endDate: '2016-03-30',
      links: [{
        type: 'GitHub',
        display: 'github.com/c2khanna/Uber',
        ref: 'https://github.com/c2khanna/Uber',
      }, {
        type: 'Demo',
        display: 'c2khanna.github.io/Uber/',
        ref: 'http://c2khanna.github.io/Uber/',
      }],
      description: [
        'A web application that helps you determine your eligibility to be an Uber driver',
        'Developed reusable Angular directives to use on the single page application',
      ],
    }, {
      name: 'Not For The Taste',
      isDisplayed: false,
      technologies: [
        'Node.js',
        'AngularJS',
        'MongoDB',
        'SASS',
      ],
      startDate: '2016-01-01',
      endDate: '2016-01-30',
      links: [{
        type: 'GitHub',
        display: 'github.com/c2khanna/lcbo-sales',
        ref: 'https://github.com/c2khanna/lcbo-sales',
      }, {
        type: 'Demo',
        display: 'notforthetaste.com',
        ref: 'https://www.notforthetaste.com',
      }],
      description: [
        'A Node.js based application that Queries the LCBO product list to extract all current items on sale',
        'Responsive frontend design written with AngularJS and Angular Material',
      ],
    }],
  },
};
