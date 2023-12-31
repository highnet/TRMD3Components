import React, {useState, Children, useEffect} from "react";
import {StringBuilder} from "../Gizmos/StringBuilder";
import {ISegmentedButtonGroupProps} from "./ISegmentedButtonGroupProps";

const SegmentedButtonGroup: React.FC<ISegmentedButtonGroupProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	children,
	onClick,
	defaultSelectedButtonIndex = -1,
	onSelectedValueChange,
}) => {
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(
		defaultSelectedButtonIndex
	);

	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);

	const handleButtonClick = (index: number) => {
		setSelectedButtonIndex(index);
	};

	const _computedComponentClassName = new StringBuilder()
		.add("segmented-button-group")
		.add(_className)
		.toString();

	const _segmentedButtons = Children.map(children, (child, index) => {
		if (React.isValidElement(child)) {
			let position = "";
			if (index === 0) {
				position = "left";
			} else if (index === children.length - 1) {
				position = "right";
			}
			const newChild = React.cloneElement(child, {
				onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
					child.props.onClick && child.props.onClick(event);
					handleButtonClick(index);
				},
				position: position,
				selected: selectedButtonIndex === index,
			});
			return newChild;
		}
	});

	useEffect(() => {
		if (selectedButtonIndex !== -1) {
			const newValue = children[selectedButtonIndex].props.value;
			onSelectedValueChange && onSelectedValueChange(newValue);
		}
	}, [selectedButtonIndex, children, onSelectedValueChange]);

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}>
			{_segmentedButtons}
		</div>
	);
};

export default SegmentedButtonGroup;
