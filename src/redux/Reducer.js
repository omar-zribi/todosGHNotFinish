import { Add } from "./TypeAction";

const initTodos = {
  todos: [
    { id: Date.now(), description: "je dit n import quoi", isDone: false },
    { id: Date.now(), description: "du bla bla bla ", isDone: true },
    { id: Date.now(), description: "3melnahom lkol  ", isDone: false },
  ],
};
// bech nzid object jdid fel etat initial :D
const reducer = (state = initTodos, { type, payload }) => {
  switch (type) {
    case Add:
      return {
        ...initTodos,todos: (initTodos.todos = [...initTodos, payload]),

};

default:
    return state;
  }
};
export default reducer;
