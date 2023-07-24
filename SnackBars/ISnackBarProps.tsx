/*
The SnackBar component is a user interface element used to display short messages
or notifications to users, usually appearing at the bottom of the screen.
The interface defines optional properties for the SnackBar, including:
"message": A string property representing the message or content to be displayed
in the SnackBar. "dismissable": A boolean property indicating whether the
SnackBar can be dismissed by the user. "action": An optional callback function
that gets invoked when the user interacts with the action button in the SnackBar.
"actionLabel": A string property representing the label or text to be displayed
on the action button, if applicable.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface ISnackBarProps extends IComponentProps {
	message?: string;
	dismissable?: boolean;
	action?: () => void;
	actionLabel?: string;
}
