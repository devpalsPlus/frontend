import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import UserIcon from '../../../assets/user.svg';

const meta = {
  title: 'Component/Common/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'text', description: 'Avatar의 사이즈' },
    image: { control: 'text', description: 'Avatar의 이미지' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const imageLink: Story = {
  args: {
    size: '150px',
    image: 'https://picsum.photos/150',
  },
};
export const imageAsset: Story = {
  args: {
    size: '150px',
    image: UserIcon,
  },
};
