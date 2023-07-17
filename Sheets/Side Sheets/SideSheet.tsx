import React, {useState, useRef} from "react";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import {StringBuilder} from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import {ISideSheetProps} from "./ISideSheetProps";
import Button from "../../Button/Button";
import {toggleSideSheet} from "../../Gizmos/Modals";
import IconButton from "../../IconButton/IconButton";

const SideSheet: React.FC<ISideSheetProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onMouseDown,
	onMouseUp,
	title,
	trailingIcon,
	leadingIcon,
	contents,
	buttons,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_isActive, setisActive] = useState(false);
	const [_title] = useState(title || "Title");
	const [_buttons] = useState(buttons || undefined);
	const [_showActions] = useState(!!_buttons);
	const [_leadingIcon] = useState(leadingIcon || undefined);
	const [_trailingIcon] = useState(trailingIcon || undefined);
	const [_contents] = useState(contents || undefined);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const sideSheetRef = useRef<HTMLDivElement>(null);

	let _computedComponentClassName = new StringBuilder()
		.add("side-sheet")
		.add("side-sheet-" + _theme)
		.add(_className)
		.toString();

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const {clientX} = event;
		const sideSheetRect = sideSheetRef.current?.getBoundingClientRect();
		const sideSheetLeft = sideSheetRect?.left || 0;
		const sideSheetWidth = sideSheetRect?.width || 0;
		const horizontalPercentage =
			((clientX - sideSheetLeft) / sideSheetWidth) * 100;
		if (horizontalPercentage < 7) {
			toggleSideSheet(sideSheetRef, _isActive, setisActive);
		}
	};

	const _actionButtons = _showActions && (
		<div className="dialog-actions">
			{_buttons?.map((button, index) => (
				<Button key={index} onClick={button.onClick} configuration={"filled"}>
					{button.label || "Action " + index}
				</Button>
			))}
		</div>
	);

	return (
		<div
			ref={sideSheetRef}
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onClick={handleClick}>
			{_isActive && <Icon className="arrow-on-side-sheet">arrow_right</Icon>}
			{!_isActive && <Icon className="arrow-on-side-sheet">arrow_left</Icon>}
			<div className="side-sheet-header">
				{_leadingIcon && (
					<IconButton onClick={_leadingIcon.onClick}>
						{_leadingIcon.name}
					</IconButton>
				)}
				<Typography variant="text-title-large" className="title-on-side-sheet">
					{_title}
				</Typography>
				{_trailingIcon && (
					<IconButton onClick={_trailingIcon.onClick}>
						{_trailingIcon.name}
					</IconButton>
				)}
			</div>
			<div className="side-sheet-content">{_contents}</div>
			<div className="side-sheet-actions">{_actionButtons}</div>
		</div>
	);
};

export default SideSheet;
