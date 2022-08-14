import { Component, Event,EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'mobile-menu',
  styleUrl: 'mobile-menu.scss',
  shadow: true
})
export class MainMenu {
  @Prop() opened: boolean;
  @Event() menuClosed: EventEmitter<boolean>;

  changeState() {
    console.log('close');
    this.opened = false;
    this.menuClosed.emit(false)
  }

  render() {
    return (
      <div id="mainContainer" class={this.opened ? 'opened' : 'closed'}>
        <div id="backdrop" onClick={this.changeState.bind(this)} class={this.opened ? 'opened' : 'closed'}></div>
        <div id="container">
          <div id="title">
            <h3>DEV Community</h3>
            <button-main onClick={this.changeState.bind(this)}>
              <custom-icons iconName="close" />
            </button-main>
          </div>
          <div id="description">
            <description-block>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
              <h2>
                <a href="">DEV Community</a> is a community of 886,927 amazing developers
              </h2>
              <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
            </description-block>
          </div>
          <main-menu></main-menu>
        </div>
      </div>
    );
  }
}
