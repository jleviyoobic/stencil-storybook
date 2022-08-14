import { h } from '@stencil/core';
import { Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Atoms/Custom Icons',
  argTypes: {
    iconName: { control: 'text' }
  }
};

export const Home: Story<Components.CustomIcons> = () => <custom-icons iconName="home" />;
