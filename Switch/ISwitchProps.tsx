/*
The Switch component represents a user interface element used for toggling
between two states, often represented by a slider that can be moved left
or right. The interface defines optional properties for the Switch,
including: "selected": A boolean property representing whether the Switch is in
the selected (on) state or not (off). "icon": A boolean property indicating
whether the Switch has an associated icon for both the selected and deselected
states. "iconNameSelected": A string property representing the name of the icon
to be displayed when the Switch is in the selected state. "iconNameDeselected":
A string property representing the name of the icon to be displayed when the
Switch is in the deselected state.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface ISwitchProps extends IComponentProps {
	selected?: boolean;
	icon?: boolean;
	iconNameSelected?: string;
	iconNameDeselected?: string;
}
