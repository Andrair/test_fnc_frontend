import styled, { keyframes } from "styled-components";

const zoomIn = keyframes`
from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
`;

const ContainerModal = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0.1px;
  left: 0.1px;
  right: 0.1px;
  bottom: 0.1px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Card = styled.div`
  background: #fefefe;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 90%;
  width: 50%;
  display: flex;
  flex-direction: column;

  animation: ${zoomIn} 0.3s ease-in-out;

  @media (min-width: 300px) and (max-width: 425px) {
    width: 95%;
  }
`;

const ModalNuevo = (props) => {
  return (
    <ContainerModal>
      <Card>{props.children}</Card>
    </ContainerModal>
  );
};

export default ModalNuevo;