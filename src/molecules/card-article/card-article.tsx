import { Component, h, } from '@stencil/core';

@Component({
  tag: 'card-article',
  styleUrl: 'card-article.css',
  shadow: true,
})
export class CardArticle {

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }

}
