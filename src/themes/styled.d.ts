import "styled-components";
import type { defaultTheme } from "./index.ts";

type DefaultThemeType = typeof defaultTheme;

declare module "styled-components" {
	export interface DefaultTheme extends DefaultThemeType {}
}
