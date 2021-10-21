import { useState, useEffect } from "react";
import { comentUpdate, comentDelete } from "./actions";
import { useDispatch } from "react-redux";

function SingleComent(props) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = props.data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(comentUpdate(commentText, id));
  };

  const handleDelite = (e) => {
    // e.preventDefault();
    dispatch(comentDelete(id));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div onClick={handleDelite}>&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" />
    </form>
  );
}

export default SingleComent;
