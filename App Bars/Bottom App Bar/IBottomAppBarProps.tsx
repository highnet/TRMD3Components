/*
This code defines an interface named IBottomAppBarProps, which extends the
IComponentProps interface. The interface serves as a blueprint for defining
the props that can be passed to a BottomAppBar component. The
IBottomAppBarProps interface includes the following props: icons: An array
of objects, each representing an icon to be displayed on the BottomAppBar.
Each object contains a 'name' property that specifies the name of the icon,
an optional 'label' property for adding a label to the icon, and an optional
'onClick' function that will be triggered when the icon is clicked. fab: An
object that represents the Floating Action Button (FAB) on the BottomAppBar.
It includes an optional 'onClick' function to handle the click event on the
FAB and an optional 'fabIconName' property to specify the name of the icon
used in the FAB. These props are intended to be used to customize the
content and behavior of the BottomAppBar component. The 'icons' prop allows
developers to add multiple icons to the bar, each with an optional label
and click handler. The 'fab' prop allows adding a single Floating Action
Button to the bar, with a specified icon and click handler.
*/
import {IComponentProps} from "../../Component/IComponentProps";

export interface IBottomAppBarProps extends IComponentProps {
	icons?: {
		name: string;
		label?: string;
		onClick?: () => void;
	}[];
	fab?: {
		onClick?: () => void;
		fabIconName?: string;
	};
}
