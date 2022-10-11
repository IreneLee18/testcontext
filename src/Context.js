import { createContext, useState, useEffect } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [have, setHave] = useState(false);
  useEffect(() => {
    setList(JSON.parse(window.localStorage.getItem("list")) || []);
    console.log('c')
    setHave(()=>true)
  }, []);
  const handleClickAdd = () => {
    const data = JSON.parse(window.localStorage.getItem("list")) || [];
    data.push(Math.random());
    window.localStorage.setItem('list',JSON.stringify(data))
    setList(data);
  };
  const handleClickDelete = (e) => {
    let data = list
    data = list.filter((item)=>item!==Number(e.target.id));
    console.log(e.target.id,data)
    window.localStorage.setItem('list',JSON.stringify(data))
    setList(data)
  };
  return (
    <DataContext.Provider
      value={{
        have,
        list,
        handleClickAdd,
        handleClickDelete
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
