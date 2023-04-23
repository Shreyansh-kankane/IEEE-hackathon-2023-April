import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import { useState } from "react";

const PostsWidget = ({ userId, isProfile = false }) => {

  const [load,setLoad] = useState(true);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  // console.log(posts);
  const token = useSelector((state) => state.token);


  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log({data: data});
    dispatch(setPosts({ posts: data }));
    return data;
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    // console.log({data: data});
    dispatch(setPosts({ posts: data }));
    return data;
  };

  useEffect(() => {
    if (isProfile) {
      let d = getUserPosts();
      console.log(d);
      setLoad(false);
      
    } else {
      let d = getPosts();
      // console.log(d);
      setLoad(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>

      { load===false ? (posts.map( ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )) : (
        <h1>Loading...</h1>
      )
    }
      
    </>
  );
};

export default PostsWidget;
