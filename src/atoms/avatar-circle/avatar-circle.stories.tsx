import { h } from '@stencil/core';
import { Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Atoms/Avatar Circle',
  argTypes: {
    pic: { control: 'text' }
  }
};

export const Default: Story<Components.AvatarCircle> = (args) => (
  <avatar-circle
    pic="https://res.cloudinary.com/practicaldev/image/fetch/s--WRx_peXg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/370165/083a25f4-e79b-42c4-9e5f-0332b834ca5e.png"
    {...args}
  >
    Primary
  </avatar-circle>
);
