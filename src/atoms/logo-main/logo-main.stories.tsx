import { h } from '@stencil/core';
import { Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Atoms/Main logo',
}

export const Default: Story<Components.LogoMain> = () => <logo-main />;
