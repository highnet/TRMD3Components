/*
The VerticalDivider component represents a user interface element used to
create a vertical line or divider to visually separate content or sections.
The interface defines optional properties for the VerticalDivider, including:
"width": A number property representing the width of the vertical divider.
"height": A number property representing the height of the vertical divider.
"inset": A string property representing the CSS value for setting the left and
right inset of the vertical divider. "insetTopHeight": A number property
representing the height of the top inset of the vertical divider.
"insetBottomHeight": A number property representing the height of the bottom
inset of the vertical divider. "showInsets": A boolean property indicating
whether the insets of the vertical divider should be displayed.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IVerticalDividerProps extends IComponentProps {
	width?: number;
	height?: number;
	inset?: string;
	insetTopHeight?: number;
	insetBottomHeight?: number;
	showInsets?: boolean;
}
