/*
The interface "ISideSheetProps" extends the "IComponentProps" interface from
the "../../Component/IComponentProps" module, inheriting its properties.
The SideSheet component represents a customizable sheet or panel that slides
in from the side of the screen, often used for displaying additional information
or actions. The interface defines optional properties for the SideSheet,
including: "title": A string property for the title of the SideSheet, displayed
at the top. "trailingIcon": An optional object property representing an icon
on the trailing edge of the SideSheet, with an optional "name" for the icon and
an optional "onClick" function to handle clicks. "leadingIcon": An optional
object property representing an icon on the leading edge of the SideSheet, with
an optional "name" for the icon and an optional "onClick" function to handle
clicks. "buttons": An array of objects representing buttons to be displayed at
the bottom of the SideSheet, with each button having an optional "label" for
the button text and an optional "onClick" function to handle clicks. "contents":
A property for the ReactNode representing the content to be displayed within the
body of the SideSheet.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface ISideSheetProps extends IComponentProps {
	title?: string;
	trailingIcon?: {
		name?: string;
		onClick?: () => void;
	};
	leadingIcon?: {
		name?: string;
		onClick?: () => void;
	};
	buttons?: {
		label?: string;
		onClick?: () => void;
	}[];
	contents?: React.ReactNode;
}
