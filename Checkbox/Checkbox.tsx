/* 
The code defines a React functional component called Checkbox. This component
represents a customizable checkbox element that can be selected or deselected.
The checkbox supports several properties that can be passed as props, such as
'disabled', 'id', 'className', 'configuration', 'onChange', 'selected',
'onMouseEnter', 'onMouseLeave', and 'onMouseMove'. The checkbox appearance and
behavior are determined based on these props and internal states. It uses the
'useState' hook from React to set internal state variables for 'disabled', 'id',
'className', 'configuration', and 'selected'. The checkbox can be in a selected
or deselected state, and it can also be disabled to prevent interactions. The
checkbox's theme is derived from the 'localStorage' or a default theme based on
the user's preference and is used to determine the checkbox's appearance. The
checkbox element is created with the calculated class name based on its
configuration and state. When clicked, the 'handleClick' function toggles the
'selected' state, and the 'onChange' callback is called if provided. If the
checkbox is selected, it displays an 'Icon' component with a checkmark icon.
The checkmark icon is created with a specific class name for styling purposes.
The checkbox element also includes an empty <div> element that serves as an
overlay, allowing additional styling and interaction effects.
*/

import React, {useState} from "react";
import {ICheckboxProps} from "./ICheckboxProps";
import {StringBuilder} from "../Gizmos/StringBuilder";
import {getPreferredScheme} from "../Gizmos/Themeing";
import Icon from "../Icon/Icon";

const Checkbox: React.FC<ICheckboxProps> = ({
	disabled,
	id,
	className,
	configuration,
	onChange,
	selected,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
}) => {
	const [_disabled] = useState(disabled || false);
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");

	const [_config] = useState(configuration || "default");
	const [_selected, setSelected] = useState(selected || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const handleClick = () => {
		setSelected(!_selected);
	};

	const _computedComponentClassName = new StringBuilder()
		.add("checkbox")
		.add("checkbox-" + _config)
		.add("checkbox-" + _theme)
		.add(!_selected ? "checkbox-deselected" : "")
		.add(_disabled ? "checkbox-disabled" : "")
		.add(_className)
		.toString();

	const _computedComponentIconClassName = new StringBuilder()
		.add("icon-on-checkbox")
		.toString();

	const _computedComponentOverlayClassName = new StringBuilder()
		.add("checkbox-overlay")
		.toString();

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			onClick={(e) => {
				handleClick();
				onChange?.(e);
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}>
			{_selected && (
				<Icon className={_computedComponentIconClassName}>check</Icon>
			)}
			<div className={_computedComponentOverlayClassName}></div>
		</div>
	);
};

export default Checkbox;
