import React from "react";
import NextApp from "next/app";
import { Provider as I18n } from "../i18n";
import { Layout } from "../layout";
import { Recoil } from "../components/recoil";

class App extends NextApp {
  componentDidCatch(error, _errorInfo) {
    super.componentDidCatch(error, _errorInfo);

    console.log("Uncaught error:", error.message, _errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <I18n>
        <Recoil>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Recoil>
      </I18n>
    );
  }
}

export default App;
