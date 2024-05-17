import React, { useCallback, useEffect } from "react";
import type { Task } from "../components/TaskCard/TaskCard.tsx";

export function useTasks() {
	const [tasks, setTasks] = React.useState<Task[] | null>(null);
	const tasksAsString = JSON.stringify(tasks);

	const onAddNewTask = useCallback((newTask: Task) => {
		setTasks((currState) => {
			if (!currState) return [newTask];
			return [newTask, ...currState];
		});
	}, []);

	const onRemoveTask = useCallback((id: string) => {
		setTasks((currState) => {
			if (!currState) return [];
			return currState.filter((task) => task.id !== id);
		});
	}, []);

	const onCheckTask = useCallback((id: string, check: boolean) => {
		const status = check ? "DONE" : "OPEN";
		setTasks((currState) => {
			if (!currState) return [];
			return currState.map((task) => {
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

	useEffect(() => {
		const storedState = localStorage.getItem("tasks");
		if (!storedState) {
			return;
		}
		const tasksArray = JSON.parse(storedState);
		setTasks(tasksArray);
	}, []);

	useEffect(() => {
		if (tasksAsString === "null") return;
		localStorage.setItem("tasks", tasksAsString);
	}, [tasksAsString]);

	return [
		tasks ?? [],
		{
			onAddNewTask,
			onRemoveTask,
			onCheckTask,
		},
	] as const;
}
