import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'post-stamp',
  styleUrl: 'post-stamp.scss',
  shadow: true
})
export class PostStamp {
  @Prop() picSrc: string;
  @Prop() username: string;
  @Prop() timestamp: string;

  render() {
    return (
      <div id="container">
        <div id='userPic'>
          <avatar-circle pic={this.picSrc}></avatar-circle>
        </div>
        <div>
          <button-main username={this.username} color="username">{this.username}</button-main>
          <p>{this.timestamp}</p>
        </div>
      </div>
    );
  }
}
