import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Portfolio',
        description: "My portfolio project, built using the Next.js framework, showcases a modern and appealing design. It includes EmailJS for seamless email communication and a Telegram bot for instant notifications, making the portfolio both visually stunning and highly functional. The layout features interactive cards that display information in a code snippet format, providing a unique and engaging user experience. Leveraging Next.js's server-side rendering and static site generation capabilities, the portfolio ensures fast load times and optimal performance. ",
        tools: ['Next JS', 'React', 'Javacript', 'SCSS', 'Telegram Bot', 'EmailJs', 'Typescript', 'TailwindCSS',"Vercel"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://github.com/Krish-Verma-03/portfolio',
        image: crefin,
    },
    {
        id: 2,
        name: 'Music School',
        description: ': Designed and developed a visually captivating website using the Next.js framework, with a strong emphasis on creating an immersive and interactive frontend experience. The project showcases a variety of advanced animations powered by AOS, including 3D card effects that add depth, meteor animations that bring the interface to life, and wavy backgrounds that enhance the overall aesthetic. These elements work together to deliver a seamless and engaging user experience, highlighting attention to detail and a commitment to creating a standout digital platform.',
        tools: ['NextJs','Typescript', 'Aceternity', "Javascript", "TailwindCSS","Vercel"],
        role: 'Developer && Designer',
        code: '',
        demo: 'https://your-music-school.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Refokus (Awwwards)',
        description: ': Developed a clone of the Refokus website, an award-winning design from Awwwards, focusing exclusively on the frontend. Utilized modern web technologies to create an engaging and responsive user interface. The project includes high-end animations and ensures a better user experience for mobile users. By implementing responsive design principles and sophisticated visual effects, the clone successfully captures the essence of the original site while providing a seamless experience across devices.',
        tools: ['React', 'Vite', "Javascript", "TailwindCSS",],
        role: 'Developer && Designer',
        code: '',
        demo: 'https://krish-verma-03.github.io/refokus-clone/',
        image: travel,
    },
    
    {
        id: 4,
        name: 'Products Mania',
        description: 'Developed a comprehensive e-commerce application frontend named Products Mania, showcasing a product listing and management system. Leveraged various web technologies and React features, including Axios for API integration, React Router for navigation, useEffect for data fetching, and useState and Context API for state management, ensuring consistent and centralized data flow to enhance functionality and user experience.',
        tools: ['React', 'TailwindCSS', 'JavaScript', 'Vite'],
        code: '',
        role: 'Developer && Designer',
        demo: 'https://krish-verma-03.github.io/products-mania/',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Realtime Chat App',
        description: "Developed a real-time chat application in Android Studio using Java, integrating several advanced features to enhance user interaction and experience. The application includes robust authentication mechanisms to ensure secure user access, auto-vanishing stories for ephemeral content sharing, real-time chat capabilities for instant communication, visually appealing shimmer layouts to enhance the loading experience, and support for media attachments to enable sharing of photos, videos, and other files seamlessly.",
        tools: ['Android Studio', 'Firebase', 'Java', 'XML', ],
        code: '',
        demo: 'https://github.com/Krish-Verma-03/us-bro-us',
        image: ayla,
        role: 'Developer && Designer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },