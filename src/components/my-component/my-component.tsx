import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { format } from '../../utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent implements ComponentInterface {
  /**
   * First name.
   */
  @Prop() first: string;

  /**
   * Middle name.
   */
  @Prop() middle: string;

  /**
   * Last name.
   */
  @Prop() last: string;

  render() {
    return <Host>Hello, World! I'm {format(this.first, this.middle, this.last)}</Host>;
  }
}
