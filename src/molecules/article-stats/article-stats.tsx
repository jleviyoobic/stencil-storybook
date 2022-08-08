import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'article-stats',
  styleUrl: 'article-stats.css',
  shadow: true
})
export class ArticleStats {
  @Prop() reactions: string;
  @Prop() comments: string;
  @Prop() minToRead: string;

  render() {
    let reactionsBtn = <div></div>;
    let commentsTxt = 'Add Comment';
    if (+this.reactions > 1) {
      reactionsBtn = (
        <button-main color="username">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ah330pf6ts7wocdlblorpa6wltz2p5lf" class="crayons-icon">
            <title id="ah330pf6ts7wocdlblorpa6wltz2p5lf">Reactions</title>
            <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
          </svg>
          {this.reactions} reactions
        </button-main>
      );
    }
    if (+this.comments > 0) {
      commentsTxt = this.comments + ' comments';
    }
    return (
      <div id="container">
        <div class="container-btns">
          {reactionsBtn}
          <button-main color="username">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9txpqobn6oenicz2q7gngkabu3ehrxi" class="crayons-icon">
              <title id="a9txpqobn6oenicz2q7gngkabu3ehrxi">Comments</title>
              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
            </svg>
            {commentsTxt}
          </button-main>
        </div>
        <div class="container-btns timeToRead">
          <p>{this.minToRead} min read</p>
          <button-main color='smallest'>Save</button-main>
        </div>
      </div>
    );
  }
}
