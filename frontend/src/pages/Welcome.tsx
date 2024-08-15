import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?blog')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to DialogDen</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-md">
            Discover insightful blogs on various topics. Join our community today and share your thoughts with the world!
          </p>
          <Link to="/signup">
            <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4 md:px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">About DialogDen</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          DialogDen is a platform for bloggers and readers alike. Our mission is to provide a space where ideas can be shared, discussions can be sparked, and knowledge can be exchanged. Whether you're passionate about technology, travel, lifestyle, or anything in between, DialogDen has something for everyone.
        </p>
      </div>

      {/* Featured Blogs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Blog Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">The Rise of AI in Everyday Life</h3>
              <p className="text-gray-600 mb-4">
                Artificial Intelligence (AI) is no longer a futuristic concept but a part of our daily routines...
              </p>
              <Link to="/blog/1" className="text-blue-600 hover:underline">Read More</Link>
            </div>
            {/* Add more blog cards similarly */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">A Beginner's Guide to Mindful Meditation</h3>
              <p className="text-gray-600 mb-4">
                Mindful meditation is a practice that encourages individuals to focus on the present moment...
              </p>
              <Link to="/blog/2" className="text-blue-600 hover:underline">Read More</Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Exploring the Wonders of the Natural World</h3>
              <p className="text-gray-600 mb-4">
                Nature is full of breathtaking beauty, from majestic mountains to serene beaches...
              </p>
              <Link to="/blog/3" className="text-blue-600 hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Share Your Thoughts?</h2>
        <p className="text-lg mb-8 max-w-md mx-auto">
          Sign up today and start contributing to DialogDen. Your voice matters, and we want to hear it!
        </p>
        <Link to="/signup">
          <button className="px-8 py-3 bg-white text-blue-600 text-lg font-semibold rounded hover:bg-gray-200">
            Join Now
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} DialogDen. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/privacy" className="text-gray-400 hover:text-white mx-4">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-400 hover:text-white mx-4">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};
