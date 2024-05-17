import { Trash2Icon } from "lucide-react";
import { useTheme } from "styled-components";
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
	const theme = useTheme();
	const { onClickCheck, onClickDelete } = useTaskMethods(id, status);

	return (
		<StyledListItem>
			<TaskStatusIcon status={status} onClick={onClickCheck} cursor="pointer" />
			<StyledListItemText status={status}>{description}</StyledListItemText>
			<Trash2Icon
				onClick={onClickDelete}
				color={theme.colors["gray-300"]}
				cursor="pointer"
			/>
		</StyledListItem>
	);
}
