/*
This code represents a React functional component called AssistChip, which is
used to render a chip with an optional icon and label text. The component accepts
various props to customize its behavior and appearance. The component imports
necessary modules such as React, useState, Icon, and Typography. It also imports
a TypeScript interface called IAssistChipProps, which defines the types of the
props expected by the component. Inside the component, the props are destructured
to access their values. The component uses the useState hook to define state 
variables for each prop, initializing them with the provided values or default
values if not provided.The _id, _className, _disabled, _children, _iconType,
_iconName, _elevated, and _iconSrc variables store the values of the corresponding
props or default values. The _iconSrc variable is determined based on the
_iconType prop, with fallback values for different scenarios. The _theme variable
is set to the chosen theme stored in the browser's local storage or the
preferred scheme. It is used to apply a specific CSS class to the component
based on the theme. The _computedComponentClassName variable is created using
a StringBuilder utility class. It builds a string of CSS classes based 
on the component's state and props. The component's return statement renders
a button element with the provided or default id and computed CSS class name.
Event handlers are assigned to the respective events. Inside the button element,
there are conditional renderings based on the _iconType. If the _iconType is
"icon", an Icon component is rendered with the _iconName as its content.
If the _iconType is "favicon" or "branded", an img element is rendered with
the _iconSrc as its source. Finally, a Typography component is rendered with
the _children as the label text. Overall, this code represents a reusable chip
component with customizable props for styling, icon display, and event handling.
It dynamically applies CSS classes based on props and state variables to 
achieve the desired appearance and behavior.
*/

import React, {useState} from "react";
import {IAssistChipProps} from "./IAssistChipProps";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import {StringBuilder} from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";

const AssistChip: React.FC<IAssistChipProps> = ({
	id,
	className,
	disabled,
	children,
	onClick,
	iconType,
	iconName,
	iconSrc,
	elevated,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_disabled] = useState(disabled || false);
	const [_children] = useState(children || "Label");
	const [_iconType] = useState(iconType || undefined);
	const [_iconName] = useState(iconName || "local_taxi");
	const [_elevated] = useState(elevated || false);
	const [_iconSrc] = useState(() => {
		if (iconSrc) {
			return iconSrc;
		} else if (_iconType === "favicon") {
			return "../../Netflix_Symbol_RGB.png";
		} else if (_iconType === "branded") {
			return "../../Colourful_Logo.png";
		}
	});

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedComponentClassName = new StringBuilder()
		.add("chip")
		.add("assistchip")
		.add(_disabled ? "assistchip-disabled" : "")
		.add(_iconType ? "assistchip-" + _iconType : "")
		.add(_iconType ? "assistchip-with-icon" : "")
		.add(_elevated ? "assistchip-elevated" : "")
		.add("assistchip-" + _theme)
		.add(_className)
		.toString();

	return (
		<button
			id={_id}
			className={_computedComponentClassName}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}>
			{_iconType === "icon" && (
				<Icon className="icon-on-assistchip">{_iconName}</Icon>
			)}

			{(_iconType === "favicon" || _iconType === "branded") && (
				<img className={_iconType + "-on-assistchip"} src={_iconSrc}></img>
			)}

			<Typography variant={"text-label-large"} className="text-on-assistchip">
				{_children}
			</Typography>
		</button>
	);
};

export default AssistChip;
