import React, { useId, useState } from "react";
import '../App.css';
const Todo = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  let saveData = (e) => {
    e.preventDefault();
    if (id != '') {
      let res = data.map((i, index) => {
        if (index == id) {
          i = name
        }
        return i
      })
      setData(res)
    } else {
      setData([...data, name]);
    }
    setName("");
    setId("")
  };

  const delItem = (id) => {
    let res = data.filter((i, index) => {
      return index != id;
    });
    setData(res);
  }

  const editItem = (id) => {
    let editData = data.find((i, index) => {
      return index == id
    });
    setName(editData);
    setId(id)
  }
  return (
    <>
      <div className="todoApp">
        <div className="main-todo App">
          <h1> Grocery Shopping </h1>
          <br />
          <table className="table" >
            {data.map((i, index) => {
              return (
                <tr className="listRow" >
                  <td> {i} </td>
                  <td width="100px">
                    <button onClick={() => delItem(index)}> DEL </button>
                    <button onClick={() => editItem(index)}>EDIT</button>
                  </td>
                </tr>
              );
            })}
          </table>
          <br /> <br />
          <form action="#" method="post" name="Myform" onSubmit={saveData}>
            <input
              type="text"
              placeholder="Add something to list"
              name="inp-name"
              id="inp-name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button >ADD</button>
       
          </form>
        </div>
      </div>
    </>
  );
};

export default Todo;