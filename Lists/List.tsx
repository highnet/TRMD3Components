/*
The "List" component takes in various props to customize its behavior and appearance.
Props explained: "className": A string property to specify additional CSS
classes for the "List" component. "id": A string property to provide an ID for
the "List" component. "children": The child elements that will be rendered
within the "List" component, representing the list items. "onMouseEnter": A
function to handle the mouse enter event on the "List" component. "onMouseLeave":
A function to handle the mouse leave event on the "List" component. "onMouseMove":
A function to handle the mouse move event on the "List" component. "onClick":
A function to handle the click event on the "List" component. "height": A number
property representing the height of the "List" component. Inside the "List"
component, the state hook "useState" is used to handle and manage the "className"
and "id" props. The "List" component applies theming based on the preferred
theme stored in local storage, using the "getPreferredScheme" function from the
"../Gizmos/Themeing" module. A StringBuilder object is used to build the final
CSS classes for the "List" component, which includes the "list" class, a class
based on the theme, and any additional class provided through the "className"
prop. The "List" component renders a scrollable div with a fixed height,
containing an unordered list ("<ul>") element. The child elements (list items)
provided through the "children" prop are rendered within this list.
*/

import React, {useState} from "react";
import {getPreferredScheme} from "../Gizmos/Themeing";
import {StringBuilder} from "../Gizmos/StringBuilder";
import {IListProps} from "./IListProps";

const List: React.FC<IListProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	height,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedComponentClassName = new StringBuilder()
		.add("list")
		.add("list-" + _theme)
		.add(_className)
		.toString();

	return (
		<div className="list-scroll" style={{height: height}}>
			<ul
				id={_id}
				className={_computedComponentClassName}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				onClick={onClick}>
				{children}
			</ul>
		</div>
	);
};

export default List;
