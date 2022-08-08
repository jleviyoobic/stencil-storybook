import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Molecules/Card'
} as Meta;

export const Default: Story<Components.CardMain> = (args) => <card-main {...args}></card-main>;
