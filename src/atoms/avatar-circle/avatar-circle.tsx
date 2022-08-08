import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'avatar-circle',
  styleUrl: 'avatar-circle.css',
  shadow: true
})
export class AvatarCircle {
  @Prop() pic: string;

  render() {
    return <img src={this.pic} alt="https://dev.to/" />;
  }
}
