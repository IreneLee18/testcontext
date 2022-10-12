import { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
function Add() {
  const { have, list, handleClickAdd, handleClickDelete } =
    useContext(DataContext);

  return (
    <div>
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
    </div>
  );
}

export default Add;
