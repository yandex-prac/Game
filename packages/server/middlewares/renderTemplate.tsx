import React from 'react'
import { renderToString } from 'react-dom/server'
import { IntlProvider } from 'react-intl'
import { Helmet, HelmetData } from 'react-helmet'
import type { Request, Response } from 'express'
import { CONTENT_RU } from 'client/src/utils'
import { App } from 'client/src/components/business/App'
import { StaticRouter } from 'react-router-dom/server'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'client/src/store'
import { ServerStyleSheet } from 'styled-components'

declare global {
  interface Window {
    __INITIAL_STATE__: any
  }
}

export const renderTemplate = (_req: Request, res: Response) => {
  const location = _req.url

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter location={location}>
        <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
          <App />
        </IntlProvider>
      </StaticRouter>
    </ReduxProvider>
  )

  const sheet = new ServerStyleSheet()
  const reactHtml = renderToString(sheet.collectStyles(jsx))
  const styleTags = sheet.getStyleTags()

  const getHtml = (
    reactHtml: string,
    helmetData: HelmetData,
    styleTags: string
  ) => {
    return `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
        ${styleTags}
      </head>
      <body>
        <div id="root">${reactHtml}</div>
        <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="/client.js"></script>
      </body>
      </html>
      `
  }

  const helmetData = Helmet.renderStatic()

  res.send(getHtml(reactHtml, helmetData, styleTags))
}
