import { AppHeading } from "./components/AppHeading/AppHeading.tsx";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm.tsx";
import { TasksList } from "./components/TasksList/TasksList.tsx";
import { TaskMethodsContextProvider } from "./context/TaskMethods.tsx";
import { useTasks } from "./hooks/useTasks.ts";

function App() {
	const [tasks, { onRemoveTask, onCheckTask, onAddNewTask }] = useTasks();

	return (
		<TaskMethodsContextProvider
			onRemoveTask={onRemoveTask}
			onCheckTask={onCheckTask}
		>
			<AppHeading />
			<main>
				<NewTaskForm onAddNewTask={onAddNewTask} />
				<TasksList tasks={tasks} />
			</main>
		</TaskMethodsContextProvider>
	);
}

export default App;
