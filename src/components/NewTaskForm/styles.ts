import { styled } from "styled-components";

export const StyledForm = styled.form`

	display: flex;
	gap: 0.5rem;
	flex-direction: row;
	margin-inline: auto;
	width: 100%;

	input {
		text-align: start;
		padding: 1rem;
		flex-grow: 1;
		background: ${(props) => props.theme.colors["gray-500"]};
		border: 1px solid ${(props) => props.theme.colors["gray-700"]};
		border-radius: 0.5rem;
		color: ${(props) => props.theme.colors["gray-100"]};

		&:active {
			border-color: ${(props) => props.theme.colors["secondary-dark"]};
			outline-color: 0;
		}
	}

	button {
		padding: 1rem;
		display: inline-flex;
		align-items: center;
		background: ${(props) => props.theme.colors["primary-dark"]};
		justify-items: center;
		gap: 0.5rem;
		color: ${(props) => props.theme.colors.text};
		border-radius: 0.5rem;
		border: none;
		cursor: pointer;
		transition: 0.2s background-color linear;

		&:hover {
			background: ${(props) => props.theme.colors.primary};
		}
	}
`;
