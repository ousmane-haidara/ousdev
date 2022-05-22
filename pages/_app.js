import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <GlobalStyle /> */}
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
