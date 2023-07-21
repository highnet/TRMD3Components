/*
This code defines an interface named ICheckboxProps, which extends the
IComponentProps interface. The interface serves as a blueprint for defining
the props that can be passed to a Checkbox component. The ICheckboxProps
interface includes the following optional props: configuration: A string
prop that represents the configuration of the checkbox, which may
define its appearance or behavior. selected: A boolean prop that
determines whether the checkbox is selected or not.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface ICheckboxProps extends IComponentProps {
	configuration?: string;
	selected?: boolean;
}
