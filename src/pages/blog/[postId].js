import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Nav from "../../sections/Nav/Nav.js";
import GetAdvice from "../../sections/GetAdvice/GetAdvice.js";
import Post from "../../sections/Post/Post.js";
import Footer from "../../sections/Footer/Footer.js";

import PostsContext from "../../context/PostsContext";

export default function Home() {
  const { postId } = useRouter().query;
  const { getPostById } = useContext(PostsContext);

  const [post, setPost] = useState();

  useEffect(() => {
    setPost(getPostById(postId));
  }, [postId]);

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
