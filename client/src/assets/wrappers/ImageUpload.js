import styled from "styled-components";

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  .image-upload__preview {
    width: 13rem;
    height: 13rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
`;
export default Wrapper;
