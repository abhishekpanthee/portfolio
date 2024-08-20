export type ForceNode = {
	readonly fill: string;
	readonly height: number;
	readonly icon: string;
	readonly iconFill?: string;
	readonly since?: number;
	readonly text: string;
	readonly url?: string;
	readonly width: number;
};

export const defaultForceNodeSize: Pick<ForceNode, 'width' | 'height'> = {
	height: 34,
	width: 34
};

export const skills: ForceNode[] = [

	{
		fill: '#31A8FF',
		icon: 'adobephotoshop',
		since: 2019,
		text: 'Adobe Photoshop',
		...defaultForceNodeSize
	},
	
	{
		fill: '#7952B3',
		icon: 'bootstrap',
		since: 2020,
		text: 'Bootstrap',
		...defaultForceNodeSize
	},
	
	{
		fill: '#00C4CC',
		icon: 'canva',
		since: 2019,
		text: 'Canva',
		...defaultForceNodeSize
	},
	
	
	{
		fill: '#1572B6',
		icon: 'css3',
		since: 2017,
		text: 'CSS3',
		...defaultForceNodeSize
	},

	{
		fill: '#F24E1E',
		icon: 'figma',
		since: 2023,
		text: 'Figma',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'copilot',
		since: 2023,
		text: 'Copilot',
		...defaultForceNodeSize
	},
	{
		fill: '#F05032',
		icon: 'git',
		since: 2019,
		text: 'GIT',
		...defaultForceNodeSize
	},
	{
		fill: '#F05032',
		icon: 'github',
		since: 2020,
		text: 'GITHUB',
		...defaultForceNodeSize
	},
	{
		fill: '#2088FF',
		icon: 'githubactions',
		since: 2023,
		text: 'Github Actions',
		...defaultForceNodeSize
	},
	{
		fill: '#222222',
		icon: 'githubpages',
		since: 2020,
		text: 'Github Pages',
		...defaultForceNodeSize
	},
	{
		fill: '#4EAA25',
		icon: 'gnubash',
		since: 2016,
		text: 'Gnu Bash',
		...defaultForceNodeSize
	},

	
	{
		fill: '#246FDB',
		icon: 'googletagmanager',
		since: 2024,
		text: 'Google Tag Manager',
		...defaultForceNodeSize
	},
	
	
	
	{
		fill: '#E34F26',
		icon: 'html5',
		since: 2017,
		text: 'HTML5',
		...defaultForceNodeSize
	},

	
	{
		fill: '#F7DF1E',
		icon: 'javascript',
		iconFill: '#000',
		since: 2018,
		text: 'Javascript',
		...defaultForceNodeSize
	},
	
	{
		fill: '#FCC624',
		icon: 'linux',
		iconFill: '#000',
		since: 2015,
		text: 'Linux',
		...defaultForceNodeSize
	},

	{
		fill: '#000',
		icon: 'c',
		iconFill: '#000',
		since: 2020,
		text: 'C',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'python',
		iconFill: '#000',
		since: 2020,
		text: 'Python',
		...defaultForceNodeSize
	},
	{
		fill: '#000',
		icon: 'c++',
		iconFill: '#000',
		since: 2022,
		text: 'C++',
		...defaultForceNodeSize
	},
{
		fill: '#4285F4',
		icon: 'npm',
		since: 2023,
		text: 'NPM',
		...defaultForceNodeSize
	},
	{
		fill: '#4285F4',
		icon: 'matlab',
		since: 2025,
		text: 'Matlab',
		...defaultForceNodeSize
	},
	{
		fill: '#4285F4',
		icon: 'huggingface',
		since: 2025,
		text: 'Hugging face',
		...defaultForceNodeSize
	},
	{
		fill: '#E37400',
		icon: 'tensorflow',
		since: 2025,
		text: 'TensorFlow',
		...defaultForceNodeSize
	},
	
	{
		fill: '#217346',
		icon: 'markdown',
		since: 2023,
		text: 'Markdown',
		...defaultForceNodeSize
	},
	{
		fill: '#1B1F24',
		icon: 'mdx',
		since: 2023,
		text: 'MDX',
		...defaultForceNodeSize
	},
	
	{
		fill: '#217346',
		icon: 'microsoftexcel',
		since: 2014,
		text: 'MS Excel',
		...defaultForceNodeSize
	},
	{
		fill: '#B7472A',
		icon: 'microsoftpowerpoint',
		since: 2014,
		text: 'MS PowerPoint',
		...defaultForceNodeSize
	},
	{
		fill: '#2B579A',
		icon: 'microsoftword',
		since: 2014,
		text: 'MS Word',
		...defaultForceNodeSize
	},
	
	
	{
		fill: '#00C7B7',
		icon: 'netlify',
		since: 2022,
		text: 'Netlify',
		...defaultForceNodeSize
	},
	{
		fill: '#217346',
		icon: 'nextdotjs',
		since: 2023,
		text: 'Next JS',
		...defaultForceNodeSize
	},
	{
		fill: '#F7B93E',
		icon: 'prettier',
		since: 2019,
		text: 'Prettier',
		...defaultForceNodeSize
	},
	{
		fill: '#61DAFB',
		icon: 'react',
		since: 2022,
		text: 'React',
		...defaultForceNodeSize
	},
	
	{
		fill: '#363636',
		icon: 'solidity',
		since: 2024,
		text: 'Solidity',
		...defaultForceNodeSize
	},
	{
		fill: '#FF9800',
		icon: 'sublimetext',
		since: 2017,
		text: 'Sublime Text',
		...defaultForceNodeSize
	},
	{
		fill: '#06B6D4',
		icon: 'tailwindcss',
		since: 2023,
		text: 'Tailwind CSS',
		...defaultForceNodeSize
	},
	{
		fill: '#4285F4',
		icon: 'cloudflare',
		since: 2021,
		text: 'Cloudflare',
		...defaultForceNodeSize
	},
	{
		fill: '#3178C6',
		icon: 'typescript',
		since: 2023,
		text: 'Typescript',
		...defaultForceNodeSize
	},
	{
		fill: '#217346',
		icon: 'vercel',
		since: 2023,
		text: 'Vercel',
		...defaultForceNodeSize
	},

	{
		fill: '#007ACC',
		icon: 'visualstudiocode',
		since: 2017,
		text: 'Visual Studio Code',
		...defaultForceNodeSize
	},
	{
		fill: '#21759B',
		icon: 'wordpress',
		since: 2020,
		text: 'WordPress',
		...defaultForceNodeSize
	},
	{
		fill: '#21759B',
		icon: 'json-schema',
		since: 2020,
		text: 'JSON',
		...defaultForceNodeSize
	},
	{
		fill: '#FB7A24',
		icon: 'xampp',
		since: 2020,
		text: 'XAMPP',
		...defaultForceNodeSize
	},
	{
		fill: '#2C8EBB',
		icon: 'yarn',
		since: 2024,
		text: 'Yarn',
		...defaultForceNodeSize
	}
];
