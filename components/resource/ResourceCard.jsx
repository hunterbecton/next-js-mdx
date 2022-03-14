import Image from 'next/image';
import Link from 'next/link';

import { convertTime } from 'utils';

export const ResourceCard = ({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
}) => {
  return (
    <div className='p-4 md:w-1/3'>
      <div className='h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60'>
        <div className='relative w-full bg-gray-50 md:h-36 lg:h-48'>
          <Image
            layout='fill'
            objectFit='cover'
            src={image}
            alt={`Feature image for ${title}`}
          />
        </div>
        <div className='p-6'>
          <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
            {category}
          </h2>
          <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
            {title}
          </h1>
          <p className='mb-3 leading-relaxed'>{description}</p>
          <div className='flex flex-wrap items-center '>
            <Link href={`/resources/${slug}`}>
              <a className='inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0'>
                Read More
                <svg
                  className='ml-2 h-4 w-4'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </Link>
            <time
              dateTime={dateTime}
              className='mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto'
            >
              {convertTime(dateTime)}
            </time>
            <span className='inline-flex items-center text-sm leading-none text-gray-400'>
              {readingTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
