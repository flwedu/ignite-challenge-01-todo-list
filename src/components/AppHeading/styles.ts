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
	}
`;
