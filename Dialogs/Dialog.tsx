/*
The code imports required modules and components from various files to use in t
he Dialog component. The main component is defined as a functional component
named Dialog. It takes in various props representing the dialog's configuration
and content. The component uses the React useState hook to handle some state
variables, setting default values for certain props if they are not provided.
The useRef hook is used to create a reference to the dialog element, which is
later used to manipulate the dialog's visibility. The component retrieves the
preferred theme from local storage or uses a default theme and applies appropriate
CSS classes to style the dialog accordingly. If the buttons prop is provided,
the component renders action buttons for the dialog. If showCloseButton is true,
a "Close" button is also added. The useEffect hook is used to add and remove an
event listener to the dialog's close event, allowing the dialog to be
programmatically closed. A StringBuilder utility is used to create a string 
representing the CSS class names for the dialog, based on various configurations.
he JSX code renders the dialog using the <dialog> element. Inside the dialog,
it displays the title, children content, an optional icon, and a divider if
specified. If the configuration is set to "list," it also renders the provided
listComponent.
*/

import React, {useState, useRef, useEffect} from "react";
import {getPreferredScheme} from "../Gizmos/Themeing";
import {StringBuilder} from "../Gizmos/StringBuilder";
import {IDIalogProps} from "./IDialogProps";
import Button from "../Button/Button";
import {closeDialogRef} from "../Gizmos/Modals";
import Typography from "../Typography/Typography";
import HorizontalDivider from "../Dividers/HorizontalDivider/HorizontalDivider";

import Icon from "../Icon/Icon";

const Dialog: React.FC<IDIalogProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	title,
	buttons,
	showCloseButton,
	showDivider,
	configuration,
	listComponent,
	iconName,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_children] = useState(
		children ||
			"A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
	);
	const [_title] = useState(title || "Dialog Title");
	const [_buttons] = useState(buttons || undefined);
	const [_showActions] = useState(!!_buttons);
	const [_showCloseButton] = useState(showCloseButton || false);
	const [_showDivider] = useState(showDivider || false);
	const [_configuration] = useState(configuration || "basic");
	const [_iconName] = useState(iconName || undefined);

	const dialogRef = useRef<HTMLDialogElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const actionButtons = _showActions && (
		<div className="dialog-actions">
			{_buttons?.map((button, index) => (
				<Button
					key={index}
					onClick={button.onClick}
					configuration={button.configuration || "text"}>
					{button.label || "Action " + index}
				</Button>
			))}
			{_showCloseButton && (
				<Button onClick={() => closeDialogRef(dialogRef)} configuration="text">
					Close
				</Button>
			)}
		</div>
	);

	useEffect(() => {
		const handleClose = () => {
			dialogRef.current?.classList.remove("dialog-visible");
		};

		dialogRef.current?.addEventListener("close", handleClose);

		return () => {
			dialogRef.current?.removeEventListener("close", handleClose);
		};
	}, []);

	const _computedComponentClassName = new StringBuilder()
		.add("dialog")
		.add("dialog-" + _theme)
		.add("dialog-" + _configuration)
		.add(_className)
		.toString();

	return (
		<div>
			<dialog
				id={_id}
				className={_computedComponentClassName}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				onClick={onClick}
				ref={dialogRef}>
				<div className="dialog-text-content">
					{_iconName && <Icon className="icon-on-dialog">{_iconName}</Icon>}
					<Typography variant="text-headline-small" className="title-on-dialog">
						{_title}
					</Typography>
					<Typography
						variant="text-body-medium"
						className="supporting-text-on-dialog">
						{_children}
					</Typography>
				</div>
				{_showDivider && (
					<div className="dialog-divider">
						<HorizontalDivider></HorizontalDivider>
					</div>
				)}
				{_configuration === "list" &&
					listComponent &&
					React.cloneElement(listComponent)}
				{actionButtons}
			</dialog>
		</div>
	);
};

export default Dialog;
