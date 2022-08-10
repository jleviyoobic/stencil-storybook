import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Pages/Home Page',
} as Meta;

export const Default: Story<Components.HomePage> = () => <home-page></home-page>;
