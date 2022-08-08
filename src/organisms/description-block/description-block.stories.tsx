import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Organisms/Description Block'
} as Meta;

export const Default: Story<Components.DescriptionBlock> = (args) => <description-block {...args}></description-block>;
