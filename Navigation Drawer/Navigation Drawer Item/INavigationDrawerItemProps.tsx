/*
This code defines an interface called INavigationDrawerItemProps,
extending IComponentProps. It includes several optional properties to
configure a navigation drawer item component: 'leadingIcon': A string
representing the name of the icon to be displayed at the leading position.
'label': A string representing the label or text to be displayed for the
navigation drawer item. 'trailingText': A string representing additional
text to be displayed at the trailing position. 'interactive': A boolean to
determine if the navigation drawer item is interactive or not.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface INavigationDrawerItemProps extends IComponentProps {
	leadingIcon?: string;
	label?: string;
	trailingText?: string;
	interactive?: boolean;
}
