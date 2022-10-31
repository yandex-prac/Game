import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/components'
import './index.css'
import { IntlProvider } from 'react-intl'
import { CONTENT_RU } from '@/utils'
import { Provider } from 'react-redux'
import { store } from '@/store'

console.log('CSR store', store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>
)
