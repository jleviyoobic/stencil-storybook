import { Component, h } from '@stencil/core';

@Component({
  tag: 'navbar-main',
  styleUrl: 'navbar.scss',
  shadow: true
})
export class Navbar {
  render() {
    return (
      <header>
        <div id="header_content">
          <div id='search_block'>
            <logo-main></logo-main>
            <search-bar></search-bar>
          </div>
          <div id="buttons">
            <button-main color="transparent" link="https://www.google.com">
              Log in
            </button-main>
            <button-main color="secondary" link="https://www.google.com">
              Create account
            </button-main>
          </div>
        </div>
      </header>
    );
  }
}
