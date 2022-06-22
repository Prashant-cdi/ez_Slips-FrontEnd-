import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const client = new ApolloClient({
    uri: "http://localhost:5000/ezslip",
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
