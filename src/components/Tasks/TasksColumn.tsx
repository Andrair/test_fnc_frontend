import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  @media (min-width: 300px) and (max-width: 425px) {
    width: 100%;
    margin: 0.5em 0;
  }
`;
const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7em;
`;
const Title = styled.p`
  font-size: calc(0.5vw + 0.5em);
  color: rgba(146, 153, 178, 1);
  margin: 0;
  font-weight: bold;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(0.5vh + 0.6em);
  }
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba(238, 241, 247, 1);
  border-radius: 10px;
  padding: 0.5em;
`;

interface TasksColumnProps {
	status: string;
	children: ReactNode;
}

const TasksColumn: React.FC<TasksColumnProps> = (props) => {
  return (
    <Container>
      <BoxTitle>
        <Title>{props.status}</Title>
      </BoxTitle>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default TasksColumn;