import { Component, h, State } from '@stencil/core';

import { Articles, dummy_articles, dummy_articles_latest } from '../../dummy-data';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
  shadow: true
})
export class Feed {
  artMode = 'relevant';
  @State() articles: Articles[] = dummy_articles;

  onSrtModeChanged({ detail }: CustomEvent<string>) {
    switch (detail) {
      case 'latest':
        this.articles = dummy_articles_latest;
        break;
      case 'top':
        this.articles = [];
        break;
      default:
        this.articles = dummy_articles;
        break;
    }
  }

  render() {
    return <feed-template articles={this.articles} onArticlesFeedMode={this.onSrtModeChanged.bind(this)} />;
  }
}
