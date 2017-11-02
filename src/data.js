/* eslint max-len: 0 */

export default {
  name: 'Chaitanya Khanna',
  links: [{
    type: 'Phone',
    display: '+1-519-572-0813',
    ref: 'tel:+15195720813',
  }, {
    type: 'Email',
    display: 'c2khanna@uwaterloo.ca',
    ref: 'mailto:c2khanna@uwaterloo.ca',
  }, {
    type: 'GitHub',
    display: 'github.com/c2khanna',
    ref: 'https://github.com/c2khanna',
  }],
  education: {
    university: {
      name: 'University of Waterloo',
      program: 'Computer Engineering',
      degree: 'BASc Computer Engineering',
      term: '4A',
      startDate: '2013-09-01',
      endDate: '2018-05-01',
      done: false,
    },
  },
  skills: {
    languages: [{
      name: 'JavaScript',
      proficiency: 0.5,
    }, {
      name: 'Java',
      proficiency: 0.8,
    }, {
      name: 'C#',
      proficiency: 0.8,
    }, {
      name: 'HTML/CSS',
      proficiency: 0.7,
    }, {
      name: 'SQL',
      proficiency: 0.6,
    }, {
      name: 'Python',
      proficiency: 0.9,
    }],
    technologies: [
      'Visual Studio',
      'IntelliJ',
      'REST APIs',
      'Git',
      'Unix',
    ],
  },
  experience: {
    jobs: [{
      jobTitle: 'Software Developer',
      company: 'OpenText CORPORATION',
      startDate: '2017-09-01',
      endDate: 'Present',
      description: [
        'Updated desktop client with a new sharing permission level of a cloud-based content management system',
        'Created end to end test suite for the new permission level to aid development',
      ],
    }, {
      jobTitle: 'Software Developer',
      company: 'OpenText CORPORATION',
      startDate: '2017-01-01',
      endDate: '2017-04-30',
      description: [
        'Maintained desktop application for cloud-based content management system',
        'Enhanced synchronization engine to improve accuracy of image overlays in Windows Explorer and Mac Finder',
        'Created end to end tests using pytest and increased test coverage to 60%',
      ],
    }, {
      jobTitle: 'Programmer Analyst-I',
      company: 'TELUS CORPORATION',
      startDate: '2016-05-01',
      endDate: '2016-08-30',
      description: [
        'Optimized SQL queries by creating SQL indexes and adding index hints',
        'Developed a service to asynchronously execute SQL queries using WebMethods',
        'Created a cluster and a sender/receiver app for continuous message processing; processed 5 to 10kb messages at up to 60,000 msgs/hr',
      ],
    }, {
      jobTitle: 'Programmer Analyst',
      company: 'ONTARIO TEACHERS’ PENSION PLAN BOARD',
      startDate: '2015-09-01',
      endDate: '2015-12-30',
      description: [
        'Developed a service with a RESTful API to establish communication between the database and the front-end of a web application',
        'Enhanced the in-house report management system using SQL stored procedures',
        'Implemented an interactive training module using AngularJS backed by a SOAP based service',
      ],
    }, {
      jobTitle: 'Mobile Web Developer',
      company: 'Canadian Blood Services',
      startDate: '2015-01-02',
      endDate: '2015-04-30',
      description: [
        'Developed a web application and REST API to deliver dynamic content to mobile apps, including documentation and unit tests',
        'Implemented automated tests using SPOCK testing framework',
        'Complete regression testing of the iOS and Android application',
      ],
    }],
    projects: [{
      name: 'Can you even Uber',
      technologies: ['AngularJS', 'HTML5', 'CSS'],
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
    }, {
      name: 'Rajdhani Expeller Industries',
      technologies: [
        'HTML',
        'AngularJS',
        'CSS',
        'PHP',
      ],
      startDate: '2015-12-01',
      endDate: '2015-12-30',
      links: [{
        type: 'GitHub',
        display: 'github.com/c2khanna/RAJ',
        ref: 'https://github.com/c2khanna/RAJ',
      }, {
        type: 'Demo',
        display: 'c2khanna.github.io/RAJ/',
        ref: 'http://c2khanna.github.io/RAJ/',
      }],
      description: [
        'Developed a website for Rajdhani Expeller Industries',
        'Used Bootstrap to make the website mobile responsive',
      ],
    }],
  },
};
