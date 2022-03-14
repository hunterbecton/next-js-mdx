import { ResourceCard } from 'components';

export const ResourceList = ({ resources }) => {
  return (
    <section className='body-font text-gray-600'>
      <div className='container mx-auto px-5 py-24'>
        <div className='-m-4 flex flex-wrap'>
          {resources.map(
            ({
              title,
              description,
              slug,
              image,
              category,
              publishedAt,
              readingTime,
            }) => (
              <ResourceCard
                key={slug}
                title={title}
                description={description}
                slug={slug}
                image={image}
                category={category}
                dateTime={publishedAt}
                date={publishedAt}
                readingTime={readingTime.text}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
