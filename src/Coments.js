import { useState, useEffect } from "react";
import SingleComent from "./SingleComent";
import { comentCreate, commentsLoad } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function Coments(props) {
  const [textComent, setTextComent] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    const { comentsReducer } = state;
    return comentsReducer.comments;
  });
  //   console.log("comments>", comments);

  const handleInput = (e) => {
    const text = e.target.value;
    // console.log("input >>", text);
    setTextComent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit text com>", textComent);
    const id = Date.now().toString();
    dispatch(comentCreate(textComent, id));
  };

  //   console.log("Comments>>", comments);

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={textComent} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {comments.length > 0 &&
        comments.map((item) => {
          return (
            <div key={item.id}>
              <SingleComent key={item.id} data={item} />
            </div>
          );
        })}
    </div>
  );
}

export default Coments;
