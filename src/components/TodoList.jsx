import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context";
import {
  DELETE_TODO_COMPLETED,
  TOGGLE_TODO,
  TOGGLE_TODO_ALL,
} from "../reducer";
import styled from "@emotion/styled";

const listClassName = `
  border-[1px] border-solid border-gray-500
  rounded-[6px]
  mt-[16px]
`;
const headerClassName = `
  flex items-center h-[40px] px-[12px] py-[0px]
  gap-[12px]
`;
const checkboxClassName = `
  w-[16px] h-[16px]
`;
const Text = styled.div`
  flex-grow: 1;
`;
const textClassName = "grow";
const buttonClassName = `
  border-[1px] border-solid border-gray-500
  rounded-[6px] bg-transparent px-[12px] py-[0px]
  text-white shrink h-[30px]
`;

function TodoList() {
  const { state, dispatch } = useContext(TodoContext);

  const completedCount = state.list.filter((item) => item.completed).length;
  const handleToggleAll = (e) => {
    dispatch({ type: TOGGLE_TODO_ALL, payload: e.target.checked });
  };
  const handleDeleteCompleted = () => {
    dispatch({ type: DELETE_TODO_COMPLETED });
  };
  const filteredList = state.list.filter((item) => {
    switch (state.filterType) {
      case "TODO":
        return !item.completed;
      case "COMPLETED":
        return item.completed;
      default:
        return true;
    }
  });
  const isAllCompleted =
    filteredList.length > 0 && filteredList.every((item) => item.completed);
  return (
    <div className={listClassName}>
      <div className={headerClassName}>
        <input
          className={checkboxClassName}
          type="checkbox"
          checked={isAllCompleted}
          onChange={handleToggleAll}
        />
        <p className={textClassName}>할 일</p>
        {completedCount > 0 && (
          <button className={buttonClassName} onClick={handleDeleteCompleted}>
            {completedCount}개 선택 삭제
          </button>
        )}
      </div>
      <div>
        {filteredList.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
