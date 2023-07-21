/*
This code defines an interface named ICarouselProps, which extends the
IComponentProps interface. The interface serves as a blueprint for defining
the props that can be passed to a Carousel component. The ICarouselProps
interface includes the following optional props: images: An array of
objects, each representing an image to be displayed in the carousel.
Each object contains an 'imageSource' property that specifies the URL of
the image, an optional 'label' property for adding a label or title to the
image, and an optional 'supportingText' property for adding additional text
or description related to the image. width: A number prop that specifies
the width of the carousel. uniformWidths: A boolean prop that determines
whether the carousel should have uniform widths for all images or not.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface ICarouselProps extends IComponentProps {
	images?: {
		imageSource: string;
		label?: string;
		supportingText?: string;
	}[];
	width?: number;
	uniformWidths?: boolean;
}
