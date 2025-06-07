import React from 'react'
import BlogPost from '../components/BlogPost';
import img1 from '../assets/Home fitness.jpg'
import img2 from '../assets/mental benefit of ex.png'
import img3 from '../assets/fitness.jpg'

function FitnessBLog() {

    const fitnessPosts = [
        {
            id: 1,
            title: "Home Workouts: Staying Fit Without a Gym",
            excerpt: "Starting your fitness journey can be overwhelming. Here are some tips to start doing workouts at your Home",
            image: img1,
            date: "april 25, 2025",
            author: "alex johnson",
            category: "Fitness"
        },
        {
          id: 2,
          title: "The Mental Benefits of Regular Exercise.",
          excerpt: "Learn the mental benefits of regular excercise.",
          image: img2,
          date: "April 22, 2025",
          author: "Mike Strong",
          category: "Fitness"
        },
        {
          id: 3,
          title: "The Ultimate Guide to Cardio Training",
          excerpt: "Everything you need to know about cardio exercises and how to incorporate them into your fitness routine.",
          image: img3,
          date: "April 18, 2025",
          author: "Lisa Parker",
          category: "Fitness"
        },
      ];
    

  return (
    <div>
    <div className='bg-orange-100 text-white py-16 center'>
    <div className="container mx-auto px-4 text-center border-gray-600">
      <h1 className="text-3xl font-bold text-orange-800 mb-4">Fitness Blog</h1>
        <p className="text-lg text-gray-600">Discover tips, workouts, and advice to help you achieve your fitness goals and maintain a healthy lifestyle.</p>
        </div> 
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fitnessPosts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default FitnessBLog
