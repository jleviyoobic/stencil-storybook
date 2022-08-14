import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'article-stats',
  styleUrl: 'article-stats.scss',
  shadow: true
})
export class ArticleStats {
  @Prop() reactions: string;
  @Prop() comments: string;
  @Prop() minToRead: string;

  render() {
    let reactionsBtn = <div></div>;
    let commentsTxt = <div class="word">Add Comment</div>;
    if (+this.reactions > 1) {
      reactionsBtn = (
        <button-main color="username">
          <custom-icons iconName="heart-sm" />
          <div class='flex'>
            {this.reactions} <span class="word">&nbsp;reactions</span>
          </div>
        </button-main>
      );
    }
    if (+this.comments > 0) {
      commentsTxt = (
        <div class='flex'>
          {this.comments}
          <span class="word">&nbsp;comments</span>
        </div>
      );
    }
    return (
      <div id="container">
        <div class="container-btns">
          {reactionsBtn}
          <button-main color="username">
            <custom-icons iconName="cloud" />
            {commentsTxt}
          </button-main>
        </div>
        <div class="container-btns timeToRead">
          <p>{this.minToRead} min read</p>
          <button-main color="smallest">Save</button-main>
        </div>
      </div>
    );
  }
}
