import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Organisms/Mobile Menu',
  argTypes: {
    opened: {control: 'boolean'}
  }
} as Meta;

export const Default: Story<Components.MobileMenu> = (args) => <mobile-menu opened='true' {...args}></mobile-menu>;
