import { styled } from "styled-components";

export const StyledHeadingDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.colors["gray-700"]};
	width: 100%;
	height: 200px;

	h1 {
		font-weight: bold;
		background: ${({ theme }) =>
			`linear-gradient(to right,
				${theme.colors.primary} 0%,
				${theme.colors.primary} 45%,
				${theme.colors.secondary} 45%
				)`};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;
