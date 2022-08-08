import { Component, h } from '@stencil/core';

@Component({
  tag: 'logo-main',
  styleUrl: 'logo-main.css',
  shadow: true,
})
export class LogoMain {

  render() {
    return (
      <a href='https://dev.to/'>
        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="https://dev.to/"/>
      </a>
    );
  }

}
