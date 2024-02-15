import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import TypingEffect from "../components/TypingEffect";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-9 p-28 px-3 max-w-6xl mx-auto ">
        <h2 className="text-2xl font-bold lg:text-6xl">
          <img
            src="/KavyaMaifil_img.png"
            alt="AI-generated picture related to pen"
            className="rounded-full"
            style={{
              maxWidth: '100%', // Ensure the image doesn't exceed its container width
              height: 'auto', // Maintain aspect ratio
              width: 'auto', // Make the image responsive
              maxHeight: '100px',
              marginBottom:'10px', // Set a maximum height for the image
            }}
          />
          <TypingEffect/>
        </h2>
        <p className="text-gray-500 text-2xl font-semibold sm:text-xl">
        "आपल्या कवितांचं समृद्ध जग आपल्यासमोर आहे. येथे वाचकांना रसाच्या आनंदात लुटून घेण्याची स्वातंत्र्य आहे. या वेबसाइटवरील कवितांमार्फत आपण साहित्यिक भावनांच्या संग्रहाच्या अनोख्या जगात सहभागी व्हाल. अभिव्यक्तीचं आणि सुंदर भाषांचं या कवितांमार्फत साधारण लोकांना आपल्या कलेचा सानिध्य अनुभवायला मिळेल."
        </p>
        <Link
          to="/search"
          className="text-lg sm:text-xl text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-center mr-10 mb-10">Recent Posts</h2>
            <div className="flex flex-wrap gap-20">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-xl text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
