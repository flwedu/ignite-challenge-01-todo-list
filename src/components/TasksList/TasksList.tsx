import { useTheme } from "styled-components";
import { type Task, TaskCard } from "../TaskCard/TaskCard.tsx";
import {
	Container,
	StyledH2,
	StyledList,
	StyledListHeaderDiv,
	StyledTag,
} from "./styles.ts";

interface TasksListProps {
	tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
	const theme = useTheme();
	const tasksCount = tasks.length;
	const doneCount = tasks.filter((task) => task.status === "DONE").length;

	return (
		<Container>
			<StyledListHeaderDiv>
				<StyledH2 color={theme.colors.primary}>
					Tarefas criadas <StyledTag>{tasksCount}</StyledTag>
				</StyledH2>
				<StyledH2 color={theme.colors.secondary}>
					Concluídas{" "}
					<StyledTag>
						{doneCount} de {tasksCount}
					</StyledTag>
				</StyledH2>
			</StyledListHeaderDiv>
			<StyledList>
				{tasks.map((task) => (
					<TaskCard key={task.id} {...task} />
				))}
			</StyledList>
		</Container>
	);
}
