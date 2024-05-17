import { PlusCircle } from "lucide-react";
import { type HTMLProps, useCallback, useRef } from "react";
import type { Task } from "../TaskCard/TaskCard.tsx";
import { StyledForm } from "./styles.ts";

interface NewTaskFormProps {
	onAddNewTask: (task: Task) => void;
}

export function NewTaskForm({ onAddNewTask }: NewTaskFormProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmit = useCallback<
		NonNullable<HTMLProps<HTMLFormElement>["onSubmit"]>
	>(
		(e) => {
			e.preventDefault();
			if (!inputRef.current) {
				return;
			}

			const id = crypto.randomUUID();
			const description = inputRef.current?.value ?? "";
			const createdAt = new Date();
			const status = "OPEN";

			onAddNewTask({
				id,
				description,
				status,
				createdAt,
				updatedAt: createdAt,
			});
			inputRef.current.value = "";
		},
		[onAddNewTask],
	);

	return (
		<StyledForm onSubmit={onSubmit}>
			<input
				name="task-description"
				placeholder="Adicione uma nova tarefa"
				type="text"
				ref={inputRef}
			/>
			<button type="submit">
				Criar <PlusCircle />
			</button>
		</StyledForm>
	);
}
