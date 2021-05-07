import 'react-i18next'
import ns1 from 'locales/en/ns1.json'
import ns2 from 'locales/en/ns2.json'

declare module 'react-i18next' {
  // eslint-disable-next-line no-unused-vars
  interface Resources {
    ns1: typeof ns1;
    ns2: typeof ns2;
  }
}
