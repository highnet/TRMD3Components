/*
This code defines an interface called IListItemProps, extending
IComponentProps. It includes several optional properties to configure a
list item component: 'title': A string representing the title of the list
item. 'size': A string indicating the size of the list item. 'showDivider':
A boolean to determine if a divider should be displayed after the item.
'leadingElement': A string representing an element to be displayed at the
leading position. 'leadingElementId': A string representing the ID of the
leading element. 'trailingElement': A string representing an element to be
displayed at the trailing position. 'trailingElementId': A string
representing the ID of the trailing element. 'leadingMonogramInitial': A
string representing the monogram initial for the leading element.
'iconName': A string representing the name of the icon to be displayed.
'imageSrc': A string representing the source URL of an image to be displayed.
'radioButtonGroupName': A string representing the name of the radio button
group. 'radioButtonValue': A string representing the value of the radio
button. 'checkboxConfiguration': A string representing the configuration
of a checkbox. 'onElementChange': A function to handle changes to the list
item element. 'onTrailingIconClick': A function to handle clicks on the
trailing icon element.´'elementSelected': A boolean to determine if the
list item element is selected. 'switchIconNameSelected': A string
representing the name of the icon when the switch is in a selected state.
'switchIconNameDeselected': A string representing the name of the icon when
the switch is not selected.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IListItemProps extends IComponentProps {
	title?: string;
	size?: string;
	showDivider?: boolean;
	leadingElement?: string;
	leadingElementId?: string;
	trailingElement?: string;
	trailingElementId?: string;
	leadingMonogramInitial?: string;
	iconName?: string;
	imageSrc?: string;
	radioButtonGroupName?: string;
	radioButtonValue?: string;
	checkboxConfiguration?: string;
	onElementChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onTrailingIconClick?: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => void;
	elementSelected?: boolean;
	switchIconNameSelected?: string;
	switchIconNameDeselected?: string;
}
