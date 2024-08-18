import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out max-w-screen-md mx-auto cursor-pointer mb-8">
        <div className="flex items-center mb-4">
          <Avatar name={authorName} />
          <div className="ml-3">
            <div className="font-semibold text-gray-700">{authorName}</div>
            <div className="text-sm text-gray-500">{publishedDate}</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-800 mb-2">{title}</div>
        <div className="text-gray-600 text-md mb-4">
          {content.slice(0, 100)}...
        </div>
        <div className="text-gray-500 text-sm">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-2 w-2 rounded-full bg-gray-500"></div>;
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the JWT token from localStorage
    navigate("/signin"); // Redirect to sign-in page
  };

  return (
    <div className="relative inline-block">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`cursor-pointer relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
          size === "small" ? "w-8 h-8" : "w-12 h-12"
        }`}
      >
        <span className={`${size === "small" ? "text-sm" : "text-lg"} font-bold text-white`}>
          {name[0].toUpperCase()}
        </span>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20">
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
