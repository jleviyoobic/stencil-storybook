import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

import { Articles } from '../../dummy-data';

@Component({
  tag: 'feed-template',
  styleUrl: 'feed.scss',
  shadow: true
})
export class Feed {
  @Prop() articles: Articles[];

  @State() chosenMode = 'relevant';

  @Event() articlesFeedMode: EventEmitter<string>;

  onArtModeSelected(mode: string) {
    this.articlesFeedMode.emit(mode);
    this.chosenMode = mode;
  }

  render() {
    let articlesBlock = (
      <div class='emptyArts'>
        <h2>There are no articles to show</h2>
      </div>
    );
    if (this.articles.length > 0) {
      articlesBlock = (
        <div>
          {this.articles?.map((el) => (
            <article-feed article={el}></article-feed>
          ))}
        </div>
      );
    }
    return (
      <div>
        <navbar-main />
        <div id="main_body">
          <aside>
            <description-block>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
              <h2>
                <a href="">DEV Community</a> is a community of 886,927 amazing developers
              </h2>
              <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
            </description-block>
            <div class="mt-1">
              <main-menu></main-menu>
            </div>
          </aside>
          <div>
            <div id="buttons_title">
              <button-main color="tabs" font={this.chosenMode === 'relevant' ? 'bold' : 'light'} onClick={this.onArtModeSelected.bind(this, 'relevant')}>
                Relevant
              </button-main>
              <button-main color="tabs" font={this.chosenMode === 'latest' ? 'bold' : 'light'} onClick={this.onArtModeSelected.bind(this, 'latest')}>
                Latest
              </button-main>
              <button-main color="tabs" font={this.chosenMode === 'top' ? 'bold' : 'light'} onClick={this.onArtModeSelected.bind(this, 'top')}>
                Top
              </button-main>
            </div>
            {articlesBlock}
          </div>
        </div>
      </div>
    );
  }
}
