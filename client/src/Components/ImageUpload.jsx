import Wrapper from "../assets/wrappers/ImageUpload";
import { useRef, useState } from "react";

const ImageUpload = ({ name, center, onInput }) => {
  const [file, setFile] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const filePickerRef = useRef();

  const pickedHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
    } else {
      return;
    }
    onInput(name, pickedFile);
  };
  const pickImageHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <Wrapper>
      <input
        type="file"
        accept=".jpg,.png,.jpeg"
        ref={filePickerRef}
        name={name}
        style={{ display: "none" }}
        onChange={pickedHandler}
      />
      <div className={`image-upload ${center && "center"}`}>
        <div className="image-upload__preview ">
          <img src="" alt="Preview" />
        </div>
      </div>
      <button
        type="button"
        onClick={pickImageHandler}
        className="btn btn-block submit-btn"
      >
        Pick Image
      </button>
    </Wrapper>
  );
};

export default ImageUpload;
