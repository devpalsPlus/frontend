import type { Meta, StoryObj } from '@storybook/react';
import NoContent from './NoContent';
const meta = {
  title: 'Component/Common/NoContent',
  component: NoContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      description: '보여줄 내용이 없을 때 화면입니다.',
      control: { type: 'select', options: ['projects', 'applicants'] },
    },
  },
} satisfies Meta<typeof NoContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const projects: Story = {
  args: {
    type: 'projects',
  },
};

export const applicants: Story = {
  args: {
    type: 'applicants',
  },
};
