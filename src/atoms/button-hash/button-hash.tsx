import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-hash',
  styleUrl: 'button-hash.css',
  shadow: true,
})
export class ButtonHash {

  @Prop() color: string
  @Prop() link: string
  @Prop() font: string

  render() {
    const classes = this.color + ' ' + this.font
    const tagClasses = this.color + ' hashtag'
    return (
      <a class={classes} href={this.link} target='_blank'>
        <span class={tagClasses}>#</span><slot></slot>
      </a>
    );
  }

}
