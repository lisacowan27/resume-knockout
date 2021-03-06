// MODEL
// Global variables
var ko;

// Bio data
var bios = [
    {
        bioName: 'Lisa Cowan',
        bioRole: 'Front End Developer',
        bioMobile: '512.468.4200',
        bioEmail: 'cowan_lisa@att.net',
        bioGithub: 'lisacowan27',
        bioLocation: 'Austin, TX',
        bioWelcomeMessage: 'I am a seasoned Front End Developer who can use web technologies from HTML tables with font tags to the latest Chrome optimization tools. I approach every project as a challenge and an opportunity to achieve flawless collaboration with my team members. Whether slicing up a Photoshop design for pixel-perfect HTML/CSS layout or constructing a site in the right CMS for the job, I create code that is responsive, clean and optimized.',
        bioSkills: [
        'HTML5',
        'CSS3',
        'PHP',
        'MySQL',
        'JavaScript',
        'jQuery',
        'Responsive development',
        'WordPress',
        'Drupal 7 & 8',
        'Joomla!',
        'Bootstrap',
        '960 grid',
        'Sublime Text',
        'GitHub',
        'Photoshop, Illustrator',
        'Project management & organization',
        'Requirements gathering',
        'Information architecture'
        ],
        biopic: 'images/headshot_cowan.jpg'
    }
];

// Initialize bio data
var Bio = function (data) {

    this.bioName = ko.observable(data.bioName);
    this.bioRole = ko.observable(data.bioRole);
    this.bioMobile = ko.observable(data.bioMobile);
    this.bioEmail = ko.observable(data.bioEmail);
    this.bioGithub = ko.observable(data.bioGithub);
    this.bioLocation = ko.observable(data.bioLocation);
    this.bioWelcomeMessage = ko.observable(data.bioWelcomeMessage);
    this.biopic = ko.observable(data.biopic);
    this.bioSkills = ko.observableArray(data.bioSkills);
};

// Work data
var jobs = [
    {
        employer: 'Charles Schwab Platform Production',
        jobTitle: 'Producer (contract)',
        jobLocation: 'Austin, TX',
        jobDates: 'July 2016 to July 2017',
        jobDescription: [
            'Managed a substantial queue of varied web-based projects',
            'Published diverse content to the several proprietary content management systems',
            'Ensured high quality standards in a team environment'
        ]
    },
    {
        employer: 'Wunderman Production',
        jobTitle: 'Interactive Developer (short-term contract)',
        jobLocation: 'Austin, TX',
        jobDates: 'March 2016 to June 2016',
        jobDescription: [
            'Created HTML/CSS from Photoshop layouts for proprietary email automation',
            'Tested and verified code in Litmus suite',
            'Constructed and maintained an Excel-based tracking system of client feedback for the team'
        ]
    },
    {
        employer: 'Y&R Austin',
        jobTitle: 'Senior Interactive Developer',
        jobLocation: 'Austin, TX',
        jobDates: 'November 2013 to March 2016',
        jobDescription: [
            'Programmed sites from Photoshop comps into WordPress: Agency website (yr-austin.com), Dell500 contest site (award-winning), Wildlife Rescue and Rehabilitation (wildlife-rescue.org)',
            'Produced web-based emails from Photoshop comps and loaded into proprietary Dell email system for end users',
            'Created departmental standards and wrote documentation for handling and setup of code repositories and local development environments for internal development team'
        ]
    },
    {
        employer: 'Hill+Knowlton Strategies',
        jobTitle: 'Senior Interactive Developer',
        jobLocation: 'Austin, TX',
        jobDates: 'March 2012 to November 2013',
        jobDescription: [
            'Developed sites from Photoshop comps into WordPress and Drupal: DeliveringforAmerica.com, LuminantCareers.com, CurbcutPartners.com, IL-FA.com and biotechnology.amgen.com',
            'Programmed HTML emails from Photoshop comps and worked with the stakeholders to manage their distribution',
            'Created departmental communication standards and documentation procedures'
        ]
    },
    {
        employer: 'Enviromedia Social Marketing',
        jobTitle: 'Interactive Developer',
        jobLocation: 'Austin, TX',
        jobDates: 'December 2009 to March 2012 (one year as a freelancer)',
        jobDescription: [
            'Designed and implemented PHP/MySQL application: DontMessWithTexas.org Scholarship contest',
            'Developed WordPress sites from Photoshop comps: LoveKidneys.com, SaveKidneys.com, KnowMyStatus.org, Protect2.org, agency site, BestTeachinTexas.org',
            'Performed stakeholder interviews, created information architecture, wrote database and programmed internal HR review system in PHP/MySQL/HTML and CSS'
        ]
    }
];

// Initialize job data
var Job = function (data) {

    this.employer = ko.observable(data.employer);
    this.jobTitle = ko.observable(data.jobTitle);
    this.jobLocation = ko.observable(data.jobLocation);
    this.jobDates = ko.observable(data.jobDates);
    this.jobDescription = ko.observableArray(data.jobDescription);
};

// Projects data
var projects = [
    {
        projectTitle: 'Udacity Neighborhood Map',
        projectDate: 'December 2017',
        projectURL: 'https://github.com/lisacowan27/neighborhood-map',
        projectDescription: [
            'Developed single page map application using Google Maps API, WikiMedia API, Knockout.js, and Bootstrap',
            'Functionality includes Knockout filter, links to WikiMedia and original photography'
            ],
        projectImages: 'images/neighborhood-map.png'
    },
    {
        projectTitle: 'Udacity Arcade Game',
        projectDate: 'October 2017',
        projectURL: 'https://github.com/lisacowan27/frontend-nanodegree-arcade-game',
        projectDescription: [
            'Developed arcade game using JavaScript and HTML5 canvas to create collision and capture capabilities'
            ],
        projectImages: 'images/arcade-game.png'
    },
    {
        projectTitle: 'Y&R Austin website',
        projectDate: 'Fall 2015',
        projectURL: 'http://yr-austin.com',
        projectDescription: [
            'Reskinned agency site in collaboration with agency designer from Photoshop comps',
                    'Updated and hardened the WordPress build to improve site security'
            ],
        projectImages: 'images/yr-site.png'
    },
    {
        projectTitle: 'Take Flight from Windows; XP',
        projectDate: 'Spring 2014',
        projectURL: 'http://yr-austin.com/showcase/dell/sites/xp/ ',
        projectDescription: [
            'Programmed an interactive infographic to encourage XP users to upgrade their OS',
                    'Used JavaScript and jQuery library called Superscrollarama to create the infographic from Photoshop mockups',
                    'Received W3 Gold in 2014 and 2015 AVA Digital awards'
            ],
        projectImages: 'images/yr-dell.png'
    },
    {
        projectTitle: 'Wildlife Rescue and Rehabilitation interactive map',
        projectDate: 'Spring 2015',
        projectURL: 'http://wildlife-rescue.org/about/facilities/interactive-map/',
        projectDescription: [
            'Developed a virtual tour of a local wildlife rescue organization for potential patrons to see how their donations could concretely benefit the organization',
                    'Programmed a second WordPress theme to implement the map into an existing site based on Illustrator comps'
            ],
        projectImages: 'images/wildlife-rescue.png'
    },
    {
        projectTitle: 'Luminant Careers website',
        projectDate: 'Fall 2013',
        projectURL: 'http://www.luminantcareers.com/',
        projectDescription: [
            'Programmed WordPress site using the Thesis framework from Photoshop designs'
            ],
        projectImages: 'images/luminant.png'
    },
    {
        projectTitle: 'Curbcut Urban Partners website',
        projectDate: 'Fall 2013',
        projectURL: 'http://curbcutpartners.com/',
        projectDescription: [
            'Programmed WordPress site using the Thesis framework from Photoshop designs'
            ],
        projectImages: 'images/curbcut.png'
    },
    {
        projectTitle: 'Amgen Biotechnology website',
        projectDate: 'Fall 2013',
        projectURL: 'http://biotechnology.amgen.com/',
        projectDescription: [
            'Programmed Drupal site from Photoshop designs'],
        projectImages: 'images/amgen-biotech.png'
    },
    {
        projectTitle: 'Illinois Finance Authority website',
        projectDate: 'Fall 2013',
        projectURL: 'http://il-fa.com/',
        projectDescription: [
            'Re-developed Drupal site from Photoshop designs'],
        projectImages: 'images/ilfa.png'
    },
    {
        projectTitle: 'Know My Status website',
        projectDate: 'Spring 2012',
        projectURL: 'http://www.knowmystatus.org/',
        projectDescription: ['Programed website from Photoshop designs'],
        projectImages: 'images/know-status.png'
    }
];

// Initialize project data
var Project = function (data) {

    this.projectTitle = ko.observable(data.projectTitle);
    this.projectDate = ko.observable(data.projectDate);
    this.projectURL = ko.observable(data.projectURL);
    this.projectDescription = ko.observableArray(data.projectDescription);
    this.projectImages = ko.observable(data.projectImages);
};

// Education data
var schools = [
    {
        schoolName: 'The University of Texas at Austin',
        schoolLocation: 'Austin, TX',
        degree: 'Bachelor\'s',
        majors: ['Psychology'],
        schoolDates: '1990-1993',
        schoolURL: 'https://www.utexas.edu/'
    },
    {
        schoolName: 'The University of Texas at Austin',
        schoolLocation: 'Austin, TX',
        degree: 'Master\'s',
        majors: ['Library and Information Science'],
        schoolDates: '1993 to 1995',
        schoolURL: 'https://www.utexas.edu/'
    }
];


// Online course data
var onlineCourses = [
    {
        onlineCoursetitle: 'Front End Web Development',
        onlineCourseName: 'Udacity',
        onlineCourseDates: 'current',
        onlineCourseURL: 'https://www.udacity.com/'
    }
];

// Initialize projects data
var Education = function (data) {

    this.schoolName = ko.observable(data.schoolName);
    this.schoolLocation = ko.observable(data.schoolLocation);
    this.degree = ko.observable(data.degree);
    this.majors = ko.observable(data.majors);
    this.schoolDates = ko.observable(data.schoolDates);
    this.schoolURL = ko.observable(data.schoolURL);
    this.onlineCoursetitle = ko.observable(data.onlineCoursetitle);
    this.onlineCourseName = ko.observable(data.onlineCourseName);
    this.onlineCourseDates = ko.observable(data.onlineCourseDates);
    this.onlineCourseURL = ko.observable(data.onlineCourseURL);
};


var ViewModel = function (data) {
    // self will always map to the VM
    var self = this;

    // CREATE BIO OBSERVABLE ARRAY AND PUSH DATA
    this.bioList = ko.observableArray([]);
    bios.forEach(function (bio) {
        self.bioList.push(new Bio(bio));
    });

    // CREATE WORK OBSERVABLE ARRAY AND PUSH DATA
    this.jobList = ko.observableArray([]);
    jobs.forEach(function (job) {
        self.jobList.push(new Job(job));
    });

    // CREATE PROJECT OBSERVABLE ARRAY AND PUSH DATA
    this.projectsList = ko.observableArray([]);
    projects.forEach(function (project) {
        self.projectsList.push(new Project(project));
    });

    // CREATE SCHOOL OBSERVABLE ARRAY AND PUSH DATA
    this.schoolList = ko.observableArray([]);
    schools.forEach(function (school) {
        self.schoolList.push(new Education(school));
    });

    // CREATE BIO ONLINE COURSES ARRAY AND PUSH DATA
    this.onlineCourseList = ko.observableArray([]);
    onlineCourses.forEach(function (onlineCourse) {
        self.onlineCourseList.push(new Education(onlineCourse));
    });
};

// Bind VM
ko.applyBindings(ViewModel);