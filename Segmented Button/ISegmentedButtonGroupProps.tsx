/*
The interface "ISegmentedButtonGroupProps" extends the "IComponentProps"
interface from the "../Component/IComponentProps" module, inheriting its
properties. The SegmentedButtonGroup component is used to group and manage a
set of SegmentedButtons, allowing users to select one option from the group.
The interface defines the following properties: "children": An array of
ReactElements representing SegmentedButtons that will be part of the group.
"defaultSelectedButtonIndex": An optional property that specifies the default
index of the selected SegmentedButton within the group. "onSelectedValueChange":
An optional callback function that gets invoked when the selected value
(string) of the SegmentedButton group changes.
*/

import {ReactElement} from "react";
import {IComponentProps} from "../Component/IComponentProps";
import {ISegmentedButtonProps} from "./ISegmentedButtonProps";

export interface ISegmentedButtonGroupProps extends IComponentProps {
	children: ReactElement<ISegmentedButtonProps>[];
	defaultSelectedButtonIndex?: number;
	onSelectedValueChange?: (value: string | undefined) => void;
}
