import { allResources } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';

import { ResourceList, MainLayout } from 'components';
import { pick } from 'utils';

const Resources = ({ resources }) => {
  return (
    <MainLayout>
      <NextSeo
        title='Resources'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      <ResourceList resources={resources} />
    </MainLayout>
  );
};

export default Resources;

export function getStaticProps() {
  const resources = allResources
    .map((resource) =>
      pick(resource, [
        'slug',
        'title',
        'description',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'image',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { resources } };
}
