import React, {useState} from 'react'

function BlogPost( {title, excerpt, image, date, author, category, comments = [], }) {

  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [displayedComments, setDisplayedComments] = useState(comments);

  const handleSubmitComment = () => {
    if (newComment.trim() === '' || commentAuthor.trim() === '') return;
    
    const comment = {
      id: Date.now(),
      author: commentAuthor,
      content: newComment,
      date: new Date().toLocaleDateString()
    };
    
    setDisplayedComments([...displayedComments, comment]);
    setNewComment('');
    setCommentAuthor('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image || "/api/placeholder/600/300"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-orange-600 font-medium">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center">
          <span className="text-bold justify-between items-center text-orange-500">By {author}</span>
          <span className="text-bold justify-between items-center text-orange-500"></span>
          <button 
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ml-auto"
          >
            Read more
          </button>
          
        </div>
{/* Comment Section */}
<div className="mt-8 border-t pt-6">
          <h4 className="text-lg font-semibold mb-4">Comments ({displayedComments.length})</h4>
          
          {/* List of comments */}
          <div className="space-y-4 mb-6">
            {displayedComments.length > 0 ? (
              displayedComments.map((comment) => (
                <div key={comment.id} className="border-l-4 border-gray-200 pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 mt-1">{comment.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
            )}
          </div>
          
          {/* Comment input area */}
          <div className="mt-6">
            <h5 className="font-medium mb-3">Add a Comment</h5>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your comment"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-700 min-h-24"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <button 
              onClick={handleSubmitComment}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Post Comment
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogPost
