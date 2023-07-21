/*
This code defines an interface named IExtendedFabProps, which describes the properties
that can be passed to an ExtendedFab component in a React application. The
IExtendedFabProps interface extends the IComponentProps interface, which likely
includes common properties for styling and handling events on the ExtendedFab
component. The IExtendedFabProps interface includes the following properties:
'configuration': A string used to customize the appearance or behavior of the
ExtendedFab component. 'iconName': A string representing the name of an icon to be
displayed within the ExtendedFab component. The IExtendedFabProps interface serves as
a contract for defining the various properties that can be used to customize and
control the appearance and behavior of the ExtendedFab component in the application.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IExtendedFabProps extends IComponentProps {
	configuration?: string;
	iconName?: string;
}
