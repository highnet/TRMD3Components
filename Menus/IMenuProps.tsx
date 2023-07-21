/*
This code defines an interface called IMenuProps, extending IComponentProps.
It includes an optional property 'height' which allows specifying the
height of the menu component.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface IMenuProps extends IComponentProps {
	height?: string;
}
