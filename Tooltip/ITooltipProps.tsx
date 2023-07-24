/*
The Tooltip component represents a user interface element used to display additional information or actions when the user hovers or interacts with a trigger component.
The interface defines optional properties for the Tooltip, including:
"configuration": A string property used for styling or customization purposes.
"title": A string property representing the title or main content of the Tooltip.
"buttons": An array of objects representing buttons to be displayed within the
Tooltip, with each button having an optional "label" for the button text and an
optional "onClick" function to handle clicks. "triggerComponent": A
React.ReactElement representing the component that triggers the display of the
Tooltip when the user hovers over or interacts with it.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface ITooltipProps extends IComponentProps {
	configuration?: string;
	title?: string;
	buttons?: {
		label?: string;
		onClick?: () => void;
	}[];
	triggerComponent?: React.ReactElement;
}
