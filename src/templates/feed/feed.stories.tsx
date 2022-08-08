import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Templates/Feed Template'
} as Meta;

export const Default: Story<Components.FeedTemplate> = (args) => <feed-template {...args}></feed-template>;
