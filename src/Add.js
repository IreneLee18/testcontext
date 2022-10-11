import { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
function Add() {
  const { have, list, handleClickAdd, handleClickDelete } =
    useContext(DataContext);
  const [l, setL] = useState([]);
  useEffect(() => {
    setL(list||[]);
    console.log(list,l,'app')
  }, [list]);
  return (
    <>
    {
      have?
      <>
      <button onClick={handleClickAdd}>加</button>
      <ul>
        { list.map((item, i) => (
          <li key={i}>
            <span>
              {item}
            </span>
            <button id={item} onClick={handleClickDelete}>
              刪
            </button>
          </li>
        ))}
      </ul>
      </>:null
    }
    </>
  );
}

export default Add;
