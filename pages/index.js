import Head from "next/head";
import Layout from "../src/components/layout";

import Posts from "../src/components/posts";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts />
    </Layout>
  );
}

// https://dev.to/imranib/build-a-next-js-markdown-blog-5777
