import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Organisms/User Modal'
} as Meta;

export const Default: Story<Components.UserModal> = (args) => <user-modal user='Chris Bongers' {...args}></user-modal>;
