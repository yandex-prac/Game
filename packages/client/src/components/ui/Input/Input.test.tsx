import React from 'react'
import { Input } from '@/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { CONTENT_RU } from '@/utils'
import { useState } from 'react'

describe('Input', () => {
  test('Prop "labelIntl"', () => {
    render(
      <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
        <Input type="text" labelIntl="LOGIN" value="test" />
      </IntlProvider>
    )
    expect(screen.getByDisplayValue('test')).toBeDefined()
  })

  test('Prop "onChange"', () => {
    const TestInput = () => {
      const [value, setValue] = useState('')
      render(
        <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
          <Input
            type="text"
            labelIntl="LOGIN"
            onChange={(e: any) => setValue(e.target.value)}
            value={value}
          />
        </IntlProvider>
      )

      const input = screen.getByDisplayValue(value) as HTMLInputElement
      fireEvent.change(input, { target: { value: 'Test value' } })
      expect(input.value).toBe('Test value')
    }
  })
})
