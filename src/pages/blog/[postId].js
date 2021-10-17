import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../sections/Nav/Nav.js";
import GetAdvice from "../../sections/GetAdvice/GetAdvice.js";
import Post from "../../sections/Post/Post.js";
import Footer from "../../sections/Footer/Footer.js";

export default function Home() {
  const { postId } = useRouter().query;
  const [post, setPost] = useState();

  useEffect(() => {
    console.log(`grab post based from id ${postId}`);

    setPost({
      title: "This is a very good title indeed",
      date: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/games/anthem.jpg",
    });
  }, []);

  return (
    <>
      <header>
        <Nav lang={true} title={"Blog"} />
      </header>
      {post && <Post post={post} />}
      <GetAdvice />
      <Footer />
    </>
  );
}
