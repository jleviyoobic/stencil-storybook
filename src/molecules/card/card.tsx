import { Component, h, } from '@stencil/core';

@Component({
  tag: 'card-main',
  styleUrl: 'card.css',
  shadow: true,
})
export class CardMain {

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }

}
