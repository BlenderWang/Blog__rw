import type { Meta, StoryObj } from '@storybook/react'

import PostLayout from './PostsLayout'

const meta: Meta<typeof PostLayout> = {
  component: PostLayout,
}

export default meta

type Story = StoryObj<typeof PostLayout>

export const Primary: Story = {}
