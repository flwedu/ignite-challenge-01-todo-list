import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { defaultTheme } from "./themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
