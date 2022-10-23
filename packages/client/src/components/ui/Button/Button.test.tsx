import React from 'react'
import { Button } from '@/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { CONTENT_RU } from '@/utils'

describe('Button', () => {
  test('Prop "textIntl"', () => {
    render(
      <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
        <Button type="button" textIntl="ENTER" />
      </IntlProvider>
    )
    expect(screen.getByText('Вход')).toBeDefined()
  })

  test('Prop "onClick"', () => {
    const handleClick = jest.fn()
    render(
      <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
        <Button type="button" textIntl="ENTER" onClick={handleClick} />
      </IntlProvider>
    )
    fireEvent.click(screen.getByText('Вход'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
