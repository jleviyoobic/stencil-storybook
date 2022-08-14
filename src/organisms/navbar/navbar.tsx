import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'navbar-main',
  styleUrl: 'navbar.scss',
  shadow: true
})
export class Navbar {
  @State() opened = false

  changeOpenedState() {
    this.opened = true
  }

  menuIsClosed() {
    this.opened = false
  }

  render() {
    return [
      <header>
        <div id="header_content">
          <div id="search_block">
            <button-main color="transparent" id="hamburgerBtn" onClick={this.changeOpenedState.bind(this)}>
              <custom-icons iconName="hamburger" />
            </button-main>
            <logo-main></logo-main>
            <search-bar></search-bar>
          </div>
          <div id="buttons">
            <button-main id="loginButton" color="transparent" link="https://www.google.com">
              Log in
            </button-main>
            <button-main color="secondary" link="https://www.google.com">
              Create account
            </button-main>
          </div>
        </div>
      </header>,
      <mobile-menu opened={this.opened} onMenuClosed={this.menuIsClosed.bind(this)}/>
    ];
  }
}
