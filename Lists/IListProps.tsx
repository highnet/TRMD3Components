/*
This code defines an interface called IListProps, extending IComponentProps.
It includes an optional property 'height' which allows specifying the
height of the list component.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface IListProps extends IComponentProps {
	height?: string;
}
