import React from 'react'
import BlogPost from '../components/BlogPost'
import img1 from '../assets/Home fitness.jpg'
import img2 from '../assets/Beauty routines for different skin types.jpg'
import img3 from '../assets/mixology.jpg'
import img4 from '../assets/baking.jpg'
import img5 from '../assets/work travell.jpg'
import img6 from '../assets/gaming.jpg'


function HomePage() {


const featuredPost = [
    {
        id: 1,
        title: "Home workout - Staying fit without a gym....",
        excerpt: "Starting your fitness journey can be overwhelming. Here are some tips to start doing workouts at your Home",
        image: img1,
        date: "april 25, 2025",
        author: "alex johnson",
        category: "Fitness"
    },
    {
        id: 2,
        title: "Beauty routines for different skin types",
        excerpt: "Discover what suits on your skin according to your skin types",
        image: img2,
        date: "april 22, 2025",
        author: "Emma whilson",
        category: "Beauty & Fashion"
    },
    {
        id: 3,
        title: "The Art of Mixology: Crafting the Perfect Cocktail.",
        excerpt: "No time to cook? These delicious recipes can be prepared in under 30 minutes.",
        image: img3,
        date: "april 18, 2025",
        author: "Michael Chenn",
        category: "Cooking"
    },
    {
        id: 4,
        title: "The Science of Baking: Perfecting Your Pastries.",
        excerpt: "lets explore the science of bakking by making delicious partries",
        image: img4,
        date: "april 15, 2025",
        author: "Sarah Brown",
        category: "Business"
    },
    {
        id: 5,
        title: "The Rise of Workcations: Combining Work and Travel.",
        excerpt: "why it is necessary to combine work and travell in vaccations",
        image: img5,
        date: "april 19, 2025",
        author: "David Lee",
        category: "Education"
    },
    {
        id: 6,
        title: "Virtual Reality: Beyond Gaming.",
        excerpt: "exlore technology in the world of gaming",
        image: img6,
        date: "jan 12, 2025",
        author: "Michael Chenn",
        category: "technology"
    },
]

  return (
    <div>
    <section className="mb-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-800 mt-9 mb-9 bg-orange-100 h-12">Welcome to GoopsBlog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto"> “It can be pretty rough out there for bloggers who think small. You've got to think - and play - big if you want to make a larger footprint these days.”!</p>
      </div>
      
      <div className="grid grid-cols-1 content-center hover:bg-white rounded transition  md:grid-cols-4 lg:grid-cols-3 gap-12">
        {featuredPost.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </section>
    
   {/*  <section className="mb-12 bg-gray-100 py-12 px-4 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay updated with our latest posts and never miss any content from your favorite categories.</p>
      </div>
      
      <form className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section> */}
  </div>
  )
}

export default HomePage
