import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Organisms/Article Feeds'
} as Meta;

export const Default: Story<Components.ArticleFeed> = (args) => <article-feed {...args}></article-feed>;
