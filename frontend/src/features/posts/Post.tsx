import React, { useEffect, useState } from "react";
import ButtonGroup from "./ButtonGroup";

function Post({ post, postToEdit, submitEdit, toggleEditForm, dispatch }: any) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [isEditing, setIsEditing] = useState(postToEdit === post.id);

  const titleElement = <h2 className="title text-start">{post.title}</h2>;
  const bodyElement = <p className="card-text text-start">{post.body}</p>;

  const resetState = () => {
    setTitle(post.title);
    setBody(post.body);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    const formData = {
      post: {
        id: post.id,
        title,
        body,
      },
    };
    submitEdit(formData);
    resetState();
  };

  const onTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const onBodyChange = (e: any) => {
    setBody(e.target.value);
  };

  const editableTitle = (
    <input type="text" className="form-control text-start" value={title} onChange={onTitleChange} />
  );
  const editableBody = <textarea className="form-control text-start" value={body} onChange={onBodyChange} />;

  const submitButton = (
    <button type="submit" className="form-control" onClick={submitHandler}>
      Submit
    </button>
  );

  useEffect(() => {
    setIsEditing(postToEdit === post.id);
  }, [postToEdit, post.id]);

  return (
    <div>
      <div className="row">
        <div className="col-8">{isEditing ? editableTitle : titleElement}</div>
        <div className="col-4">
          <ButtonGroup toggleEditForm={toggleEditForm} post_id={post.id} dispatch={dispatch} />
        </div>
      </div>
      <div className="row">
        <div className="col-8">{isEditing ? editableBody : bodyElement}</div>
      </div>
      <div className="row">
        <div className="col-2">{isEditing ? submitButton : ""}</div>
      </div>
    </div>
  );
}

export default Post;
