import { h } from '@stencil/core';
import { Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Atoms/Hash button',
  argTypes: {
    color: {
      options: ['blue', 'yellow', 'green', 'red', 'lightblue', 'black', 'orange', 'pink', 'purple', 'lightgreen'],
      type: 'radio'
    },
    font: {
      options: ['tiny', 'small', 'medium', 'big'],
      type: 'radio'
    },
    href: {control: 'text'}
  }
}

export const Default: Story<Components.ButtonHash> = (args) => <button-hash color='blue' {...args}>choose color</button-hash>;

