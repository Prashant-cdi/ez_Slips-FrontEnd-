import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const client = new ApolloClient({
    uri: "http://localhost:8000/ezslip",
    cache: new InMemoryCache(),
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>

    )
}

export default MyApp
