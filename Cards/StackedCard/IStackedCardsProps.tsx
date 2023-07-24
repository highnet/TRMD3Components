/*
The StackedCards component represents a card-like user interface element that can stack on top of each other, often used for presenting content in an organized and visually appealing manner.
The interface defines optional properties for the StackedCards, including:
"configuration": A string property used for styling or customization purposes.
"initial": A string property representing the initial state of the StackedCards.
"header": A string property for the header text of the StackedCards. "subheader":
 A string property for the subheader text of the StackedCards.
"iconButtonIconName": A string property representing the name of an icon to be
displayed as a button within the StackedCards. "title": A string property
representing the main title or heading of the StackedCards. "subhead": A string
property representing additional subheading or secondary information. "text":
A string property for the main content or description of the StackedCards.
"onPrimaryButtonClick": An optional callback function that gets invoked when the
primary button in the StackedCards is clicked. "primaryButtonLabel": A string
property representing the label or text for the primary button, if applicable.
"onSecondaryButtonClick": An optional callback function that gets invoked when
the secondary button in the StackedCards is clicked. "secondaryButtonLabel": A
string property representing the label or text for the secondary button, if
applicable. "imageSrc": A string property representing the source URL of an
image to be displayed within the StackedCards. "onHeaderIconButtonClick": An
optional callback function that gets invoked when the icon button in the header
of the StackedCards is clicked.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IStackedCardsProps extends IComponentProps {
	configuration?: string;
	initial?: string;
	header?: string;
	subheader?: string;
	iconButtonIconName?: string;
	title?: string;
	subhead?: string;
	text?: string;
	onPrimaryButtonClick?: () => void;
	primaryButtonLabel?: string;
	onSecondaryButtonClick?: () => void;
	secondaryButtonLabel?: string;
	imageSrc?: string;
	onHeaderIconButtonClick?: () => void;
}
