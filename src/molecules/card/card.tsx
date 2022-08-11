import { Component, h, Prop, } from '@stencil/core';

@Component({
  tag: 'card-main',
  styleUrl: 'card.scss',
  shadow: true,
})
export class CardMain {
  @Prop() bgColor: string

  render() {
    return (
      <div class={this.bgColor}>
        <slot></slot>
      </div>
    );
  }

}
