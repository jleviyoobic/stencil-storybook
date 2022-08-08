import { h } from '@stencil/core';
import { Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Atoms/Search bar',
}

export const Default: Story<Components.SearchBar> = () => <search-bar />;
