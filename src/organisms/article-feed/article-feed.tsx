import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'article-feed',
  styleUrl: 'article-feed.scss',
  shadow: true
})
export class ArticleFeed {
  @Prop() article;

  render() {
    return (
      <div>
        <card-main bgColor="white">
          <post-stamp picSrc={this.article.author?.pic} username={this.article.author?.username} timestamp={this.article.post.timestamp}></post-stamp>
          <div>
            <a href="" class="articleTitle">
              <h1>{this.article.post.title}</h1>
            </a>
            <div id='tagsBlock'>
              <article-tags tags={this.article.post.tags}></article-tags>
            </div>
            <article-stats reactions={this.article.post.reactions} comments={this.article.post.comments} minToRead={this.article.post.readTime}></article-stats>
          </div>
        </card-main>
      </div>
    );
  }
}
