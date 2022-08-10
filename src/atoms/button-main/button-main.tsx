import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-main',
  styleUrl: 'button-main.css',
  shadow: true,
})
export class ButtonMain implements ComponentInterface{

  @Prop() color: string
  @Prop() link: string
  @Prop() font: string
  @Prop() align: string

  render() {
    const classes = this.color + ' ' + this.font + ' ' + this.align
    return (
      <a class={classes} href={this.link} target='_blank'>
        <slot></slot>
      </a>
    );
  }

}
