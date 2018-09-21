import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render () {
        return (
            <html>
                <Head>
                    <link href = '/static/nprogress.css' rel = 'stylesheet' type = 'text/css' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
