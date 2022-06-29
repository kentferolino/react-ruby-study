import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import type { AppDispatch } from "../../app/store";
import { createPostAsync } from "./postSlice";

function PostForm() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();

    const formData = {
      post: {
        title,
        body,
      },
    };
    dispatch(createPostAsync(formData));
    resetState();
  };

  const resetState = () => {
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h1>PostForm</h1>
      <form>
        <input
          type="text"
          name="title"
          className="form-control text-start"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          name="body"
          className="form-control text-start"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button type="submit" onClick={e => submitHandler(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
