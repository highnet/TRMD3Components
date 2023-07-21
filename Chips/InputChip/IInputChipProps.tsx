/*
This code defines an interface called IChipProps, extending IComponentProps.
It includes several optional properties: 'selected': A boolean to determine
if the chip is in a selected state. 'avatarIconNameSelected': A string to
specify the icon name when the chip is selected. 'avatarIconNameDeselected':
A string to specify the icon name when the chip is not selected.
'leadingIconName': A string to specify the icon name for the leading
position in the chip. 'trailingIconName': A string to specify the icon name
for the trailing position in the chip.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IChipProps extends IComponentProps {
	selected?: boolean;
	avatarIconNameSelected?: string;
	avatarIconNameDeselected?: string;
	leadingIconName?: string;
	trailingIconName?: string;
}
