import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(JSON.parse(window.localStorage.getItem("list")) || []);
  }, []);

  const handleClickAdd = () => {
    const newList = [...list, Math.random()]
    window.localStorage.setItem('list', JSON.stringify(newList))
    setList(newList);
  };

  const handleClickDelete = (e) => {
    const newList = list.filter((item)=>item!==Number(e.target.id));
    window.localStorage.setItem('list',JSON.stringify(newList))
    setList(newList)
  };

  return (
    <DataContext.Provider
      value={{
        list,
        handleClickAdd,
        handleClickDelete
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
