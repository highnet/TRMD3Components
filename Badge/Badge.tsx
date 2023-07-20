/*
	This React functional component renders a customizable badge element.
	It displays text content and can be positioned with optional x and y offsets.
	The component takes the following props:
  	children: The text content to display within the badge.
    id: Optional ID attribute for the root div element.
    className: Additional custom classes for the badge element.
    configuration: Configuration of the badge, defaults to "small".
    xOffset: Horizontal offset in rem units, defaults to 0.
    yOffset: Vertical offset in rem units, defaults to 0.
    onMouseEnter: Optional callback function when the mouse enters the badge area.
    onMouseLeave: Optional callback function when the mouse leaves the badge area.
    onMouseMove: Optional callback function when the mouse moves within the badge area.
    anchor: Determines the positioning of the badge relative to the anchor point.
    Options: "top-left" (default), "top-right", "bottom-left", "bottom-right".
	
	The badge's appearance is influenced by the selected theme, which is retrieved
	from local storage or determined based on the user's preferred scheme.
	The theme classes are applied to the badge and its label text. The badge's
	position can be fine-tuned using x and y offsets. The badge can be positioned
	in one of the four corners of its container using the "anchor" prop. The
	component internally uses a StringBuilder to construct CSS class names. The
	badge element contains a Typography component to display the provided text
	content.The typography variant can be customized using the "text-label-small"
	class.
*/

import React, {useState} from "react";
import {IBadgeProps} from "./IBadgeProps";
import {StringBuilder} from "../Gizmos/StringBuilder";
import {getPreferredScheme} from "../Gizmos/Themeing";
import Typography from "../Typography/Typography";

const Badge: React.FC<IBadgeProps> = ({
	children,
	id,
	className,
	configuration,
	xOffset,
	yOffset,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	anchor,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "small");
	const [_xOffset] = useState(xOffset || 0);
	const [_yOffset] = useState(yOffset || 0);
	const [_children] = useState(children || "");
	const [_anchor] = useState(anchor || "top-left");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedXOffset: string = _xOffset.toString() + "rem";
	const _computedYOffset: string = _yOffset.toString() + "rem";

	const _computedComponentClassName = new StringBuilder()
		.add("badge")
		.add("badge-" + _config)
		.add("badge-" + _theme)
		.add(_className)
		.toString();

	const _computedComponentLabelClassName = new StringBuilder()
		.add("badge-label-text")
		.add("badge-label-text-" + _config)
		.add("badge-label-text-" + _theme)
		.toString();

	const style: React.CSSProperties = {
		transform: `translate(${_computedXOffset}, ${_computedYOffset})`,
	};

	switch (_anchor) {
		case "top-left":
			style.right = "0%";
			break;
		case "top-right":
			style.left = "100%";
			break;
		case "bottom-left":
			style.top = "100%";
			break;
		case "bottom-right":
			style.top = "100%";
			style.left = "100%";
			break;
		default:
			break;
	}

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			style={style}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}>
			<Typography
				variant="text-label-small"
				className={_computedComponentLabelClassName}>
				{_children}
			</Typography>
		</div>
	);
};

export default Badge;
