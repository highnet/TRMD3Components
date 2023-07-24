/*
The interface "ISegmentedButtonProps" extends the "IComponentProps" interface
from the "../Component/IComponentProps" module, inheriting its properties.
The SegmentedButton component is a button-like user interface element used in
segmented controls, allowing users to make selections from multiple mutually
exclusive options. The interface defines optional properties for the
SegmentedButton, including: "configuration": A string property used for styling
or customization purposes. "position": A string property used to specify the
position of the SegmentedButton in a segmented group, if applicable. "icon":
A string property representing the name of an icon to be displayed within the
SegmentedButton. "selected": A boolean property indicating whether the
SegmentedButton is currently selected or not. "label": A string property
representing the text label or content of the SegmentedButton. "value": A string
property representing the value associated with the SegmentedButton, which can
be useful for handling selection events.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface ISegmentedButtonProps extends IComponentProps {
	configuration?: string;
	position?: string;
	icon?: string;
	selected?: boolean;
	label?: string;
	value?: string;
}
