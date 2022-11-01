import React from 'react'
import { renderToString } from 'react-dom/server'
import { IntlProvider } from 'react-intl'
import { Helmet, HelmetData } from 'react-helmet'
import type { Request, Response } from 'express'
import { CONTENT_RU } from 'client/src/utils'
import { store } from 'client/src/store'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import { App } from 'client/src/components/business/App'

const getHtml = (
  reactHtml: string,
  helmetData: HelmetData,
  reduxState = {}
) => {
  return `
    <!DOCTYPE html>
    <html lang='ru'>
    <head>
      <meta charset='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/vite.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      ${helmetData.title.toString()}
      ${helmetData.meta.toString()}
    </head>
    <body>
      <div id='root'>${reactHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
      </script>
      <script src='/main.js'></script>
    </body>
    </html>
    `
}

export const renderTemplate = (_req: Request, res: Response) => {
  const location = _req.url
  const jsx = (
    <Provider store={store}>
      <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
        <StaticRouter location={location}>
          <App />
        </StaticRouter>
      </IntlProvider>
    </Provider>
  )
  const reactHtml = renderToString(jsx)
  const helmetData = Helmet.renderStatic()
  const reduxState = store.getState()
  res.send(getHtml(reactHtml, helmetData, reduxState))
}
