import React from "react";

const AddTodos = () => {
  return (
    <div>
      <input type="text" />
      <div>
        <button style={{color:'white',backgroundColor:'green',border:'none',cursor:'pointer',margin:'10px'}}>ADD</button>
        <button  style={{color:'white',backgroundColor:'red',border:'none',cursor:'pointer',margin:'10px'}}>CANCEL</button>
      </div>
    </div>
  );
};

export default AddTodos;
