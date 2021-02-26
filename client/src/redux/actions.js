import axios from "axios";

export const getTodos = () => async (dispatch) => {
  const { data } = await axios.get("/api/todos");
  dispatch({
    type: "GET_TODOS",
    payload: data,
  });
};

export const addTodos = (todo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.post(
    "/api/todos",
    { id: 0, title: todo, isDone: false },
    config
  );

  dispatch({
    type: "ADD_TODOS",
    payload: data,
  });
  dispatch(getTodos());
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`/api/todos/${id}`);
  dispatch({
    type: "DELETE_TODO",
  });
  dispatch(getTodos());
};

export const updateTodo = (id, newTodo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios.put(
    `/api/todos`,
    { id: id, title: newTodo, isDone: false },
    config
  );
  dispatch({
    type: "UPDATE_TODO",
  });
  dispatch(getTodos());
};

export const updateStatus = (id, newTodo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios.put(
    `/api/todos`,
    { id: id, title: newTodo, isDone: true },
    config
  );
  dispatch({
    type: "UPDATE_STATUS",
  });
  dispatch(getTodos());
};
