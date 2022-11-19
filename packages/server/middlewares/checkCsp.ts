import { expressCspHeader, SELF, INLINE } from 'express-csp-header'

export const checkCsp = () =>
  expressCspHeader({
    directives: {
      'default-src': [SELF, 'https://ya-praktikum.tech'],
      'script-src': [SELF, INLINE],
      'style-src': [SELF, INLINE],
      'img-src': [
        SELF,
        INLINE,
        'https://ya-praktikum.tech',
        'https://image.shutterstock.com/',
      ],
      'worker-src': [SELF],
      'block-all-mixed-content': true,
    },
  })
