import React from "react";
import { destroyPostAsync } from "./postSlice";
import { useAppDispatch } from "../../app/hooks";

function ButtonGroup({ toggleEditForm, post_id }: any) {
  const dispatch = useAppDispatch();

  const handleDelete = (e: any) => {
    const payload = {
      post: {
        post_id: post_id,
      },
    };
    dispatch(destroyPostAsync(payload));
  };

  return (
    <div className="btn-group float-end">
      <button className="btn btn-warning" onClick={toggleEditForm}>
        Update
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default ButtonGroup;
