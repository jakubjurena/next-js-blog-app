import React from "react";
import App from "next/app";
import { PageLayout } from "../components/PageLayout";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        );
    }
}
