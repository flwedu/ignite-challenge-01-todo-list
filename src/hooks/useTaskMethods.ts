import { useCallback, useContext } from "react";
import type { Task } from "../components/TaskCard/TaskCard.tsx";
import { TaskMethodsContext } from "../context/TaskMethods.tsx";

export function useTaskMethods(id: string, status: Task["status"]) {
	const taskMethods = useContext(TaskMethodsContext);
	if (!taskMethods) {
		throw new Error("useTaskMethods must be used within useTaskMethods");
	}
	const { onCheckTask, onRemoveTask } = taskMethods;

	const onClickCheck = useCallback(() => {
		const check = status === "OPEN";
		onCheckTask(id, check);
	}, [id, status, onCheckTask]);

	const onClickDelete = useCallback(() => {
		onRemoveTask(id);
	}, [id, onRemoveTask]);

	return { onClickCheck, onClickDelete };
}
