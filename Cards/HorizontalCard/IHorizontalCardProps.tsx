/*
This code defines an interface named IHorizontalCardProps, which describes the
properties that can be passed to a HorizontalCard component in a React application.
The IHorizontalCardProps interface extends the IComponentProps interface, which likely
includes common properties for styling and handling events on the HorizontalCard
component. The IHorizontalCardProps interface includes the following properties:
'configuration': A string used to customize the appearance or behavior of the
HorizontalCard component. 'initial': A string representing an initial value 
for the HorizontalCard component. 'header': A string used as the main heading or
title of the HorizontalCard. 'subhead': A string used as a secondary subheading
or description for the HorizontalCard. 'imageSrc': A string representing the URL or
source of an image that can be displayed within the HorizontalCard component.
The IHorizontalCardProps interface serves as a contract for defining the various
properties that can be used to customize and control the appearance and content of
the HorizontalCard component in the application.
*/

import {IComponentProps} from "../../Component/IComponentProps";

export interface IHorizontalCardProps extends IComponentProps {
	configuration?: string;
	initial?: string;
	header?: string;
	subhead?: string;
	imageSrc?: string;
}
