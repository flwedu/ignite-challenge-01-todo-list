import { type PropsWithChildren, createContext } from "react";

export interface TaskMethodsType {
	onRemoveTask: (id: string) => void;
	onCheckTask: (id: string, check: boolean) => void;
}

export const TaskMethodsContext = createContext<TaskMethodsType | null>(null);

export const TaskMethodsContextProvider = ({
	children,
	...props
}: PropsWithChildren<TaskMethodsType>) => {
	return (
		<TaskMethodsContext.Provider value={props}>
			{children}
		</TaskMethodsContext.Provider>
	);
};
