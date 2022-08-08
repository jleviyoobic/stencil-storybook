import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Molecules/Article Tags',
  argTypes: {
    tags: {control: 'text'}
  }
} as Meta;

export const Default: Story<Components.ArticleTags> = (args) => <article-tags {...args}></article-tags>;
