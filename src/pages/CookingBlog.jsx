import React from 'react'
import BlogPost from '../components/BlogPost';
import img1 from '../assets/mixology.jpg'
import img2 from '../assets/baking.jpg'
import img3 from '../assets/40233401_1-fresho-fresh-hot-coffee.webp'

function CookingBlog() {

    const cookingPosts = [
        {
          id: 1,
          title: "The Art of Mixilogy",
          excerpt: "Let's explore the art of mixology.",
          image: img1,
          date: "April 18, 2025",
          author: "Michael Chen",
          category: "Cooking"
        },
        {
          id: 2,
          title: "The science of baking - Perfecting your pastries",
          excerpt: "exloring the world of baking and perfecting your pastries.",
          image: img2,
          date: "April 16, 2025",
          author: "Rebecca Taylor",
          category: "Cooking"
        },
        {
          id: 3,
          title: "Coffeeeeee culture",
          excerpt: "Coffe culture - from bean to cup",
          image: img3,
          date: "April 14, 2025",
          author: "Thomas Green",
          category: "Cooking"
        },
    ]
  return (
    <div>
      <div className='bg-orange-100 text-white py-16 center'>
      <div className="container mx-auto px-4 text-center border-gray-600">
        <h1 className="text-3xl font-bold text-orange-800 mb-4">Cooking Blog</h1>
      <p className="text-lg text-gray-600">Explore delicious recipes, cooking techniques, and culinary inspiration for home cooks of all skill levels.</p>
       </div>
    </div>
    <br />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cookingPosts.map(post => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  </div>
  )
}

export default CookingBlog
