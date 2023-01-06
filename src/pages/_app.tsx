import type { AppProps } from "next/app";
import { CssVariables } from "../styles/CssVariables";
import { GlobalStyles } from "../styles/GlobalStyles";
import { StylesReset } from "../styles/StyleReset";
import { Layout } from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
            <CssVariables />
            <GlobalStyles />
            <StylesReset />
        </Layout>
    </Provider>
);

export default MyApp;
