import { Component, h } from '@stencil/core';

@Component({
  tag: 'description-block',
  styleUrl: 'description-block.scss',
  shadow: true
})
export class DescriptionBlock {
  render() {
    return (
      <div>
        <card-main bgColor='grey'>
          <slot></slot>
          <button-main align='center' color="secondary" font="regular" link="https://www.google.com">
            Create account
          </button-main>
          <button-main align='center' color="transparent" link="https://www.google.com">
            Log in
          </button-main>
        </card-main>
      </div>
    );
  }
}
