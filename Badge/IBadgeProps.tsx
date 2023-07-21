import {IComponentProps} from "../Component/IComponentProps";

/*  
This code defines an interface named IBadgeProps, which extends the
IComponentProps interface. The interface serves as a blueprint for
defining the props that can be passed to a Badge component. The IBadgeProps
interface includes the following optional props: configuration: A string
prop that represents the configuration of the badge. xOffset: A number prop
that specifies the horizontal offset for positioning the badge. yOffset: A
number prop that specifies the vertical offset for positioning the badge.
anchor: A string prop that determines the anchor point for positioning the
badge. These props are intended to be used to customize the appearance and
positioning of the Badge component. The 'configuration' prop may define the
content or style of the badge. The 'xOffset' and 'yOffset' props allow
adjusting the badge's position relative to its default placement, while the
'anchor' prop provides control over the reference point used for positioning
the badge on its parent container. By making these props optional, it allows
flexibility in using the Badge component for different scenarios and designs,
while still providing the ability to customize its behavior based on specific
requirements.
*/

export interface IBadgeProps extends IComponentProps {
	configuration?: string;
	xOffset?: number;
	yOffset?: number;
	anchor?: string;
}
