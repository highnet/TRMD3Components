/*
This code defines a React functional component named HorizontalDivider,
used to render a horizontal divider on a webpage. The component accepts
several props, including id, className, height, width, inset, insetRightWidth,
insetLeftWidth, and showInsets. If any of these props are not provided,
default values are used. The component calculates the appropriate dimensions
and styles for the divider based on the provided or default props. It uses
a StringBuilder utility to construct classNames for different parts of the
divider based on the selected theme and custom classNames. The divider
consists of three parts: inset on the right side, the main horizontal bar,
and inset on the left side. The presence and width of the insets depend on
the 'inset' prop, which can be set to "none", "right", "left", or "center".
If 'showInsets' is true, the inset areas will have a red background,
otherwise, they will be transparent. The heights and widths are calculated
in rems (1 rem = 10px) and are converted to rem units before applying
them to the elements' styles. The final JSX output of this component is
a div containing the three parts: right inset div, the horizontal bar div,
and the left inset div, with their respective styles based on the provided
or default props.
*/

import React, {useState} from "react";
import {IHorizontalDividerProps} from "./IHorizontalDividerProps";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import {StringBuilder} from "../../Gizmos/StringBuilder";

const HorizontalDivider: React.FC<IHorizontalDividerProps> = ({
	id,
	className,
	height,
	width,
	inset,
	insetRightWidth,
	insetLeftWidth,
	showInsets,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_height] = useState(height || 1);
	const [_width] = useState(width || 288);
	const [_inset] = useState(inset || "none");
	const [_insetRightWidth] = useState(insetRightWidth || 16);
	const [_insetLeftWidth] = useState(insetLeftWidth || 16);
	const [_showInsets] = useState(showInsets || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const REM_BASE = 10; // 1 rem = 10px
	const _computedHeight: string = `${_height / REM_BASE}rem`;
	const _computedWidth: string = `${_width / REM_BASE}rem`;
	const _computedInsetRightWidth: string = `${_insetRightWidth / REM_BASE}rem`;
	const _computedInsetLeftWidth: string = `${_insetLeftWidth / REM_BASE}rem`;
	const _computedInsetColor: string = _showInsets ? "red" : "transparent";

	const _computedComponentClassName = new StringBuilder()
		.add("divider")
		.add("horizontaldivider")
		.add("horizontaldivider-" + _theme)
		.add(_className)
		.toString();

	const _computedComponentInsetRightClassName = new StringBuilder()
		.add("horizontaldivider-inset-right")
		.add("horizontaldivider-inset-right-" + _theme)
		.toString();

	const _computedComponentBarClassName = new StringBuilder()
		.add("horizontaldivider-bar")
		.add("horizontaldivider-bar-" + _theme)
		.toString();

	const _computedComponentInsetLeftClassName = new StringBuilder()
		.add("horizontaldivider-inset-left")
		.add("horizontaldivider-inset-left-" + _theme)
		.toString();

	return (
		<div id={_id} className={_computedComponentClassName}>
			{(_inset == "right" || _inset == "center") && (
				<div
					className={_computedComponentInsetRightClassName}
					style={{
						height: _computedHeight,
						width: _computedInsetRightWidth,
						backgroundColor: _computedInsetColor,
					}}></div>
			)}

			<div
				className={_computedComponentBarClassName}
				style={{
					width: _computedWidth,
					height: _computedHeight,
				}}></div>

			{(_inset == "left" || _inset == "center") && (
				<div
					className={_computedComponentInsetLeftClassName}
					style={{
						height: _computedHeight,
						width: _computedInsetLeftWidth,
						backgroundColor: _computedInsetColor,
					}}></div>
			)}
		</div>
	);
};

export default HorizontalDivider;
