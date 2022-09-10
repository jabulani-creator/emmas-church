import styled from "styled-components";

const Wrapper = styled.div`
position: relative;

.Date{
    position: absolute;
    top: 5px;
    right: 20px;
    background-color: var(--primary-600);

    @media screen and (max-width: 768px){
        right: 60px;

    }
}
.eventTitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}
.Overlay{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: linear-gradient(rgba(0,0,0,0.5), var(  --primary-600));
  opacity: 0;
  transition: var(--transition);
}
.MessageDesc{
  width: 65%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: var(--transition);
}
hr{
    background-color: white;
    height: 2px;
    border: 0;
    margin: 5px auto;
    width: 80%;
}
&:hover{
    .MessageDesc{
        top: 20%;
        opacity: 1;
    }
    .eventTitle{
        display: none;
    }
}

&:hover{
    .Overlay{
        opacity: 1;
    }
}
`

export default Wrapper