import { h } from '@stencil/core';
import { Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Atoms/Main button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'transparent', 'smallest', 'tabs', 'username'],
      type: 'radio'
    },
    font: {
      options: ['bold', 'regular', 'light'],
      type: 'radio'
    },
    align: {
      options: ['start', 'center', 'end'],
      type: 'radio'
    },
    href: {control: 'text'}
  }
}

export const Primary: Story<Components.ButtonMain> = (args) => <button-main color='primary' {...args}>Primary</button-main>;
export const Secondary: Story<Components.ButtonMain> = (args) => <button-main color='secondary' {...args}>Secondary</button-main>;
export const Transparent: Story<Components.ButtonMain> = (args) => <button-main color='transparent' {...args}>Transparent</button-main>;
export const Smallest: Story<Components.ButtonMain> = (args) => <button-main color='smallest' {...args}>Smallest</button-main>;
export const Tabs: Story<Components.ButtonMain> = (args) => <button-main color='tabs' {...args}>Tabs</button-main>;
export const Username: Story<Components.ButtonMain> = (args) => <button-main color='username' {...args}>User Name</button-main>;
