import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Components/My Component',
  argTypes: { first: { control: 'text' }, middle: { control: 'text' }, last: { control: 'text' } }
} as Meta;

export const Default: Story<Components.MyComponent> = (args) => <my-component {...args} />;
Default.args = { first: 'John', middle: 'Fitzgerald', last: 'Kennedy' };
