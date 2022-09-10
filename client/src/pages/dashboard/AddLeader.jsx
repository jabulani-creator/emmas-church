import axios from "axios";
import { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Alert, FormRow } from "../../Components";
import { useAppContext } from "../../context/appContext";

const initialState = {
  leaderName: "",
  leaderEmail: "",
  leaderPhone: "",
  leaderPosition: "",
  leaderPhoto: "",
};
export const AddLeader = () => {
  const [values, setValues] = useState(initialState);
  const {
    isLoading,
    showAlert,
    isEditing,
    createPosition,
    displayAlert,
    clearValues,
  } = useAppContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("leaderName", values.leaderName);
    formdata.append("leaderEmail", values.leaderEmail);
    formdata.append("leaderPosition", values.leaderPosition);
    formdata.append("leaderPhone", values.leaderPhone);
    formdata.append("leaderPhoto", values.leaderPhoto);

    createPosition(formdata);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setValues({ ...values, leaderPhoto: e.target.files[0] });
    console.log(values.leaderPhoto);
  };

  return (
    <Wrapper>
      <form className="form" encType="multipart/form-data" onSubmit={onSubmit}>
        <h3>{isEditing ? "edit health post" : "add health post"}</h3>
        {showAlert && <Alert />}
        <FormRow
          type="text"
          placeholder="victoria nswila"
          name="leaderName"
          value={values.leaderName}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          placeholder="pathfinder leader"
          name="leaderPosition"
          value={values.leaderPosition}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          placeholder="0976975737"
          name="leaderPhone"
          value={values.leaderPhone}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          placeholder="victoria@gmail.com"
          name="leaderEmail"
          value={values.leaderEmail}
          handleChange={handleChange}
        />
        <div className="form-row">
          <input
            type="file"
            accept=".jpg,.png,.jpeg"
            name="leaderPhoto"
            onChange={handlePhoto}
          />
        </div>
        <div className="btn-container">
          <button
            className="btn btn-block submit-btn"
            type="submit"
            disabled={isLoading}
          >
            submit
          </button>
          <button
            type="submit"
            className="btn btn-block clear-btn"
            disabled={isLoading}
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
