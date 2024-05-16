import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-top: 2rem;
`;

export const StyledList = styled.ul`
	gap: 1rem;
	padding-inline: 0;
	display: flex;
	flex-direction: column;
`;

export const StyledListHeaderDiv = styled.div`
	justify-content: space-between;
	display: flex;
`;

export const StyledH2 = styled.h2`
	font-size: ${({ theme }) => theme.fonts.sizes.base};
	font-weight: bold;
	color: ${({ color }) => color ?? undefined};
	margin: 0;
`;

export const StyledTag = styled.span`
	background: ${({ theme }) => theme.colors["gray-400"]};
	border-radius: 999px;
	color: ${({ theme }) => theme.colors["gray-200"]};
	font-size: ${({ theme }) => theme.fonts.sizes.small};
	font-weight: bold;
	padding: 2px 8px;
`;
