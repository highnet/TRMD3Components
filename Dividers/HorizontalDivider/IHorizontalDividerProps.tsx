/*
The component can receive several props: height: Specifies the height of the
divider. width: Specifies the width of the divider. inset: Specifies the type
of inset for the divider (e.g., "dotted", "dashed", etc.). insetRightWidth:
Specifies the width of the right-side inset, if applicable. insetLeftWidth:
Specifies the width of the left-side inset, if applicable. showInsets: A
boolean flag to determine whether to display the insets or not.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IHorizontalDividerProps extends IComponentProps {
	height?: number;
	width?: number;
	inset?: string;
	insetRightWidth?: number;
	insetLeftWidth?: number;
	showInsets?: boolean;
}
