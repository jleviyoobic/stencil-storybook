import { h } from '@stencil/core';
import { Meta, Story } from '@storybook/html';

import { Components } from '../../components';

export default {
  title: 'Molecules/Post Stamp',
  argTypes: {
    picSrc: { control: 'text' },
    username: { control: 'text' },
    timestamp: { control: 'text' }
  }
} as Meta;

export const Default: Story<Components.PostStamp> = (args) => (
  <post-stamp
    picSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--WRx_peXg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/370165/083a25f4-e79b-42c4-9e5f-0332b834ca5e.png"
    username="Chris Bongers"
    timestamp="04-08-2022"
    {...args}
  ></post-stamp>
);
