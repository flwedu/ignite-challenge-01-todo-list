import { css, styled } from "styled-components";
import type { Task } from "./TaskCard.tsx";

export const StyledListItem = styled.li`
	display: flex;
	background: ${(props) => props.theme.colors["gray-500"]};
	border: 1px solid ${(props) => props.theme.colors["gray-400"]};
	border-radius: 0.5rem;
	color: ${(props) => props.theme.colors["gray-100"]};
	gap: 12px;
	padding: 1rem;
	align-content: start;
`;

export const StyledListItemText = styled.span<{
	status: Task["status"];
}>`
	flex-grow: 1;

	${({ status, theme }) =>
		status === "DONE" &&
		css`
		color: ${theme.colors["gray-300"]};
		text-decoration: line-through;
	`}
`;
