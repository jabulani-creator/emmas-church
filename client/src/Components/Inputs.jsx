import { useEffect } from "react";
import { useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val };
    default: {
      return state;
    }
  }
};
export const Input = ({
  type,
  name,
  errorText,
  handleChange,
  onInput,
  labelText,
  placeholder,
  element,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
  });
  const { value } = inputState;
  useEffect(() => {
    onInput(name, value);
  }, [name, value]);
  const changeHandler = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value });
  };
  element = element = "input" ? (
    <input
      className="form-input"
      name={name}
      value={inputState.value}
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  ) : (
    <textarea id={name} value={inputState.value} onChange={changeHandler} />
  );

  return (
    <div className={`form-row `}>
      <label htmlFor={name} className="form-label">
        {labelText || name}
        <span className="required">*</span>
      </label>
      {element}
    </div>
  );
};
