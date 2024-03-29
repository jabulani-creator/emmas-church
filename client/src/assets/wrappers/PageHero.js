import styled from "styled-components";

const Wrapper = styled.section`
  background: #086f83;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
    text-transform: UPPERCASE;
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;
export default Wrapper;
