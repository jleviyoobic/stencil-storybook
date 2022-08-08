import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Molecules/Article Stats',
  argTypes: {
    reactions: { control: 'string' },
    comments: { control: 'string' },
    minToRead: { control: 'string' }
  }
} as Meta;

export const Default: Story<Components.ArticleStats> = (args) => <article-stats reactions="135" comments="5" minToRead="6" {...args}></article-stats>;
