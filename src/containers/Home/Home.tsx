import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/actionCreators";
import { IAppState, ITask } from "../../store/reducer";
import "./home.css"
import Upperbar from "../../components/Upperbar/Upperbar";
import TaskDash from "../../components/Tasks/TasksDash"


const Home: React.FC = () => {
	const [tasks, setTasks] = useState<ITask[]>([])
	const dispatch = useDispatch()
	const globalState = useSelector((state: IAppState) => state)
	useEffect(() => {
		dispatch(getTasks())
	}, [])
	useEffect(() => {
		if (globalState.tasks !== undefined) {
			setTasks(globalState.tasks)
		}
	}, [globalState.tasks])

	const firstTasks = tasks.filter(task => task.priority === "Urgente");
	const secondTasks = tasks.filter(task => task.priority === "Normal");
	const thirdTasks = tasks.filter(task => task.priority === "Bajo");

	return <div className={"Container"}>
		<Upperbar />
		<div className={"Content"}>
			<div className={"ContentScroll"}>
				<TaskDash firstTasks={firstTasks} secondTasks={secondTasks} thirdTasks={thirdTasks} />
			</div>

		</div>
	</div>
}

export default Home