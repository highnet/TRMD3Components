/*
The Slider component is a user interface element used to select a value within
a specified range by dragging a slider thumb along a track.
The interface defines optional properties for the Slider, including:
"min": A number property representing the minimum value of the slider's range.
"max": A number property representing the maximum value of the slider's range.
"value": A number property representing the current value of the slider.
"step": A number property representing the incremental step value for the slider.
"onValueChange": An optional callback function that gets invoked when the
slider's value changes, passing the new value as an argument.
*/

import {IComponentProps} from "../Component/IComponentProps";

export interface ISliderProps extends IComponentProps {
	min?: number;
	max?: number;
	value?: number;
	step?: number;
	onValueChange?: (value: number) => void;
}
