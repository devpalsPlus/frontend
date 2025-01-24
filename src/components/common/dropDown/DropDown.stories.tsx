import type { Meta, StoryObj } from '@storybook/react';
import DropDown from './DropDown';

const meta = {
  title: 'Component/Common/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    isOpen: {
      description: '드롭다운의 초기 open상태입니다.',
      control: 'boolean',
    },
    toggleButton: {
      description: '드롭다운을 토글하는 버튼입니다.',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    ),
    isOpen: true,
    toggleButton: <button>Toggle Button</button>,
  },
};
