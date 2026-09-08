import React from 'react'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import EmptyState from '../components/EmptyState'
import LoadingCards from '../components/LoadingCards'
import ErrorState from '../components/ErrorState'
import { getBlogs } from '../services/content'
import useAsync from '../services/useAsync'

export default function Blogs() {
  const { loading, error, data, retry } = useAsync(() => getBlogs(), [])

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle title="Blogs" />

        {loading ? (
          <div className="mt-10">
            <LoadingCards count={6} />
          </div>
        ) : error ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <ErrorState
              title="Could not load blogs"
              message="We could not reach the blog posts. Check your connection and try again."
              onRetry={retry}
            />
          </div>
        ) : data.length === 0 ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <EmptyState
              emoji="📝"
              title="No blog posts yet"
              description="Posts are being prepared and will be published here soon."
            />
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
