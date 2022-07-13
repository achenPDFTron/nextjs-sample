import React from "react";

import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

  render() {
    return (
      <html lang="fa" dir="rtl">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/laz1etc.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}