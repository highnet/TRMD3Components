/*
This React functional component, "BottomAppBar," represents a bottom app bar
that typically contains icons and an optional floating action button (FAB).
The component takes the following props:
    className: Additional custom classes for the app bar.
    id: Optional ID attribute for the root div element.
    icons: An array of objects, each defining an icon displayed on the app bar
		with a name, optional label, and onClick function.
    fab: An object representing the floating action button, with an optional
		onClick function and fabIconName.

The component first initializes its state with the provided props or defaults.
It then fetches the preferred theme from local storage or the user's system
preferences and applies it to create dynamic class names for styling.
The app bar contains icon elements, each defined by the provided icons prop.
Each icon is wrapped in a container and displayed with an optional label.
If a FAB is defined (fab prop provided), it is rendered with the specified
configuration, size, and icon name. The onClick function is attached to the FAB.
The final structure of the bottom app bar is returned as a div containing the
icon elements and the optional FAB.
*/

import React, {useState} from "react";
import {IBottomAppBarProps} from "./IBottomAppBarProps";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import {StringBuilder} from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Fab from "../../FABs/FAB/Fab";
import Typography from "../../Typography/Typography";

const BottomAppBar: React.FC<IBottomAppBarProps> = ({
	className,
	id,
	icons = [{name: "search", label: "", onClick: () => {}}],
	fab,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_icons] = useState(icons);
	const [_fab] = useState({
		onClick: fab?.onClick ?? (() => {}),
	});
	const [_fabIconName] = useState(fab?.fabIconName ?? "add");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedComponentClassName = new StringBuilder()
		.add("bottom-app-bar")
		.add("bottom-app-bar-" + _theme)
		.add(_className)
		.toString();

	const _computedComponentIconClassName = new StringBuilder()
		.add("icon-on-bottom-app-bar")
		.add("icon-on-bottom-app-bar-" + _theme)
		.toString();

	const _computedComponentLabelClassName = new StringBuilder()
		.add("label-on-bottom-app-bar")
		.add("label-on-bottom-app-bar-" + _theme)
		.toString();

	const iconElements = _icons.map((icon, index) => (
		<div
			className={"icon-container-on-bottom-app-bar"}
			key={index}
			tabIndex={0}>
			<Icon className={_computedComponentIconClassName} onClick={icon.onClick}>
				{icon.name}
			</Icon>
			<Typography
				className={_computedComponentLabelClassName}
				variant="text-label-small">
				{icon.label}
			</Typography>
		</div>
	));

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="icons-on-bottom-app-bar">{iconElements}</div>
			{fab && fab.onClick && (
				<Fab
					configuration="secondary"
					size="medium"
					iconName={_fabIconName}
					onClick={_fab.onClick}
				/>
			)}
		</div>
	);
};

export default BottomAppBar;
