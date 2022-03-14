import { DefaultSeo } from 'next-seo';

import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate='ContentLayer | %s'
        title='MDX with Next.js'
        description={`This tutorial will get you comfortable with the basics of Contentlayer by walking through how to to build a simple blog site using Next.js.`}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
