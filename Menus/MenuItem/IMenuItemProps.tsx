/*
This code defines an interface called IMenuItemProps, extending
IComponentProps. It includes several optional properties to configure a
menu item component: 'label': A string representing the label or text to
be displayed for the menu item. 'showDivider': A boolean to determine if
a divider should be displayed after the item. 'leadingIcon': A string
representing the name of the icon to be displayed at the leading position.
'trailingIcon': A string representing the name of the icon to be displayed
at the trailing position. 'onTrailingIconClick': A function to handle
clicks on the trailing icon element.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IMenuItemProps extends IComponentProps {
	label?: string;
	showDivider?: boolean;
	leadingIcon?: string;
	trailingIcon?: string;
	onTrailingIconClick?: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => void;
}
