import { Component, h } from '@stencil/core';

const articles_dummy_data = [
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
      pic: 'https://res.cloudinary.com/practicaldev/image/fetch/s--WRx_peXg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/370165/083a25f4-e79b-42c4-9e5f-0332b834ca5e.png'
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

@Component({
  tag: 'feed-template',
  styleUrl: 'feed.css',
  shadow: true
})
export class Feed {
  render() {
    return (
      <div>
        <navbar-main></navbar-main>
        <div id="main_body">
          <aside>
            <description-block></description-block>
          </aside>
          <div>
            <div id="buttons_title">
              <button-main color="tabs" font="bold">
                Relevant
              </button-main>
              <button-main color="tabs" font="light">
                Latest
              </button-main>
              <button-main color="tabs" font="light">
                Top
              </button-main>
            </div>
            <div>
              {articles_dummy_data.map((el) => (
                <article-feed article={el}></article-feed>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
