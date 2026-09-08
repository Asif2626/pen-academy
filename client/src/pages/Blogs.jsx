import React from 'react'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import { blogs } from '../data/blogs'

export default function Blogs() {
  return (
    <section className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <SectionTitle title="Blogs" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
