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
    ref: 'http://chaitanyakhanna.me'
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
      name: 'HTML/CSS',
      proficiency: 0.7,
    }, {
      name: 'SQL',
      proficiency: 0.6,
    }, {
      name: 'Python',
      proficiency: 0.8,
    }, {
      name: 'Java',
      proficiency: 0.7,
    }, {
      name: 'C#',
      proficiency: 0.5,
    }],
    libraries: [
      'ReactJS',
      'Node.js',
      'Redux',
      'Angular',
      'Spring Boot',
    ],
    technologies: [
      'REST APIs',
      'WebSockets',
      'Microservices',
      'Git',
      'Unix',
    ],
  },
  experience: {
    jobs: [{
      jobTitle: 'Consultant',
      company: 'Capgemini Canada Inc. (Manulife)',
      technologies: [
        'Node.js',
        'ReactJS',
        'Redux',
      ],
      startDate: '2018-10-15',
      endDate: '',
      description: [
        'Developed a unified customer login portal for all Manulife products using ReactJS and Node.js',
        'Implemented state management using Redux to reduce redundant network calls and improve latency',
        'Designed the architecture for session management to create a seamless single sign-in experience across legacy and modern Manulife products',
        'Undertook the role of technical lead and managed a team of four developers for a UI reskinning project at Manulife',
        'Improved unit test coverage to 75% using Jest and Enzyme and enforced continuous integration rules in development pipelines',
      ],
    }, {
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
      ],
    }, {
      jobTitle: 'Programmer Analyst',
      company: 'ONTARIO TEACHERS’ PENSION PLAN BOARD',
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
    }],
    projects: [{
      name: 'Affine Weddings',
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
        'Deployed website using AWS S3 and Route53',
      ],
    }, {
      name: 'Can you even Uber',
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
    }],
  },
};
