import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'post-stamp',
  styleUrl: 'post-stamp.css',
  shadow: true
})
export class PostStamp {
  @Prop() picSrc: string
  @Prop() username: string
  @Prop() timestamp: string

  render() {
    return (
      <div id='container'>
        <avatar-circle pic={this.picSrc}></avatar-circle>
        <div>
          <button-main color='username'>{this.username}</button-main>
          <p>{this.timestamp}</p>
        </div>
      </div>
    );
  }
}
