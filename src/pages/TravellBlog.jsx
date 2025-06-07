import React from 'react'
import BlogPost from '../components/BlogPost'
import img1 from '../assets/budget travell.jpg'
import img2 from '../assets/work travell.jpg'
import img3 from '../assets/travell photography.jpg'

function TravellBlog() {

    const TravellPosts = [
            {
                id: 1,
                title: "Budget travell - Exploring The World Without Breaking The Bank",
                image: img1,
                date: "april 25, 2025",
                author: "alex johnson",
                category: "Travell"
            },
            {
              id: 2,
              title: "The Rise of workations - Combning work and travell",
              image: img2,
              date: "April 22, 2025",
              author: "Mike Strong",
              category: "Travell"
            },
            {
              id: 3,
              title: "Travell photography - Capturing Memories Like A Pro",
              image: img3,
              date: "April 18, 2025",
              author: "Lisa Parker",
              category: "Travell"
            },
          ];

  return (
    <div>
    <div className='bg-orange-100 text-white py-16 center'>
    <div className="container mx-auto px-4 text-center border-gray-600">
      <h1 className="text-3xl font-bold text-orange-800 mb-4">Travell Blog</h1>
        <p className="text-lg text-gray-600">Discover tips, workouts, and advice to help you achieve your fitness goals and maintain a healthy lifestyle.</p>
    </div>
    </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TravellPosts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default TravellBlog
