import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html, body {
		margin: 0;
		color: ${({ theme }) => theme.colors.text};
		background: ${({ theme }) => theme.colors["gray-600"]};
		font-family: ${({ theme }) => theme.fonts.family.body};
		font-size: ${({ theme }) => theme.fonts.sizes.base};
	}

	main {
		max-width: 736px;
		margin: -24px auto;
	}
`;
