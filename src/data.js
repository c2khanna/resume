/* eslint max-len: 0 */

export default {
  name: 'Chaitanya Khanna',
  email: {
    display: 'chaitanya.khanna@capgemini.com',
    ref: 'mailto:chaitanya.khanna@capgemini.com',
  },
  subtitle: 'Technical Consultant',
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
      proficiency: 0.6,
    }, {
      name: 'C#',
      proficiency: 0.5,
    }],
    libraries: [
      'ReactJS',
      'Node.js',
      'Redux',
      'AngularJS',
    ],
    technologies: [
      'REST APIs',
      'WebSockets',
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
        'Developed and maintained the customer login portal for Manulife',
        'Integrated single sign-on service for various other Manulife products',
        'Improved Jest unit test coverage to 75% and enforced coverage rules in development pipelines',
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
      startDate: '2017-09-01',
      endDate: '2017-12-30',
      description: [
        'Updated desktop client with a new sharing permission level of a cloud-based content management system',
        'Improved user experience to help users locate sync errors easily',
        'Created end to end test suite for the new permission level to aid development',
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
      endDate: '2017-04-30',
      description: [
        'Maintained desktop application for cloud-based content management system',
        'Enhanced synchronization engine to improve accuracy of image overlays in Windows Explorer and Mac Finder',
        'Created end to end tests using pytest and increased test coverage to 60%',
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
        'Developed the application using ReactJS and styled it using CSS',
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
    }],
  },
};
