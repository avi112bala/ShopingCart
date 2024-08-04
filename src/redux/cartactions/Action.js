export const ADD = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const DELETE =(id)=>{
  console.log(id);
  return{
    type: "DELETE_TO_CART",
    payload:id,
  }
}

export const REMOVE = (itemes) => {
  return {
    type: "REMOVE_TO_CART",
    payload: itemes,
  };
};