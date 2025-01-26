import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { fn } from '@storybook/test';
const meta = {
  title: 'Component/Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    children: { control: 'text' },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: 'modal test',
  },
};
