import React, {useRef, useState} from "react";
import {getPreferredScheme} from "../Gizmos/Themeing";
import {StringBuilder} from "../Gizmos/StringBuilder";
import {ITooltipProps} from "./ITooltipProps";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

const Tooltip: React.FC<ITooltipProps> = ({
	className,
	id,
	children,
	configuration,
	title,
	buttons,
	triggerComponent,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_children] = useState(
		children ||
			"Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
	);

	const [_title] = useState(title || "Title");
	const [_buttons] = useState(buttons || undefined);
	const [_showActions] = useState(!!_buttons);
	const [_triggerComponent] = useState(triggerComponent || undefined);
	const [_configuration] = useState(
		_triggerComponent ? "plain-multiline" : configuration || "rich"
	);
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const tooltipRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);

	const _computedComponentClassName = new StringBuilder()
		.add("tooltip")
		.add("tooltip-" + _theme)
		.add("tooltip-" + _configuration)
		.add(_showActions ? "tooltip-with-action-buttons" : "")
		.add(
			_configuration === "plain-multiline" ||
				_configuration === "plain-singleline"
				? "tooltip-plain"
				: ""
		)
		.add(_triggerComponent ? "tooltip-with-trigger-component" : "")
		.add(_triggerComponent ? "invisible" : "")
		.add(_className)
		.toString();

	const _actionButtons = _showActions && (
		<div className="tooltip-actions">
			{_buttons?.map((button, index) => (
				<Button key={index} onClick={button.onClick} configuration="text">
					{button.label || "Action"}
				</Button>
			))}
		</div>
	);

	const _titleComponent = _configuration === "rich" && (
		<Typography className="title-on-tooltip" variant="text-title-small">
			{_title}
		</Typography>
	);

	const handleSetTooltipVisible = () => {
		if (tooltipRef.current && window.innerWidth >= 768) {
			tooltipRef.current.classList.toggle("invisible");
			tooltipRef.current.classList.toggle("visible");
		}
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (tooltipRef.current && triggerRef.current) {
			const tooltipWidth = tooltipRef.current.offsetWidth;
			const tooltipHeight = tooltipRef.current.offsetHeight;
			const triggerRect = triggerRef.current.getBoundingClientRect();
			const x =
				event.clientX - triggerRect.left + tooltipWidth > window.innerWidth
					? triggerRect.right - tooltipWidth
					: event.clientX - triggerRect.left;
			const y =
				event.clientY - triggerRect.top + tooltipHeight > window.innerHeight
					? triggerRect.bottom - tooltipHeight
					: event.clientY - triggerRect.top;
			tooltipRef.current.style.transform = `translate(${x}px, ${y}px)`;
		}
	};

	return (
		<div>
			<div id={_id} className={_computedComponentClassName} ref={tooltipRef}>
				<div className="tooltip-content">
					{_titleComponent}
					<Typography
						className="supporting-text-on-tooltip"
						variant={
							_configuration === "plain-multiline" ||
							_configuration === "plain-singleline"
								? "text-body-small"
								: "text-body-medium"
						}>
						{_children}
					</Typography>
				</div>
				{_actionButtons}
			</div>
			<div ref={triggerRef}>
				{_triggerComponent &&
					React.cloneElement(_triggerComponent, {
						onMouseMove: handleMouseMove,
						onMouseEnter: handleSetTooltipVisible,
						onMouseLeave: handleSetTooltipVisible,
					})}
			</div>
		</div>
	);
};

export default Tooltip;
