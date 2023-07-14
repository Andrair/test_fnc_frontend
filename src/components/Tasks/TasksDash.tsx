import { useState } from "react";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import TasksColumn from "./TasksColumn";
import { ITask } from "../../store/reducer"
import Modal from "../common/Modal";
import ModalCreate from "../common/ModalCreate";
import TaskCreate from "./TaskCreate";
import Button from "../common/Button"

const ContentScroll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 0.5px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 1);
  padding: 1em 2em;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3em;
`;
const Title = styled.p`
  font-size: calc(1vw + 0.8em);
  color: #3c3c3c;
  margin: 0;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(1vh + 1em);
    font-weight: bold;
  }
`;
const ContentBody = styled.div`
  width: 100%;
  display: flex;
  @media (min-width: 300px) and (max-width: 425px) {
    flex-direction: column;
  }
`;

// MODAL
const ContentHeaderModal = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 0 0;
`;
const BoxTitleModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleModal = styled.p`
  font-size: calc(0.5vw + 1em);
  color: #3c3c3c;
  margin: 0;
`;
const Line = styled.hr`
  border: 1px solid #f2f2f2;
  margin: 10px 0px 5px 0;
  width: 90%;
`;

interface TasksDashProps {
	firstTasks: ITask[];
	secondTasks: ITask[];
	thirdTasks: ITask[];
}


const TasksDash: React.FC<TasksDashProps> = (props) => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	function closeModal() {
		setOpenModal(false);
	}

	return <> <ContentScroll>
		<ContentHeader>
			<Title>Tareas</Title>
			<Button
				name={"Nueva Tarea"}
				color={"rgba(255, 255, 255, 1)"}
				bg={"rgba(7, 19, 58, 0.8)"}
				colorBorder={"rgba(7, 19, 58, 0.8)"}
				padding={"0.4em 0.7em"}
				fontSize={"calc(1vw + 0.2em)"}
				onClick={() => setOpenModal(true)}
			/>
		</ContentHeader>

		<ContentBody>
			<TasksColumn status={"Urgentes"}>
				{props.firstTasks.map((tarea) => {
					return (
						<TaskCard
							key={tarea.id_task}
							name={tarea.name}
							duration={tarea.duration}
							status={tarea.status}
							idTarea={tarea.id_task!}
							color={"#ffe0b2"}
						/>
					);
				})}
			</TasksColumn>
			<TasksColumn status={"Normales"}>
				{props.secondTasks.map((tarea) => {
					return (
						<TaskCard
							key={tarea.id_task}
							name={tarea.name}
							duration={tarea.duration}
							status={tarea.status}
							idTarea={tarea.id_task!}
							color={"#fff9c4"}
						/>
					);
				})}
			</TasksColumn>
			<TasksColumn status={"Pueden esperar"}>
				{props.thirdTasks.map((tarea) => {
					return (
						<TaskCard
							key={tarea.id_task}
							name={tarea.name}
							duration={tarea.duration}
							status={tarea.status}
							idTarea={tarea.id_task!}
							color={"#c8e6c9"}
						/>
					);
				})}
			</TasksColumn>
		</ContentBody>
	</ContentScroll>
		{openModal ? (
			<Modal>
				<ModalCreate>
					<ContentHeaderModal>
						<BoxTitleModal>
							<TitleModal>Crear tarea</TitleModal>
							<Line />
						</BoxTitleModal>
					</ContentHeaderModal>
					<TaskCreate closeModal={closeModal} />
				</ModalCreate>
			</Modal>
		) : null}
	</>
}

export default TasksDash