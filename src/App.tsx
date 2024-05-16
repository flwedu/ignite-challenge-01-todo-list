import React, { useCallback } from "react";
import { AppHeading } from "./components/AppHeading/AppHeading.tsx";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm.tsx";
import type { Task } from "./components/TaskCard/TaskCard.tsx";
import { TasksList } from "./components/TasksList/TasksList.tsx";

function App() {
	const [tasks, setTasks] = React.useState<Task[]>([]);

	const onAddNewTask = useCallback((newTask: Task) => {
		setTasks((currState) => [newTask, ...currState]);
	}, []);

	return (
		<>
			<AppHeading>
				<h1>todo</h1>
			</AppHeading>
			<main>
				<NewTaskForm onAddNewTask={onAddNewTask} />
				<TasksList tasks={tasks} />
			</main>
		</>
	);
}

export default App;
