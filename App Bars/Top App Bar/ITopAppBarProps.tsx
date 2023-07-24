/*
The TopAppBar component represents a user interface element used as the top navigation bar in a web application, often containing the application title and navigation controls.
The interface defines optional properties for the TopAppBar, including:
"configuration": A string property used for styling or customization purposes.
"title": A string property representing the title or main heading of the
application displayed in the TopAppBar.
"leadingIcon": An object representing the leading icon (usually displayed at 
left side of the TopAppBar), with properties "name" for the icon name and
"onClick" as an optional function to handle clicks on the icon.
"trailingIcons": An array of objects representing trailing icons (usually
displayed at the right side of the TopAppBar), with each object having
properties "name" for the icon name and "onClick" as an optional function to
handle clicks on the icon.
*/

import { IComponentProps } from "../../Component/IComponentProps";

export interface ITopAppBarProps extends IComponentProps {
	configuration?: string;
	title?: string;
	leadingIcon?: { name: string; onClick?: () => void };
	trailingIcons?: { name: string; onClick?: () => void }[];
}
