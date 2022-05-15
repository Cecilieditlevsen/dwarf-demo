import { render, screen, waitFor } from '@testing-library/react'

import { FactBox } from './FactBox'
import userEvent from '@testing-library/user-event'

describe('FactBox', () => {
  it('render correctly', () => {
    render(<FactBox title="title" content="content" />)

    const readMore = screen.getByRole('button', { name: /read more/i })

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(readMore).toBeInTheDocument()

    userEvent.click(readMore)

    waitFor(() => {
      expect(readMore).not.toBeInTheDocument()

      expect(
        screen.getByRole('button', { name: /read less/i })
      ).toBeInTheDocument()
    })
  })
})
