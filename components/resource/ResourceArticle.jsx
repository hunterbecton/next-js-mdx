export const ResourceArticle = ({ category, title, children }) => {
  return (
    <div className='px-4 py-24'>
      <div className='mx-auto max-w-prose'>
        <p className='block text-center text-base font-semibold uppercase tracking-wide text-indigo-600'>
          {category}
        </p>
        <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
          {title}
        </h1>
        <article className='mx-autotext-gray-500 prose-md prose prose-indigo py-24 lg:prose-lg'>
          {children}
        </article>
      </div>
    </div>
  );
};
