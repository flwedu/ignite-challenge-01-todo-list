import type { PropsWithChildren } from "react";
import { RocketSvg } from "./RocketSvg.tsx";
import { StyledHeadingDiv } from "./styles.ts";

export function AppHeading({ children }: PropsWithChildren<unknown>) {
	return (
		<StyledHeadingDiv>
			<RocketSvg /> {children}
		</StyledHeadingDiv>
	);
}
