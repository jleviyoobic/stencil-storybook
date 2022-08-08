import { Component, h } from '@stencil/core';

@Component({
  tag: 'description-block',
  styleUrl: 'description-block.css',
  shadow: true
})
export class DescriptionBlock {
  render() {
    return (
      <div>
        <card-main>
          <h2><a href="">DEV Community</a> is a community of 886,927 amazing developers</h2>
          <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
          <button-main color="secondary" font="regular" link="https://www.google.com">
            Create account
          </button-main>
          <button-main color="transparent" link="https://www.google.com">
            Log in
          </button-main>
        </card-main>
      </div>
    );
  }
}
