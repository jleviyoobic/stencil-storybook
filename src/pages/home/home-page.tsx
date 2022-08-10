import { Component, h, Listen, State, } from '@stencil/core';

import { Articles, dummy_articles, dummy_articles_latest } from '../../dummy-data';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.css',
  shadow: true
})
export class Feed {
  artMode = 'relevant';
  @State() articles: Articles[] = dummy_articles;

  @Listen('articlesFeedMode', { target: 'body' })
  onSrtModeChanged(event: CustomEvent) {
    if (event.detail === 'latest') this.articles = dummy_articles_latest;
    else if (event.detail === 'top') this.articles = []
    else this.articles = dummy_articles;
  }

  render() {
    return <feed-template articles={this.articles} />;
  }
}
