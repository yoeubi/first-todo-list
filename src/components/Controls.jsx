import { useContext, useState } from "react";
import { TodoContext } from "../context";
import { ADD_TODO, SET_FILTER } from "../reducer";
import styled from "@emotion/styled";

const Control = styled.div`
  display: flex;
  gap: 6px;
  height: 30px;
`;

const Input = styled.input`
  flex-grow: 1;
  border: 1px solid gray;
  border-radius: 6px;
  background-color: transparent;
  padding: 4px 12px;
  font-size: 14px;
  line-height: 20px;
  color: white;
`;

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 6px;
  background-color: transparent;
  padding: 0 12px;
  color: white;
  flex-shrink: 0;
`;

const Select = styled.select`
  border: 1px solid gray;
  border-radius: 6px;
  background-color: transparent;
  padding: 0 12px;
  color: white;
  flex-shrink: 0;
`;

function Controls() {
  const { state, dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    dispatch({ type: ADD_TODO, payload: text });
    setText("");
  };
  const handleChangeFilterType = (e) => {
    dispatch({ type: SET_FILTER, payload: e.target.value });
  };
  return (
    <Control>
      <Input type="text" value={text} onChange={handleChange} />
      <Button onClick={handleSubmit}>추가</Button>
      <Select value={state.filterType} onChange={handleChangeFilterType}>
        <option value="ALL">전체</option>
        <option value="TODO">할 일</option>
        <option value="COMPLETED">완료</option>
      </Select>
    </Control>
  );
}

export default Controls;
