import 'styles/tailwind.css'

import type { TAppPropsWithLayout } from 'typescript/next.types'

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
