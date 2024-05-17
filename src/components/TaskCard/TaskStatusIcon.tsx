import { Circle, CircleCheck, type LucideProps } from "lucide-react";
import { useTheme } from "styled-components";
import type { Task } from "./TaskCard.tsx";

export interface TaskStatusIconProps
	extends Pick<Task, "status">,
		LucideProps {}

export function TaskStatusIcon({ status, ...props }: TaskStatusIconProps) {
	const theme = useTheme();

	if (status === "DONE") {
		return <CircleCheck fill={theme.colors.secondary} {...props} />;
	}

	return <Circle color={theme.colors.primary} {...props} />;
}
