import styled from "styled-components";
import { Trash2 } from 'react-feather';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/actionCreators";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.color};
  border-radius: 5px;
  padding: 0.5em;
  box-sizing: border-box;
  margin-bottom: 0.7em;
  :hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.2s ease-in-out;
  }
`;
const ContentNombre = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 0.2em 0;
`;
const Nombre = styled.p`
  width: 80%;
  font-size: calc(0.5vw + 1em);
  color: #3c3c3c;
  margin: 0;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(0.5vh + 0.9em);
  }
`;
const TextVencimiento = styled.p`
  font-size: calc(0.5vw + 0.3em);
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  margin: 0 0 0 0.1em;
  width: 100%;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(0.5vh + 0.4em);
  }
`;
const ContentFecha = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Fecha = styled.p`
  font-size: calc(0.5vw + 0.6em);
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  margin: 0 0 0 0.1em;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(0.5vh + 0.6em);
  }
`;
const ContentVacio = styled.div`
  height: 2em;
  display: flex;
`;

const ContentOptions = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  /*:hover {
    background: #fff;
    transition: background 0.3s ease-in-out;
  }*/
`;
const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 1px;
`;

const ButtonDetalles = styled.p`
  font-size: calc(0.5vw + 0.4em);
  color: rgba(5, 21, 63, 0.8);
  margin: 0;
  font-weight: bold;
  @media (min-width: 300px) and (max-width: 425px) {
    font-size: calc(0.5vh + 0.7em);
  }
`;

const Line = styled.hr`
  border: 1px solid #f2f2f2;
  margin: 10px 0px 5px 0;
  width: 90%;
`;
const LineCard = styled(Line)`
  border: 1px solid rgba(5, 21, 63, 0.5);
  width: 100%;
`;

interface TaskCardProps {
	name: string;
	color: string;
	duration: number;
	status: string;
	idTarea: number
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
	const dispatch = useDispatch()

	function comprobarEliminacion() {
		Swal.fire({
			title: "Estás seguro de eliminar esta Tarea?",
			text: "No podras reversar esto despues!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "rgba(7,19,58,1)",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, borralo!",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.value) {
				Swal.fire({
					text: "Tu tarea ha sido eliminada.",
					icon: "success",
					confirmButtonColor: "rgba(7,19,58,1)",
				});
				dispatch(deleteTask(props.idTarea))
			}
		});
	}

	return (
		<Container color={props.color}>
			<ContentNombre>
				<Nombre>{props.name}</Nombre>
				<Trash2 color="#004d40" size={24} cursor={"pointer"} onClick={() => comprobarEliminacion()} />
			</ContentNombre>
			<TextVencimiento>{`${props.duration} Minutos`}</TextVencimiento>
			<ContentFecha>
				<Fecha>{`${props.status}`}</Fecha>
			</ContentFecha>
			<ContentVacio></ContentVacio>
			<LineCard />
			<ContentOptions>
				<BoxButton onClick={() => { }}>
					<ButtonDetalles>Detalles</ButtonDetalles>
				</BoxButton>
			</ContentOptions>
		</Container>
	);
};

export default TaskCard;