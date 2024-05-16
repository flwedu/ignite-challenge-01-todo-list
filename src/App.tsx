import React, { useCallback } from "react";
import { AppHeading } from "./components/AppHeading/AppHeading.tsx";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm.tsx";
import type { Task } from "./components/TaskCard/TaskCard.tsx";
import { TasksList } from "./components/TasksList/TasksList.tsx";
import { TaskMethodsContextProvider } from "./context/TaskMethods.tsx";

function App() {
	const [tasks, setTasks] = React.useState<Task[]>([]);

	const onAddNewTask = useCallback((newTask: Task) => {
		setTasks((currState) => [newTask, ...currState]);
	}, []);

	const onRemoveTask = useCallback((id: string) => {
		setTasks((currentState) => {
			return currentState.filter((task) => task.id !== id);
		});
	}, []);

	const onCheckTask = useCallback((id: string, check: boolean) => {
		const status = check ? "DONE" : "OPEN";
		setTasks((currentState) => {
			return currentState.map((task) => {
				if (task.id !== id) {
					return task;
				}
				return {
					...task,
					status,
				};
			});
		});
	}, []);

	return (
		<TaskMethodsContextProvider
			onRemoveTask={onRemoveTask}
			onCheckTask={onCheckTask}
		>
			<AppHeading>
				<h1>todo</h1>
			</AppHeading>
			<main>
				<NewTaskForm onAddNewTask={onAddNewTask} />
				<TasksList tasks={tasks} />
			</main>
		</TaskMethodsContextProvider>
	);
}

export default App;
