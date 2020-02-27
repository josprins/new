import Mock from '../mock';

const database = {
	information: {
		firstName: 'Jos',
		lastName: 'Prins',
		aboutContent:
			'Ik ben een front-end ontwikkelaar, ik schrijf clean code en ik maak websites interactief met animaties',
		age: 32,
		phone: '+316 241 542 12',
		nationality: 'Nederlands',
		language: 'Nederlands, Engels',
		email: 'jco.prins@gmail.com',
		address: 'Kapellerweg 31, 6132AT, Sittard, Netherlands',
		freelanceStatus: 'Available',
		socialLinks: {
			facebook: '',
			twitter: '',
			pinterest: '',
			behance: '',
			linkedin: 'https://nl.linkedin.com/in/jos-prins-bba29621',
			dribbble: '',
			github: 'https://github.com/josprins'
		},
		brandImage: 'images/headshot2.jpg',
		aboutImage: 'images/kangaroo.jpeg',
		aboutImageLg: 'images/about-image-lg.jpg',
		cvfile: '/files/cv.pdf'
	},
	services: [
		{
			title: 'Web Development',
			icon: 'code',
			details: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.'
		},
		{
			title: 'Mobile Application',
			icon: 'mobile',
			details: 'Creating software applications that run on a mobile device.'
		}
	],
	reviews: [
		{
			id: 1,
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
			author: {
				name: 'Burdette Turner',
				designation: 'Web Developer, Abc Company'
			}
		},
		{
			id: 2,
			content:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
			author: {
				name: 'Susan Yost',
				designation: 'Client'
			}
		},
		{
			id: 3,
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
			author: {
				name: 'Irving Feeney',
				designation: 'Fiverr Client'
			}
		}
	],
	skills: [
		{
			title: 'HTML5',
			value: 85
		},
		{
			title: 'CSS3',
			value: 80
		},
		{
			title: 'Javascript',
			value: 70
		},
		{
			title: 'jQuery',
			value: 65
		},
		{
			title: 'ReactJS',
			value: 75
		}
	],
	portfolios: [
		{
			id: 1,
			title: 'Registratie Formulier',
			subtitle:
				'Ik heb een responsive registratie formulier gemaakt waarbij ik veel verschillende HTML form input types en attributes heb gebruikt.',
			imageUrl: 'images/signupform.png',
			url: 'https://josprins.github.io/techdegree-project-three/'
		},
		{
			id: 2,
			title: 'Interactieve Video Speler',
			subtitle: 'In dit project heb ik gebruik gemaakt van Javascript en de HTML5 video API.',
			imageUrl: 'images/videoplayer.png',
			url: 'https://josprins.github.io/techdegree-project-6/'
		},
		{
			id: 3,
			title: 'Game Show App',
			subtitle:
				'Door gebruik te maken van Javascript, heb ik een array van zinnen gemaakt en functies geschreven die een willekeurige zin uitkiest van dat array, ze split in losse letters en als ze juist worden geraden ze plaatst op het gameboard.',
			imageUrl: 'images/gameshowapp.png',
			url: 'https://josprins.github.io/techdegree-project-7/'
		},
		{
			id: 4,
			title: 'Todo App',
			subtitle:
				'Voor dit project heb ik een todo lijst app gemaakt met React JS. Ik moest omgaan met props en state om data te delen tussen verschillende componenten en ik heb functies geschreven die gebruikt worden bij acties als het verwijderen of toevoegen van een todo.',
			imageUrl: 'images/todolist.png',
			url: 'https://josprins.github.io/todo-deploy/'
		},
		{
			id: 5,
			title: 'FlickR API Gallery',
			subtitle:
				'In dit project heb ik een afbeelding galerij gemaakt met React JS, React-router en axios om data te krijgen van de Flickr API.',
			imageUrl: 'images/Results-Layout.png',
			url: 'https://josprins.github.io/techdegree-project-11-deploy/'
		},
		{
			id: 6,
			title: 'Calculator App',
			subtitle: 'Voor dit project heb ik een rekenmachine gemaakt met simpel HTML, CSS en Javascript.',
			imageUrl: 'images/calculator.png',
			url: 'https://josprins.github.io/calculator//'
		},
		{
			id: 7,
			title: 'Web App Dashboard',
			subtitle:
				'Een interactief dashboard waarbij ik gebruik heb ik gemaakt van verschillende web technieken zoals SVG graphics en Javascript programmering.',
			imageUrl: 'images/dashboard.png',
			url: 'https://josprins.github.io/techdegree-project-9/'
		},
		{
			id: 8,
			title: 'Web Style Gids',
			subtitle:
				'Ik een web stijl gids gemaakt die gebruikt kan worden als custom Bootstrap voor het versnellen van styling, layout en web ontwikkeling in het algemeen.',
			imageUrl: 'images/webstyleguide.png',
			url: 'https://josprins.github.io/Techdegree-project-5/'
		},
		{
			id: 9,
			title: 'Deze Portfolio Website',
			subtitle:
				'In deze portfolio website heb ik alles gecombineerd dat ik geleerd heb. De website is gebouwd met React JS en ik heb extra dependencies gebruikt via Node Package Manager.',
			imageUrl: 'images/thisportfolio.png',
			url: 'https://www.josprins.com/'
		}
	],
	experience: {
		workingExperience: [
			{
				id: 1,
				year: '03/2019 - 10/2019',
				position: 'All-Round Logistics Employee',
				company: 'VDL Nedcar, Born, the Netherlands',
				details: ''
			},
			{
				id: 2,
				year: '03/2016 - 03/2018',
				position: 'All-Round Logistics Employee',
				company: 'VDL Nedcar, Born, the Netherlands',
				details: ''
			},
			{
				id: 3,
				year: '06/2016 - 12/2016',
				position: 'Construction worker / Marketing employee',
				company: 'Ecoformwork, Sydney, Austrlia',
				details: ''
			},
			{
				id: 3,
				year: '05/2014 - 03/2016',
				position: 'Sales Consultant',
				company: 'Bruynzeel Keukens, Son en Breugel, the Netherlands ',
				details: ''
			}
		],
		educationExperience: [
			{
				id: 1,
				year: '04/2019 - 04/2019',
				graduation: 'Techdegree, Front End Web Development',
				university: 'Treehouse Island, Inc',
				details: ''
			},
			{
				id: 2,
				year: '09/2007 - 05/2009',
				graduation: 'Marketing and Management Degree',
				university: 'Business School Notenboom',
				details: ''
			}
		]
	},
	blogs: [
		{
			id: 1,
			title: 'React new version is coming!',
			imageUrl: 'images/blog-image-1.jpg',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '03 December 2019'
		},
		{
			id: 2,
			title: 'More about react hooks',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '04 December 2019'
		},
		{
			id: 3,
			title: 'Next generation javascript learning source',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '05 December 2019'
		},
		{
			id: 4,
			title: 'Free tutorial downloading link.',
			imageUrl: 'images/blog-image-2.jpg',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '06 December 2019'
		},
		{
			id: 5,
			title: 'Get 2500 free mockup for design.',
			youtubeUrl: 'TKnufs85hXk',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '08 December 2019'
		},
		{
			id: 6,
			title: 'React vs Vue vs Angular, what is best?',
			vimeoUrl: '23534361',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '10 December 2019'
		},
		{
			id: 7,
			title: 'Web design typography & spacing.',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '03 December 2019'
		},
		{
			id: 8,
			title: 'React new version is coming with a great features.',
			content:
				'ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.',
			createTime: '03 December 2019'
		}
	],
	contactInfo: {
		phoneNumbers: [ '+316 241 542 12' ],
		emailAddress: [ 'jco.prins@gmail.com' ],
		address: 'Sittard'
	}
};

Mock.onGet('/api/information').reply((config) => {
	const response = database.information;
	return [ 200, response ];
});

Mock.onGet('/api/services').reply((config) => {
	const response = database.services;
	return [ 200, response ];
});

Mock.onGet('/api/reviews').reply((config) => {
	const response = database.reviews;
	return [ 200, response ];
});

Mock.onGet('/api/skills').reply((config) => {
	const response = database.skills;
	return [ 200, response ];
});

Mock.onGet('/api/portfolios').reply((config) => {
	const response = database.portfolios;
	return [ 200, response ];
});

Mock.onGet('/api/experience').reply((config) => {
	const response = database.experience;
	return [ 200, response ];
});

Mock.onGet('/api/contactinfo').reply((config) => {
	const response = database.contactInfo;
	return [ 200, response ];
});
