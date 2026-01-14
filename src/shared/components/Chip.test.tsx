import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Chip } from './Chip'

/**
 * Chip Component Tests
 *
 * These tests verify that the Chip component behaves as expected.
 * We are using 'describe' to group the tests, and 'it' to define individual test cases.
 */
describe('Chip Component', () => {
  /**
   * Test 1: Rendering
   * This test checks if the component renders the label text correctly.
   */
  it('renders the label correctly', () => {
    // 1. Arrange: Render the component with specific props
    render(<Chip label="React" />)

    // 2. Act & Assert: Check if the text "React" is present in the document
    // screen.getByText throws an error if the element is not found.
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  /**
   * Test 2: Custom Styling
   * This test verifies that we can pass additional CSS classes to the component.
   * This also indirectly tests our 'cn' utility usage within the component.
   */
  it('applies custom className', () => {
    // 1. Arrange: Render with a custom class
    render(<Chip label="TypeScript" className="bg-blue-500" />)

    // 2. Act: Find the element by its text
    const chipElement = screen.getByText('TypeScript')

    // 3. Assert: Check if the element has the custom class
    expect(chipElement).toHaveClass('bg-blue-500')

    // Also verify base classes are still there (optional but good sanity check)
    expect(chipElement).toHaveClass('inline-flex')
  })
})
