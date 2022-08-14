import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Organisms/Navbar Main',
} as Meta;

export const Default: Story<Components.NavbarMain> = (args) => <navbar-main {...args}></navbar-main>;
