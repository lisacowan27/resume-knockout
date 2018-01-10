// MODEL

// Bio data
var bio = [
    {
    name: 'Lisa Cowan',
    role: 'Front End Developer',
    contacts: {
        mobile: '512.468.4200',
        email: 'cowan_lisa@att.net',
        github: 'lisacowan27',
        twitter: '',
        location: 'Austin, TX',
    },
    welcomeMessage: 'I am a seasoned Front End Developer who can use web technologies from HTML tables with font tags to the latest Chrome optimization tools. I approach every project as a challenge and an opportunity to achieve flawless collaboration with my team members. Whether slicing up a Photoshop design for pixel-perfect HTML/CSS layout or constructing a site in the right CMS for the job, I create code that is responsive, clean and optimized.',
    skills: [
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
    biopic: 'images/headshot_cowan.jpg'}
];

// Education data
var eduction = [
    {
        'schools': [
            {
                'name': 'The University of Houston',
                'location': 'Houston, TX',
                'degree': 'finished @ UT',
                'majors': ['Music'],
                'dates': '1983-1985',
                'url': 'http://www.uh.edu/'
            },
            {
                'name': 'The University of Texas at Austin',
                'location': 'Austin, TX',
                'degree': 'Bachelor\'s',
                'majors': ['Psychology'],
                'dates': '1990-1993',
                'url': 'https://www.utexas.edu/'
            },
            {
                'name': 'The University of Texas at Austin',
                'location': 'Austin, TX',
                'degree': 'Master\'s',
                'majors': ['Library and Information Science'],
                'dates': '1993 to 1995',
                'url': 'https://www.utexas.edu/'
            }
        ],
        'onlineCourses': [
            {
                'title': 'Front End Web Development',
                'school': 'Udacity',
                'dates' : 'current',
                'url': 'https://www.udacity.com/'
            }
        ]
    }
];

var work = [
    {
        'jobs' : [
            {
                'employer': 'Charles Schwab Platform Production',
                'title': 'Producer (contract)',
                'location': 'Austin, TX',
                'dates': 'July 2016 to July 2017',
                'description': [
                    'Managed a substantial queue of varied web-based projects',
                    'Published diverse content to the several proprietary content management systems',
                    'Ensured high quality standards in a team environment'
                ]
            },
            {
                'employer': 'Wunderman Production',
                'title': 'Interactive Developer (short-term contract)',
                'location': 'Austin, TX',
                'dates': 'March 2016 to June 2016',
                'description': [
                    'Created HTML/CSS from Photoshop layouts for proprietary email automation',
                    'Tested and verified code in Litmus suite',
                    'Constructed and maintained an Excel-based tracking system of client feedback for the team'
                ]

            },
            {
                'employer': 'Y&R Austin',
                'title': 'Senior Interactive Developer',
                'location': 'Austin, TX',
                'dates': 'November 2013 to March 2016',
                'description': [
                    'Programmed sites from Photoshop comps into WordPress: Agency website (yr-austin.com), Dell500 contest site (award-winning), Wildlife Rescue and Rehabilitation (wildlife-rescue.org)',
                    'Produced web-based emails from Photoshop comps and loaded into proprietary Dell email system for end users',
                    'Created departmental standards and wrote documentation for handling and setup of code repositories and local development environments for internal development team'
                ]
            },
            {
                'employer': 'Hill+Knowlton Strategies',
                'title': 'Senior Interactive Developer',
                'location': 'Austin, TX',
                'dates': 'March 2012 to November 2013',
                'description': [
                    'Developed sites from Photoshop comps into WordPress and Drupal: DeliveringforAmerica.com, LuminantCareers.com, CurbcutPartners.com, IL-FA.com and biotechnology.amgen.com',
                    'Programmed HTML emails from Photoshop comps and worked with the stakeholders to manage their distribution',
                    'Created departmental communication standards and documentation procedures'
                ]
            },
            {
                'employer': 'Enviromedia Social Marketing',
                'title': 'Interactive Developer',
                'location': 'Austin, TX',
                'dates': 'December 2009 to March 2012 (one year as a freelancer)',
                'description': [
                    'Designed and implemented PHP/MySQL application: DontMessWithTexas.org Scholarship contest',
                    'Developed WordPress sites from Photoshop comps: LoveKidneys.com, SaveKidneys.com, KnowMyStatus.org, Protect2.org, agency site, BestTeachinTexas.org',
                    'Performed stakeholder interviews, created information architecture, wrote database and programmed internal HR review system in PHP/MySQL/HTML and CSS'
                ]
            }
        ]
    }
];

var projects = [
    {
        'projects': [
            {
                'title': 'Udacity Arcade Game',
                'dates': 'October 2017',
                'description': ['Developed arcade game using JavaScript and HTML5 canvas to create collision and capture capabilities'],
                'images': ['images/arcade-game.png']
            },
            {
                'title': 'Y&R Austin website',
                'dates': 'Fall 2015',
                'description': ['Reskinned agency site in collaboration with agency designer from Photoshop comps',
                    'Updated and hardened the WordPress build to improve site security'],
                'images': ['images/yr-site.png']
            },
            {
                'title': 'Take Flight from Windows&reg; XP',
                'dates': 'Spring 2014',
                'description': ['Programmed an interactive infographic to encourage XP users to upgrade their OS',
                    'Used JavaScript and jQuery library called Superscrollarama to create the infographic from Photoshop mockups',
                    'Received W<sup>3</sup> Gold in 2014 and 2015 AVA Digital awards'],
                'images': ['images/yr-dell.png']
            },
            {
                'title': 'Wildlife Rescue and Rehabilitation interactive map',
                'dates': 'Spring 2015',
                'description': ['Developed a virtual tour of a local wildlife rescue organization for potential patrons to see how their donations could concretely benefit the organization',
                    'Programmed a second WordPress theme to implement the map into an existing site based on Illustrator comps'],
                'images': ['images/wildlife-rescue.png']
            },
            {
                'title': 'Luminant Careers website',
                'dates': 'Fall 2013',
                'description': ['Programmed WordPress site using the Thesis framework from Photoshop designs'],
                'images': ['images/luminant.png']
            },
            {
                'title': 'Curbcut Urban Partners website',
                'dates': 'Fall 2013',
                'description': ['Programmed WordPress site using the Thesis framework from Photoshop designs'],
                'images': ['images/curbcut.png']
            },
            {
                'title': 'Amgen Biotechnology website',
                'dates': 'Fall 2013',
                'description': ['Programmed Drupal site from Photoshop designs'],
                'images': ['images/amgen-biotech.png']
            },
            {
                'title': 'Illinois Finance Authority website',
                'dates': 'Fall 2013',
                'description': ['Re-developed Drupal site from Photoshop designs'],
                'images': ['images/ilfa.png']
            },
            {
                'title': 'Know My Status website',
                'dates': 'Spring 2012',
                'description': ['Programed website from Photoshop designs'],
                'images': ['images/know-status.png']
            }
        ]
    }
];

ko.applyBindings(ViewModel);
