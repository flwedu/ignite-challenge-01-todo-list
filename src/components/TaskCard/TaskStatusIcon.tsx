import { CheckCircleIcon, Circle } from "lucide-react";
import { useTheme } from "styled-components";
import type { Task } from "./TaskCard.tsx";

export interface TaskStatusIconProps extends Pick<Task, "status"> {}

export function TaskStatusIcon({ status }: TaskStatusIconProps) {
	const theme = useTheme();

	if (status === "DONE") {
		return <CheckCircleIcon fill={theme.colors.secondary} />;
	}

	return <Circle color={theme.colors.primary} />;
}
