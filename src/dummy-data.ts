export interface Articles {
  author: {
    username: string;
    pic: string;
  };
  post: {
    pic: string;
    timestamp: string;
    title: string;
    tags: string[];
    reactions: number;
    comments: number;
    readTime: number;
  };
}

export interface User {
  username: string;
  pic: string;
  description: string;
  work: string;
  location: string;
  joined: string;
}

export const dummy_articles_latest: Articles[] = [
  {
    author: {
      username: 'Edinson Carranza Saldaña',
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8W2kVLc5--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/214899/c999c1e8-579c-40ca-ab26-7c8740c9de1f.jpg'
    },
    post: {
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--rxR9ATDf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/45fr8i6ck9es7bgy60vj.jpg',
      timestamp: '24-02-21',
      title: 'Api Cryptocurrency',
      tags: ['blockchain', 'cryptocurrency', 'api'],
      reactions: 15,
      comments: 1,
      readTime: 6
    }
  },
  {
    author: {
      username: 'Vladimír Macháček',
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--g5oE-rMU--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/347651/8ee92c4f-4272-47fa-b926-5bb5fcf3cdc6.jpeg'
    },
    post: {
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--4_E7FdDC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/nxr08h70pzba30omgdth.png',
      timestamp: '26-05-20',
      title: `JAMstack e-commerce using Apicart, FaunaDB, Gridsome and Netlify`,
      tags: ['apicart', 'fauna', 'jamstack', 'vue'],
      reactions: 47,
      comments: 3,
      readTime: 12
    }
  },
  {
    author: {
      username: 'Sooraj (PS)',
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Ostq1UTy--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/429269/56e8537a-4e86-491f-a583-67f611232154.png'
    },
    post: {
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--VZPwqb31--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/c2py61h0e9mjisaaiglc.png',
      timestamp: '16-09-20',
      title: 'Simple way to use the github REST api',
      tags: ['javascript', 'beginners', 'webdev', 'github'],
      reactions: 45,
      comments: 4,
      readTime: 3
    }
  }
];

export const dummy_articles: Articles[] = [
  {
    author: {
      username: 'Chris Bongers',
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--WRx_peXg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/370165/083a25f4-e79b-42c4-9e5f-0332b834ca5e.png'
    },
    post: {
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--3Tszi4cv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fz7zqfznkt2babxb0lgd.jpg',
      timestamp: '04-08-2022',
      title: 'The need for social interaction',
      tags: ['watercooler'],
      reactions: 16,
      comments: 3,
      readTime: 3
    }
  },
  {
    author: {
      username: 'simc dev CSM®',
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--g02BZ5co--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/887372/f5e860c6-687e-48cb-980c-61f87db84023.png'
    },
    post: {
      pic: '',
      timestamp: '04-08-2022',
      title: `Change your old methods for writing a JavaScript Code - Shorthand's for JavaScript Code`,
      tags: ['javascript', 'webdev', 'beginners', 'programming'],
      reactions: 24,
      comments: 2,
      readTime: 1
    }
  },
  {
    author: {
      username: 'Semi Design',
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--g_0y1VBW--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/868607/dbcccf03-cf07-4c93-af13-f63269c8ebad.jpg'
    },
    post: {
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--omc24G1Z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/66jrfpgq23gljs0nso5t.png',
      timestamp: '04-08-2022',
      title: 'How We Test Semi Design React Component',
      tags: ['react', 'webtesting', 'javascript', 'opensource'],
      reactions: 3,
      comments: 0,
      readTime: 19
    }
  },
  {
    author: {
      username: 'Asyraf Hussin',
      pic: ''
    },
    post: {
      pic: '',
      timestamp: '04-08-2022',
      title: 'Pure CSS Woman with Long Hair',
      tags: ['codepen', 'html', 'css', 'webdev'],
      reactions: 13,
      comments: 0,
      readTime: 1
    }
  }
];

export const users: User[] = [
  {
    username: 'Chris Bongers',
    pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--WRx_peXg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/370165/083a25f4-e79b-42c4-9e5f-0332b834ca5e.png',
    description: 'Looking to get into development? As a full-stack developer I guide you on this journey and give you bite sized tips every single day 👊',
    work: 'Solution Architect at Daily Dev Tips',
    location: 'Cape Town, South Africa',
    joined: 'April 20, 2020'
  },
  {
    username: 'simc dev CSM®',
    pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--g02BZ5co--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/887372/f5e860c6-687e-48cb-980c-61f87db84023.png',
    description: 'Developer 💻 | Technical Writer 📝| Open to collaborate 🔓 | PHP 8+ Years Experience | Helper',
    work: '',
    location: '',
    joined: 'Jul 5, 2022'
  },
  {
    username: 'Semi Design',
    pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--g_0y1VBW--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/868607/dbcccf03-cf07-4c93-af13-f63269c8ebad.jpg',
    description: 'https://semi.design',
    work: '',
    location: '',
    joined: 'May 27, 2022'
  },
  {
    username: 'Asyraf Hussin',
    pic: '',
    description: 'CSS is My Superpower',
    work: '',
    location: 'Malaysia',
    joined: 'May 12, 2019'
  },
  {
    username: 'Edinson Carranza Saldaña',
    pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8W2kVLc5--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/214899/c999c1e8-579c-40ca-ab26-7c8740c9de1f.jpg',
    description: 'Full Stack Developer | Blockchain Developer | AI enthusiast |',
    work: 'Software Enginner at Remote',
    location: 'Berna',
    joined: 'August 19, 2019'
  },
  {
    username: 'Vladimír Macháček',
    pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--g5oE-rMU--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/347651/8ee92c4f-4272-47fa-b926-5bb5fcf3cdc6.jpeg',
    description: 'Webdeveloper ✨ | Author of https://stylifycss.com 🎨 | Frontend-dev at Slevomat.cz 🏝️ | Previously Lekarna.cz 🌿',
    work: 'Software Enginner at Remote',
    location: 'Czech Republic',
    joined: 'March 8, 2020'
  },
  {
    username: 'Sooraj (PS)',
    pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Ostq1UTy--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/429269/56e8537a-4e86-491f-a583-67f611232154.png',
    description: 'Currently working as a Full Stack developer for Aquent/John Deere Web Developer - HTML, CSS, JS, TS, NodeJS, ReactJS, SvelteJS, Firebase, AngularJS, Bootstrap, Tailwind',
    work: 'Frontend Developer',
    location: '',
    joined: 'July 11, 2020'
  }
];
