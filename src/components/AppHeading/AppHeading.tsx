import { RocketSvg } from "./RocketSvg.tsx";
import { StyledHeadingDiv } from "./styles.ts";

export function AppHeading() {
	return (
		<StyledHeadingDiv>
			<RocketSvg /> <h1>todo</h1>
		</StyledHeadingDiv>
	);
}
