import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Post from "./Post";
import PostForm from "./PostForm";
import { updatePostAsync } from "./postSlice";

import { fetchPostsAsync, selectPosts, selectStatus, Statuses } from "./postSlice";

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const [postToEdit, setPostToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  const toggleEditForm = (post_id?: number) => {
    if (postToEdit === post_id) {
      setPostToEdit(0);
    } else {
      setPostToEdit(post_id as number);
    }
  };

  const submitEdit = (formData: any) => {
    dispatch(updatePostAsync(formData));
    toggleEditForm();
  };

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>;
  } else {
    contents = (
      <div className="card">
        <div className="card-body">
          <h3>{status}</h3>
          <PostForm />
          {posts &&
            posts.length > 0 &&
            posts.map((post: any) => {
              return (
                <div key={post.id} style={{ margin: "5em" }}>
                  <Post
                    post={post}
                    dispatch={dispatch}
                    postToEdit={postToEdit}
                    submitEdit={submitEdit}
                    toggleEditForm={() => toggleEditForm(post.id)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Posts</h1>
      {contents}
    </div>
  );
}

export default Posts;
