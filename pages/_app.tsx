import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import React from 'react'
import { Windmill } from '@roketid/windmill-react-ui'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  return (
    <Windmill usePreferences={true}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Windmill>
  )
}
export default MyApp
