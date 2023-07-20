/*
The code imports required modules and components from various files to use in the
Fab component. The main component is defined as a functional component named Fab.
It takes in several props representing the button's configuration and content.
The component uses the React useState hook to handle some state variables,
setting default values for certain props if they are not provided.
The useRef hook is used to create references to the outer button element (boxRef)
and the inner circle span element (innerCircleRef). These references are later
used to apply the pulsating effect. The component retrieves the preferred theme
from local storage or uses a default theme and applies appropriate CSS classes 
to style the button accordingly. The useEffect hook is used to add and remove an
event listener to the button's "mousemove" event. This listener calculates the
cursor's position within the button and moves the inner circle accordingly to
create the pulsating effect. The component uses StringBuilder utility to create
a string representing the CSS class names for the button based on various
configurations, such as size, configuration (color scheme), and theme. The JSX
code renders the Fab button inside a div container. Inside the button, it
displays an Icon component, representing the button's icon, and a <span>
element with the class "fab-inner-circle" to create the pulsating effect.
The component renders a Typography component below the button to display the
children prop, which can be used to provide a label for the Fab button.
*/

import React, {useState, useEffect, useRef} from "react";
import {IFabProps} from "./IFabProps";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import {StringBuilder} from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";

const Fab: React.FC<IFabProps> = ({
	id,
	className,
	onClick,
	configuration,
	size,
	iconName,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	children,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "surface");
	const [_iconName] = useState(iconName || "edit");
	const [_size] = useState(size || "small");
	const boxRef = useRef<HTMLButtonElement>(null);
	const innerCircleRef = useRef<HTMLSpanElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	useEffect(() => {
		const box = boxRef.current;
		const innerCircle = innerCircleRef.current;

		const handleMouseMove = (e: MouseEvent) => {
			if (innerCircle && box) {
				const boxRect = box.getBoundingClientRect();
				const offsetX = e.clientX - boxRect.left;
				const offsetY = e.clientY - boxRect.top;
				innerCircle.style.left = `${offsetX / 10}rem`;
				innerCircle.style.top = `${offsetY / 10}rem`;
			}
		};

		if (box && innerCircle) {
			box.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (box && innerCircle) {
				box.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [boxRef, innerCircleRef]);

	const _computedComponentClassName = new StringBuilder()
		.add("fab")
		.add("fab-" + _size)
		.add("fab-" + _config)
		.add("fab-" + _theme)
		.add(_className)
		.toString();

	return (
		<div className="fab-container">
			<button
				id={_id}
				className={_computedComponentClassName}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				ref={boxRef}>
				<Icon>{_iconName}</Icon>
				<span className="fab-inner-circle" ref={innerCircleRef}></span>
			</button>
			<Typography variant="text-label-medium">{children}</Typography>
		</div>
	);
};

export default Fab;
