import { useState } from "react";
import styled from "styled-components";
import Input from "../common/Input"
import TextArea from "../common/TextArea"
import Button from "../common/Button"
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/actionCreators";
import { ITask } from "../../store/reducer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.5em 1.5em;
  padding: 0 0.5em;
  height: 100%;
  box-sizing: border-box;

  scroll-behavior: smooth;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background: "white";
    border-radius: 10px;
    /*width: 8px;
    height: 8px;*/
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb {
    background: "gray";
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    background: "yellow";
    border-radius: 10px;
  }
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxFechaActual = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const FechaActual = styled.p`
  font-size: calc(0.5vw + 0.5em);
  color: rgba(146, 153, 178, 1);
  font-weight: bold;
  margin: 0.5em 0 0.5em 0;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(0.5vh + 0.5em);
  }
`;

const BoxEstado = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Estado = styled.button`
  font-size: calc(0.5vw + 0.5em);
  color: ${(props) => props.color};
  font-weight: bold;
  margin: 0;
  background: #eeeeee;
  text-decoration: none;
  outline: none;
  border: 0;
  border-radius: 5px;
  padding: 0.2em 0.3em;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(0.5vh + 0.6em);
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #fafafa;
  border-radius: 5px;
`;
const ContentInputs = styled.div`
  display: grid;
  grid-template-columns: "repeat(2, 1fr)";
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  width: 100%;
  margin: 1em 0 1em 0;
  @media (min-width: 300px) and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 0.5em;

  @media (min-width: 300px) and (max-width: 768px) {
    width: 100%;
  }
`;
const Label = styled.label`
  font-size: calc(0.5vw + 0.625rem);
  color: #3c3c3c;
  padding-bottom: 0.2em;
`;
const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0 1em 0;
`;

interface TaskCreateProps {
	closeModal: () => void
}

const TaskCreate: React.FC<TaskCreateProps> = (props) => {
	const dispatch = useDispatch()

	const [datos, setDatos] = useState<{
		name: string;
		description: string;
		priority: string;
		duration: number;
	}>({
		name: "",
		description: "",
		priority: "Urgente",
		duration: 0,
	});

	const onChange = (e: { target: { name: any; value: any; }; }) => {
		setDatos({ ...datos, [e.target.name]: e.target.value });
	};

	const setPrioridad = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedPriority = event.target.value;
		setDatos({ ...datos, priority: selectedPriority });
	};

	const dataToApi: ITask = {
		name: datos.name,
		description: datos.description,
		duration: Number(datos.duration),
		priority: datos.priority,
		status: "Iniciada"
	};

	const saveTask = () => {
		try {
			dispatch(createTask(dataToApi))
			const Toast = Swal.mixin({
				toast: true,
				position: "top-end",
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true
			});
			Toast.fire({
				icon: "success",
				title: "Tarea guardada con exito!",
			});

			props.closeModal();
		} catch (e) {
			Swal.fire({
				icon: "error",
				confirmButtonColor: "#b71c1c",
				text: "error",
			});
		}
	};

	return (
		<Container>
			<ContentBody>
				<BoxFechaActual>
					<FechaActual>{"fecha"}</FechaActual>
				</BoxFechaActual>
				<BoxEstado>
					<Estado color={"#fafafa"}>{"Iniciada"}</Estado>
				</BoxEstado>
				<Form>
					<ContentInputs>
						<BoxInput>
							<Label>Tarea*</Label>
							<Input type={"text"} name={"name"} onChange={onChange} />
						</BoxInput>

						<BoxInput>
							<Label>Prioridad</Label>
							<select onChange={setPrioridad}>
								<option value="Urgente">Urgente</option>
								<option value="Normal">Normal</option>
								<option value="Bajo">Bajo</option>
							</select>
						</BoxInput>

						<BoxInput>
							<Label>Duración estimada</Label>
							<Input type={"number"} name={"duration"} onChange={onChange} />
						</BoxInput>

						<BoxInput>
							<Label>Descripción</Label>
							<TextArea name={"description"} onChange={onChange} />
						</BoxInput>

					</ContentInputs>
					<Button
						name={" + Agregar subtarea"}
						color={"rgba(255, 255, 255, 1)"}
						colorBorder={"rgba(7, 19, 58, 1)"}
						bg={"rgba(7, 19, 58, 1)"}
						padding={"0.4em 1em"}
						fontSize={"calc(0.5vw + 0.4em)"}
						onClick={() => { alert("Proximamente...") }}
					/>
				</Form>
				<BoxButtons>
					<Button
						name={"Guardar"}
						color={"rgba(255, 255, 255, 1)"}
						colorBorder={"rgba(7, 19, 58, 1)"}
						bg={"rgba(7, 19, 58, 1)"}
						padding={"0.5em 1em"}
						fontSize={"calc(0.5vw + 0.6em)"}
						onClick={() => saveTask()}
					/>
					<Button
						name={"Cancelar"}
						color={"rgba(7, 19, 58, 1)"}
						bg={"rgba(255, 255, 255, 1)"}
						colorBorder={"rgba(7, 19, 58, 1)"}
						padding={"0.5em 1em"}
						fontSize={"calc(0.5vw + 0.6em)"}
						onClick={() => props.closeModal()}
					/>
				</BoxButtons>
			</ContentBody>
		</Container>
	);
};

export default TaskCreate;