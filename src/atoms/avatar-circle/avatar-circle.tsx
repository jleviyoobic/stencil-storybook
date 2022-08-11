import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'avatar-circle',
  styleUrl: 'avatar-circle.scss',
  shadow: true
})
export class AvatarCircle {
  @Prop() pic: string;

  render() {
    let placeholder = <div></div>
    let pic = <img src={this.pic} />
    if (this.pic == '') {
      placeholder = <div id='emptyCircle'></div>
      pic = <div></div>
    }
    return [placeholder, pic];
  }
}
