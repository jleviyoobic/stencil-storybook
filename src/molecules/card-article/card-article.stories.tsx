import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Molecules/Card Article'
} as Meta;

export const Default: Story<Components.CardArticle> = (args) => <card-article {...args}></card-article>;
