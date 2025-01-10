import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Component/Common/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      description: '버튼의 사이즈입니다. 두 가지 사이즈를 지원합니다.',
      control: { type: 'select' },
      options: ['primary', 'large'],
      table: {
        type: { summary: 'prymary | large' },
      },
    },
    schema: {
      description: '버튼의 색, 배경색입니다.',
      control: { type: 'select' },
      options: ['primary'],
      table: {
        type: { summary: 'prymary' },
      },
    },
    radius: {
      description:
        '버튼의 radius입니다. primary, large두가지 타입을 지원합니다.',
      control: { type: 'select' },
      options: ['primary', 'large'],
      table: {
        type: { summary: 'prymary | large' },
      },
    },
    children: {
      name: 'label',
      description: '버튼 안에 들어갈 텍스트입니다.',
      control: {
        type: 'text',
      },
    },
    disabled: {
      description: '버튼의 활성/비활성화 상태입니다.',
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    size: 'primary',
    schema: 'primary',
    radius: 'primary',
    children: 'Button',
    disabled: false,
  },
};
export const LargeButton: Story = {
  args: {
    size: 'large',
    schema: 'primary',
    radius: 'large',
    children: 'Button',
    disabled: false,
  },
};
