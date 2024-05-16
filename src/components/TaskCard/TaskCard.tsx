import { Trash2Icon } from "lucide-react";
import { TaskStatusIcon } from "./TaskStatusIcon.tsx";
import { StyledListItem } from "./styles.ts";

export interface Task {
	id: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	status: "OPEN" | "DONE";
}

export interface TaskProps
	extends Pick<Task, "id" | "status" | "description"> {}

export function TaskCard({ status, description }: TaskProps) {
	return (
		<StyledListItem>
			<TaskStatusIcon status={status} />
			<span>{description}</span>
			<Trash2Icon />
		</StyledListItem>
	);
}
