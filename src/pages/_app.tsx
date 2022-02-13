import "../styles/globals.css";

import { NextPage } from "next";
import { setupStore } from "../store/store";
import { Provider } from "react-redux";

const store = setupStore();

export default function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: NextPage) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
