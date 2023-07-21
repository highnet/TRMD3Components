/*
This code defines an interface named IAssistChipProps, which extends the
IComponentProps interface. It serves as a blueprint for defining the props
that can be passed to an AssistChip component. The IAssistChipProps
interface includes the following optional props: iconType: A string prop
that represents the type of the icon used in the chip. iconName: A string
prop that specifies the name of the icon used in the chip. iconSrc: A string
prop that contains the source URL of the icon image used in the chip.
elevated: A boolean prop that determines whether the chip should have an
elevated appearance (e.g., a shadow) or not.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IAssistChipProps extends IComponentProps {
	iconType?: string;
	iconName?: string;
	iconSrc?: string;
	elevated?: boolean;
}
