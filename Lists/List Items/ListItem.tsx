/*
This code defines a React functional component called "ListItem" that represents
a single item in a list. It is designed to be used within a list container like 
the "List" component."title": The title or primary text content for the list item.
"className": A string property to specify additional CSS classes for the list item.
"id": A string property to provide an ID for the list item. "children": The
additional supporting text content for the list item (optional). "onMouseEnter":
A function to handle the mouse enter event on the list item. "onMouseLeave": A
function to handle the mouse leave event on the list item. "onMouseMove": A
function to handle the mouse move event on the list item. "onClick": A function
to handle the click event on the list item. "size": A string property to specify
the size variant of the list item ("1-line", "2-line", or "3-line").
"leadingElement": A string to specify the type of leading element in the list
item ("monogram", "icon", "image-small", "image-big", "checkbox", "radio", 
"switch"). "leadingElementId": A string property to provide an ID for the 
leading element. "showDivider": A boolean property to indicate whether a divider
line should be shown below the list item. "leadingMonogramInitial": A string
property to provide the initial character for the monogram leading element
(optional). "imageSrc": A string property to specify the image source for the
image-based leading elements (optional). "radioButtonGroupName": A string 
property to specify the name of the radio button group (required if 
leadingElement is "radio"). "radioButtonValue": A string property to specify 
the value of the radio button (required if leadingElement is "radio").
"trailingElementId": A string property to provide an ID for the trailing element.
"trailingElement": A string to specify the type of trailing element in the 
list item ("icon", "checkbox"). "iconName": A string property to specify the 
name of the icon to be used in the leading and trailing elements.
"elementSelected": A boolean property to indicate whether the element 
(checkbox, radio, switch) is selected. "checkboxConfiguration": A string to 
specify the configuration of the checkbox element (optional). "onElementChange": 
A function to handle the change event on the element (checkbox, radio, switch).
"onTrailingIconClick": A function to handle the click event on the trailing icon.
Inside the "ListItem" component, various state hooks are used to handle and 
manage the props and their default values. The "ListItem" component applies 
theming based on the preferred theme stored in local storage, using the 
"getPreferredScheme" function from the "../../Gizmos/Themeing" module. A 
StringBuilder object is used to build the final CSS classes for the list item, 
which includes classes for the type of leading element, the size variant, and 
any additional class provided through the "className" prop. Based on the 
"leadingElement" and "trailingElement" props, the component renders different 
leading and trailing elements (monogram, icon, image, checkbox, radio, switch) 
inside the list item. The "ListItem" component also handles mouse movements 
within the list item by positioning an inner circle element.
*/

import React, {useEffect, useState, useRef} from "react";
import {IListItemProps} from "./IlistItemProps";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import {StringBuilder} from "../../Gizmos/StringBuilder";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import Checkbox from "../../Checkbox/Checkbox";
import Switch from "../../Switch/Switch";
import RadioButton from "../../Radio Button/RadioButton";
import IconButton from "../../IconButton/IconButton";

const ListItem: React.FC<IListItemProps> = ({
	title,
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	size,
	leadingElement,
	leadingElementId,
	showDivider,
	leadingMonogramInitial,
	imageSrc,
	radioButtonGroupName,
	radioButtonValue,
	trailingElementId,
	trailingElement,
	iconName,
	elementSelected,
	checkboxConfiguration,
	onElementChange,
	onTrailingIconClick,
	switchIconNameSelected,
	switchIconNameDeselected,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_size] = useState(size || "3-line");
	const [_title] = useState(title || "List Item");
	const [_showDivider] = useState(showDivider || false);
	const [_leadingElement] = useState(leadingElement || undefined);
	const [_trailingElement] = useState(trailingElement || undefined);
	const [_leadingMonogramInitial] = useState(
		leadingMonogramInitial?.charAt(0) || "A"
	);
	const [_leadingIconName] = useState(iconName || "account_circle");
	const [_trailingIconName] = useState(iconName || "chevron_right");
	const [_imageSrc] = useState(imageSrc || "default-media-small.png");
	const boxRef = useRef<HTMLLIElement>(null);
	const innerCircleRef = useRef<HTMLSpanElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedComponentClassName = new StringBuilder()
		.add("list-item")
		.add("list-item-" + _theme)
		.add("list-item-" + _size)
		.add(_showDivider ? "list-item-with-divider" : "")
		.add(_className)
		.toString();

	const _leadingElementComponent = (
		<div className="list-item-leading-element-element">
			{_leadingElement === "monogram" && (
				<div className="list-item-leading-element-monogram">
					<Typography variant="text-title-medium" id={leadingElementId}>
						{_leadingMonogramInitial}
					</Typography>
				</div>
			)}
			{_leadingElement === "icon" && (
				<div className="list-item-leading-element-icon">
					<Icon id={leadingElementId}>{_leadingIconName}</Icon>
				</div>
			)}
			{_leadingElement === "image-small" && (
				<div className="list-item-leading-element-image-small">
					<img id={leadingElementId} src={_imageSrc} />
				</div>
			)}
			{_leadingElement === "image-big" && (
				<div className="list-item-leading-element-image-big">
					<img id={leadingElementId} src={_imageSrc} />
				</div>
			)}
			{_leadingElement === "checkbox" && (
				<div className="list-item-leading-element-checkbox">
					<Checkbox
						id={leadingElementId}
						onChange={onElementChange}
						selected={elementSelected}
						configuration={checkboxConfiguration}
					/>
				</div>
			)}
			{_leadingElement === "radio" && (
				<div className="list-item-leading-element-radio">
					<RadioButton
						id={leadingElementId}
						onChange={onElementChange}
						name={radioButtonGroupName}
						value={radioButtonValue}
						defaultChecked={elementSelected}></RadioButton>
				</div>
			)}
			{_leadingElement === "switch" && (
				<div className="list-item-leading-element-switch">
					<Switch
						id={leadingElementId}
						onChange={onElementChange}
						selected={elementSelected}
						icon={true}
						iconNameSelected={switchIconNameSelected}
						iconNameDeselected={switchIconNameDeselected}></Switch>
				</div>
			)}
		</div>
	);

	const _trailingElementComponent = (
		<div className="list-item-trailing-element-element">
			{_trailingElement === "icon" && (
				<IconButton id={trailingElementId} onClick={onTrailingIconClick}>
					{_trailingIconName}
				</IconButton>
			)}

			{_trailingElement === "checkbox" &&
				(_leadingElement === undefined ||
					_leadingElement === "monogram" ||
					_leadingElement === "icon" ||
					_leadingElement === "image-small" ||
					_leadingElement === "image-big") && (
					<div className="list-item-trailing-element-checkbox">
						<Checkbox
							id={trailingElementId}
							onChange={onElementChange}
							selected={elementSelected}
							configuration={checkboxConfiguration}
						/>
					</div>
				)}
		</div>
	);

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

	return (
		<li
			tabIndex={0}
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
			ref={boxRef}>
			<div className="list-item-state-layer">
				<div className="list-item-leading-element">
					{_leadingElementComponent}
				</div>
				<div className="list-item-content">
					<Typography variant="text-body-large" className="title-on-list-item">
						{_title}
					</Typography>
					{_size !== "1-line" && (
						<Typography
							variant="text-body-medium"
							className="supporting-text-on-list-item">
							{children}
						</Typography>
					)}
				</div>
				<div className="list-item-trailing-element">
					{_trailingElementComponent}
				</div>
			</div>
			<span className="list-item-inner-circle" ref={innerCircleRef}></span>
		</li>
	);
};

export default ListItem;
