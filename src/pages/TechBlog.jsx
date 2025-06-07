import React from 'react'
import BlogPost from '../components/BlogPost'
import img1 from '../assets/gaming.jpg'
import img2 from '../assets/5g.jpg'
import img3 from '../assets/ai.jpg'

function TechBlog() {

    const techPost = [
         {
                    id: 1,
                    title: "The impact of 5G in everyday life....!",
                    excerpt: "Starting your fitness journey can be overwhelming. Here are some tips to start doing workouts at your Home",
                    image: img2,
                    date: "april 25, 2025",
                    author: "alex johnson",
                    category: "Technology"
                },
                {
                  id: 2,
                  title: "The ethics of Ai",
                  excerpt: "discover the ethics of Ai in todays generation.",
                  image: img3,
                  date: "April 22, 2025",
                  author: "Mike Strong",
                  category: "Technology"
                },
                {
                  id: 3,
                  title: "Virtual reality beyond gaming",
                  excerpt: "Everything you need to know about the virtual reality pf the world bryond gaming",
                  image: img1,
                  date: "April 18, 2025",
                  author: "Lisa Parker",
                  category: "Fitness"
                },
    ]

  return (
    <div>
    <div className='bg-orange-100 text-white py-16 center'>
      <div className="container mx-auto px-4 text-center border-gray-600">
        <h1 className="text-3xl font-bold text-orange-800 mb-4">Technology Blog</h1>
        <p className="text-lg text-gray-600">Discover tips, workouts, and advice to help you achieve your fitness goals and maintain a healthy lifestyle.</p>
        </div>
        </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techPost.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default TechBlog
