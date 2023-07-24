/*
This code defines an interface for the RadioButton component in a React front-end
application. The interface "IRadioButtonProps" extends the "IComponentProps"
interface from the "../Component/IComponentProps" module, inheriting its
properties. The RadioButton component represents a single radio button input,
commonly used for selecting a single option from a list of choices. The interface
defines optional properties for the RadioButton, including "name" to specify the
name of the radio button group, "value" to set the value of the radio button,
and "defaultChecked" to indicate if the radio button is initially checked.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface IRadioButtonProps extends IComponentProps {
	name?: string;
	value?: string;
	defaultChecked?: boolean;
}
