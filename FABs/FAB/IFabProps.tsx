/*
This code defines an interface named IFabProps, which describes the properties that
can be passed to a Fab component in a React application. The IFabProps interface
extends the IComponentProps interface, which likely includes common properties for
styling and handling events on the Fab component. The IFabProps interface includes
the following properties: 'configuration': A string used to customize the appearance
or behavior of the Fab component. 'iconName': A string representing the name of an
icon to be displayed within the Fab component. 'size': A string used to define the
size of the Fab component, allowing customization of its dimensions. The IFabProps
interface serves as a contract for defining the various properties that can be used
to customize and control the appearance and behavior of the Fab component in the
application.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IFabProps extends IComponentProps {
	configuration?: string;
	iconName?: string;
	size?: string;
}
