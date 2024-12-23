import { cn } from '@/utils/cn';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function EventPage() {
  return (
    <div className={cn('bg-white py-24', 'sm:py-32')}>
      <div className={cn('mx-auto max-w-7xl px-6 lg:px-8')}>
        <div className={cn('mx-auto max-w-2xl lg:max-w-4xl')}>
          <h2
            className={cn(
              'text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl',
            )}
          >
            TIN TỨC VÀ SỰ KIỆN
          </h2>
          <p className={cn('mt-2 text-lg/8 text-gray-600')}>
            Learn how to grow your business with our expert advice.
          </p>
          <div className={cn('mt-16 space-y-20 lg:mt-20 lg:space-y-20')}>
            {posts.map((post) => (
              <article
                key={post.id}
                className={cn(
                  'relative isolate flex flex-col gap-8 lg:flex-row',
                )}
              >
                <div
                  className={cn(
                    'aspect-video relative',
                    'sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0',
                  )}
                >
                  <img
                    alt=""
                    src={post.imageUrl}
                    className={cn(
                      'absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover',
                    )}
                  />
                  <div
                    className={cn(
                      'absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10',
                    )}
                  />
                </div>
                <div>
                  <div className={cn('flex items-center gap-x-4 text-xs')}>
                    <time
                      dateTime={post.datetime}
                      className={cn('text-gray-500')}
                    >
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className={cn(
                        'relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100',
                      )}
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className={cn('group relative max-w-xl')}>
                    <h3
                      className={cn(
                        'mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600',
                      )}
                    >
                      <a href={post.href}>
                        <span className={cn('absolute inset-0')} />
                        {post.title}
                      </a>
                    </h3>
                    <p className={cn('mt-5 text-sm/6 text-gray-600')}>
                      {post.description}
                    </p>
                  </div>
                  <div
                    className={cn('mt-6 flex border-t border-gray-900/5 pt-6')}
                  >
                    <div className={cn('relative flex items-center gap-x-4')}>
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className={cn('size-10 rounded-full bg-gray-50')}
                      />
                      <div className={cn('text-sm/6')}>
                        <p className={cn('font-semibold text-gray-900')}>
                          <a href={post.author.href}>
                            <span className={cn('absolute inset-0')} />
                            {post.author.name}
                          </a>
                        </p>
                        <p className={cn('text-gray-600')}>
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
