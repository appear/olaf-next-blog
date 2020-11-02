import React from "react";
import Head from "next/head";
import styled from "styled-components";

import ResetStyles from "../reset-styles";
import Header from "./header";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default function Layout({
  children,
  seo = {
    title: "olaf-dev-blog",
    summary: "테스트",
    ogImage: "테스트",
    description: "테스트",
    banner: "테스트",
  },
}) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
        <meta name="subject" content={seo.title || title} />
        <meta name="title" content={seo.title || title} />
        <meta name="description" content={seo.summary || description} />
        <meta name="author" content={"테스트"} />
        <meta name="keywords" content={seo.title || title} />
        <meta property="og:image" content={seo.banner || ogImage} />
        <meta property="og:description" content={seo.summary || description} />
        <meta property="og:title" content={seo.title || title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"테스트"} />
      </Head>
      <Header />
      <ResetStyles />
      <Container>{children}</Container>
    </>
  );
}
