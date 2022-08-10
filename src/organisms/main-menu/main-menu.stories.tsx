import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Organisms/Main Menu'
} as Meta;

export const Default: Story<Components.MainMenu> = (args) => <main-menu {...args}></main-menu>;
