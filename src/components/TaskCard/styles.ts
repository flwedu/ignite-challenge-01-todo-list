import { styled } from "styled-components";

export const StyledListItem = styled.li`
	display: flex;
	background: ${(props) => props.theme.colors["gray-500"]};
	border: 1px solid ${(props) => props.theme.colors["gray-400"]};
	border-radius: 0.5rem;
	color: ${(props) => props.theme.colors["gray-100"]};
	gap: 12px;
	padding: 1rem;
	align-content: start;

	span {
		flex-grow: 1;
	}
`;
