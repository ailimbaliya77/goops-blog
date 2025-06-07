import React from 'react'
import BlogPost from '../components/BlogPost'
import img1 from '../assets/Beauty routines for different skin types.jpg'
import img2 from '../assets/future beauty.jpg'
import img3 from '../assets/natural images.jpeg'

function BeautyFashionBlog() {

    const beautyFashionPosts = [
        {
          id: 1,
          title: "Diy natural remedies from your kitchen ",
          excerpt: "Discover the beauty remedies from your kitchen ",
          image: img3,
          date: "April 20, 2025",
          author: "Emma Wilson",
          category: "Beauty & Fashion"
        },
        {
          id: 2,
          title: "Beauty routines for different skin types",
          excerpt: "A comprehensive guide to building an effective skincare routine regardless of your skin type.",
          image: img1,
          date: "April 18, 2025",
          author: "Sophia Lee",
          category: "Beauty & Fashion"
        },
        {
          id: 3,
          title:"The future of beauty - Tech innovation in the industry",
          excerpt: "Explore the technology in the feild pf beauty",
          image: img2,
          date: "April 15, 2025",
          author: "Oliver Green",
          category: "Beauty & Fashion"
        },
    ]

  return (
    <div>
      <div className='bg-orange-100 text-white py-16 center'>
      <div className="container mx-auto px-4 text-center border-gray-600">
        <h1 className="text-3xl font-bold text-orange-800 mb-4">Beauty & Fashion Blog</h1>
        <p className="text-lg text-gray-600">Stay on trend with the latest in beauty products, fashion styles, and personal care routines.</p>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 text-center py-18 space-x-4">
        {beautyFashionPosts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
      
    </div>
  )
}

export default BeautyFashionBlog
