import { Component, h } from '@stencil/core';

@Component({
  tag: 'main-menu',
  styleUrl: 'main-menu.scss',
  shadow: true
})
export class MainMenu {
  render() {
    return (
      <div>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="home" />
          <p>Home</p>
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="list" />
          Listings
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="microphone" />
          Podcasts
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="video" />
          Videos
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="tags" />
          Tags
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="light" />
          FAQ
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="bags" />
          Forem Shop
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="heart" />
          Sponsors
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="colorful" />
          About
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="horn" />
          Contact
        </button-main>
        <button-main align="start" color="transparent" font="light">
          <custom-icons iconName="book" />
          Guides
        </button-main>
      </div>
    );
  }
}
