import React from 'react'
import { renderToString } from 'react-dom/server'
import { IntlProvider } from 'react-intl'
import { Helmet, HelmetData } from 'react-helmet'
import type { Request, Response } from 'express'
import { CONTENT_RU } from 'client/src/utils'
import { App } from 'client/src/components/business/App'

const getHtml = (reactHtml: string, helmetData: HelmetData) => {
  return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ${helmetData.title.toString()}
      ${helmetData.meta.toString()}
    </head>
    <body>
      <div id="root">${reactHtml}</div>
      <script src="/main.js"></script>
    </body>
    </html>
    `
}

export const renderTemplate = (_req: Request, res: Response) => {
  const jsx = (
    <IntlProvider messages={CONTENT_RU} locale="ru" defaultLocale="ru">
      <App />
    </IntlProvider>
  )
  const reactHtml = renderToString(jsx)
  const helmetData = Helmet.renderStatic()

  res.send(getHtml(reactHtml, helmetData))
}