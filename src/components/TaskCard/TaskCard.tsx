import { Trash2Icon } from "lucide-react";
import { useTaskMethods } from "../../hooks/useTaskMethods.ts";
import { TaskStatusIcon } from "./TaskStatusIcon.tsx";
import { StyledListItem, StyledListItemText } from "./styles.ts";

export interface Task {
	id: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	status: "OPEN" | "DONE";
}

export interface TaskProps
	extends Pick<Task, "id" | "status" | "description"> {}

export function TaskCard({ status, description, id }: TaskProps) {
	const { onClickCheck, onClickDelete } = useTaskMethods(id, status);

	return (
		<StyledListItem>
			<TaskStatusIcon status={status} onClick={onClickCheck} />
			<StyledListItemText status={status}>{description}</StyledListItemText>
			<Trash2Icon onClick={onClickDelete} />
		</StyledListItem>
	);
}
