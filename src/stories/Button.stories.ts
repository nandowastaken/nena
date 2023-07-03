import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightBlue: Story = {
  args: {
    label: 'Button',
    backgroundColor: '#61ECFF',
    fontColor: '#000000',
    fontWeight: 600,
    fontSize: 20,
    borderRadius: 20,
    width: 145,
    height: 45,
  },
};

export const Default: Story = {
  args: {
    label: 'Button'
  }
}
