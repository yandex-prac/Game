import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/components'
import './index.css'
import { IntlProvider } from 'react-intl'
import { CONTENT_RU } from '@/utils'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
      <App />
    </IntlProvider>
  </React.StrictMode>
)
