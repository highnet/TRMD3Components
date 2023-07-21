/*
The IDialogProps interface includes the following properties:
'title': A string that represents the title of the dialog.
'openDialogTrigger': A function that is used as a trigger to open the dialog.
'buttons': An array of objects representing buttons that can be displayed
in the dialog. Each button object can have properties like 'label' for the
button text, 'onClick' for the click event handler, and 'configuration'
for customizing the button's appearance. 'showCloseButton': A boolean flag 
indicating whether to show a close button in the dialog. 'showDivider':
A boolean flag indicating whether to show a divider within the dialog.
'configuration': A string used to configure the appearance or behavior of
the dialog. 'listComponent': A React element that represents a list
component to be displayed within the dialog. 'iconName': A string
representing the name of an icon to be displayed in the dialog.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface IDIalogProps extends IComponentProps {
	title?: string;
	openDialogTrigger?: () => void;
	buttons?: {
		label?: string;
		onClick?: () => void;
		configuration?: string;
	}[];
	showCloseButton?: boolean;
	showDivider?: boolean;
	configuration?: string;
	listComponent?: React.ReactElement;
	iconName?: string;
}
