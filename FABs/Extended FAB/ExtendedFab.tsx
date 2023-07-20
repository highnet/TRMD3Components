/*
The code imports required modules and components from various files to use in
the ExtendedFab component. The main component is defined as a functional
component named ExtendedFab. It takes in several props representing the button's
configuration and content. The component uses the React useState hook to handle
some state variables, setting default values for certain props if they are not
provided. The component retrieves the preferred theme from local storage or
uses a default theme and applies appropriate CSS classes to style the button
accordingly. The component uses StringBuilder utility to create strings
representing the CSS class names for the button and its label, based on various
configurations and themes. The JSX code renders the ExtendedFab button using
the <button> element. Inside the button, it displays an Icon component and
a Typography component to represent the button's icon and label, respectively.
*/

import React, {useState} from "react";
import {IExtendedFabProps} from "./IExtendedFabProps";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import {StringBuilder} from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";

const ExtendedFab: React.FC<IExtendedFabProps> = ({
	id,
	children,
	className,
	onClick,
	configuration,
	iconName,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "surface");
	const [_children] = useState(children || "Label");
	const [_iconName] = useState(iconName || "edit");
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedComponentClassName = new StringBuilder()
		.add("fab")
		.add("fab-" + _config)
		.add("fab-" + _theme)
		.add("extended-fab")
		.add("extended-fab-" + _config)
		.add("extended-fab-" + _theme)
		.add(_className)
		.toString();

	const _computedComponentLabelClassName = new StringBuilder()
		.add("label-on-fab")
		.add("label-on-fab-" + _theme)
		.toString();

	return (
		<button id={_id} className={_computedComponentClassName} onClick={onClick}>
			<Icon>{_iconName}</Icon>
			<Typography
				variant="text-label-large"
				className={_computedComponentLabelClassName}>
				{_children}
			</Typography>
		</button>
	);
};

export default ExtendedFab;
