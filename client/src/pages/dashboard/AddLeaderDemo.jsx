import { useReducer } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Alert, FormRow, Input } from "../../Components";
import { useAppContext } from "../../context/appContext";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputName in state.inputs) {
        if (inputName === action.inputName) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputName].isValid;
        }
      }
      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputName]: { value: action.value, isValid: action.isValid },
          isValid: formIsValid,
        },
      };
  }
};
export const AddLeader = () => {
  const [formState, dispatch] = useReducer({
    inputs: { leaderName: { value: "", isValid: false } },
    leaderPosition: { value: "", isValid: false },
    leaderPhone: { value: "", isValid: false },
    leaderEmail: { value: "", isValid: false },
  });
  const initialState = {
    leaderName: "",
    leaderPosition: "",
    leaderPhone: "",
    leaderEmail: "",
  };
  const [values, setValues] = useState(initialState);
  // const [photo, setPhoto] = useState(null)

  const {
    leader,
    isLoading,
    showAlert,
    isEditing,
    createPosition,
    displayAlert,
    clearValues,
  } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { leaderName, leaderPosition, leaderPhone, leaderEmail } = values;
    if (!leaderName || !leaderPosition || !leaderPhone || !leaderEmail) {
      displayAlert();
      return;
    }
    console.log(values);
    const currentLeader = {
      leaderName,
      leaderEmail,
      leaderPhone,
      leaderPosition,
    };
    createPosition(currentLeader);
  };
  const inputHandler = useCallback((name, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", value, isValid, name });
  }, []);
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit health post" : "add health post"}</h3>
        {showAlert && <Alert />}
        <Input
          name="leaderName"
          type="text"
          labelText="Name"
          element="input"
          placeholder="Jabulani Charinga"
          onInput={inputHandler}
        />
        <Input
          name="leaderPosition"
          type="text"
          labelText="Position"
          element="input"
          placeholder="Pathfinder Director"
          onInput={inputHandler}
        />
        <Input
          type="text"
          placeholder="0976975737"
          name="leaderPhone"
          labelText="Phone"
          element="input"
          onInput={inputHandler}
        />
        <Input
          type="email"
          labelText="Email"
          placeholder="victoria@gmail.com"
          name="leaderEmail"
          element="input"
          onInput={inputHandler}
        />
        {/* <FormRow
      type='file'
      name='photo'
      onChange={e => setPhoto(e.target.files[0])}
       /> */}
        <div className="btn-container">
          <button
            className="btn btn-block submit-btn"
            type="submit"
            onClick={onSubmit}
            disabled={isLoading}
          >
            submit
          </button>
          <button
            className="btn btn-block clear-btn"
            onClick={(e) => {
              e.preventDefault();
              clearValues();
            }}
          >
            clear
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
