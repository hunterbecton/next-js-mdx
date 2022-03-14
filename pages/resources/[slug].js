import { allResources } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { CodePen } from 'mdx-embed';
import { NextSeo } from 'next-seo';

import { ResourceArticle, MainLayout } from 'components';

const mdxComponents = {
  CodePen,
};

const Resource = ({ resource }) => {
  const MDXContent = useMDXComponent(resource.body.code);

  return (
    <MainLayout>
      <NextSeo title={resource.title} description={resource.seoDescription} />
      <ResourceArticle title={resource.title} category={resource.category}>
        <MDXContent components={mdxComponents} />
      </ResourceArticle>
    </MainLayout>
  );
};

export default Resource;

export async function getStaticPaths() {
  return {
    paths: allResources.map((resource) => ({
      params: { slug: resource.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resource = allResources.find(
    (resource) => resource.slug === params.slug
  );

  return { props: { resource } };
}
