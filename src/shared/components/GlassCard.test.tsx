import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { GlassCard } from './GlassCard'

/**
 * GlassCard Component Tests
 */
describe('GlassCard Component', () => {
  it('renders children correctly', () => {
    // Render the GlassCard with a test child
    render(
      <GlassCard>
        <div data-testid="test-child">Hello World</div>
      </GlassCard>
    )

    // Check if the child is present
    expect(screen.getByTestId('test-child')).toBeInTheDocument()
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <GlassCard className="custom-test-class">
        <span>Content</span>
      </GlassCard>
    )

    // Since GlassCard renders a wrapper div and a motion.div, we need to find the element
    // that receives the className.
    // Looking at GlassCard.tsx, the 'glassy-card' class is on the motion.div.
    // We can query by text and look at parents, or use a test-id, or query by class.

    // In this case, we know 'Content' is inside the card.
    const content = screen.getByText('Content')
    // The structure is roughly: Wrapper -> MotionDiv (Glassy Card) -> ContentWrapper -> Content
    // So the glass card is an ancestor of the content.

    // However, testing implementation details like DOM structure can be brittle.
    // A better approach might be to check if an element with that class exists.
    // Note: 'custom-test-class' should be merged into the element class list.

    // Let's try to find it by the class name itself, assuming it's applied to a div.
    // Note: react-testing-library encourages testing by accessible roles or text, avoiding implementation details.
    // But verifying class application is a valid exception for UI components.

    const card = document.querySelector('.custom-test-class')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('glassy-card')
  })
})
