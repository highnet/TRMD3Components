import React, {useEffect, useRef, useState} from "react";
import {getPreferredScheme} from "../Gizmos/Themeing";
import {StringBuilder} from "../Gizmos/StringBuilder";
import {ISliderProps} from "./ISliderProps";
import Typography from "../Typography/Typography";

const Slider: React.FC<ISliderProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	min,
	max,
	value,
	step,
	onValueChange,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_min] = useState(min || 0);
	const [_max] = useState(max || 100);
	const [_value, setValue] = useState(value || 50);
	const [_thumbPosition, setThumbPosition] = useState("0rem");
	const [_step] = useState(step || 1);

	const sliderContainerRef = useRef<HTMLDivElement>(null);
	const thumbRef = useRef<HTMLDivElement>(null);
	const thumbOverlayRef = useRef<HTMLDivElement>(null);
	const thumbTooltipRef = useRef<HTMLDivElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("slider")
		.add("slider-" + _theme)
		.add(_className)
		.toString();

	const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onValueChange && onValueChange(parseInt(event.target.value));
		setValue(parseInt(event.target.value));
	};

	const _isDarkTheme = _theme.includes("dark");
	const _primaryColor = _isDarkTheme
		? "var(--m3-sys-dark-primary)"
		: "var(--m3-sys-light-primary)";
	const _surfaceColor = _isDarkTheme
		? "var(--m3-sys-dark-surface-container-highest)"
		: "var(--m3-sys-light-surface-container-highest)";

	const _gradient = `linear-gradient(to right, ${_primaryColor} ${
		((_value - _min) / (_max - _min)) * 100
	}%, ${_surfaceColor} 0%)`;

	useEffect(() => {
		const _newThumbPosition = `${((_value - _min) / (_max - _min)) * 16}rem`;
		setThumbPosition(_newThumbPosition);
	}, [_value, _min, _max]);

	useEffect(() => {
		if (thumbRef.current) {
			thumbRef.current.style.transform = `translateX(${_thumbPosition})`;
		}
	}, [_thumbPosition]);

	useEffect(() => {
		sliderContainerRef.current?.addEventListener(
			"mouseenter",
			handleMouseEnter
		);
		sliderContainerRef.current?.addEventListener(
			"mouseleave",
			handleMouseLeave
		);
		return () => {
			sliderContainerRef.current?.removeEventListener(
				"mouseenter",
				handleMouseEnter
			);
			sliderContainerRef.current?.removeEventListener(
				"mouseleave",
				handleMouseLeave
			);
		};
	}, []);

	const handleMouseEnter = () => {
		thumbRef.current?.classList.add("slider-thumb-active");
		thumbOverlayRef.current?.classList.add("slider-thumb-overlay-active");
		thumbTooltipRef.current?.classList.add("slider-thumb-tooltip-active");
	};

	const handleMouseLeave = () => {
		thumbRef.current?.classList.remove("slider-thumb-active");
		thumbOverlayRef.current?.classList.remove("slider-thumb-overlay-active");
		thumbTooltipRef.current?.classList.remove("slider-thumb-tooltip-active");
	};

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
			className="slider-container"
			ref={sliderContainerRef}>
			<div
				className={"slider-thumb slider-thumb-" + _theme + " slider-thumb-"}
				ref={thumbRef}
				style={{
					transform: `translateX(${_thumbPosition})`,
				}}>
				<div ref={thumbTooltipRef} className="slider-thumb-tooltip">
					<div className={"slider-teardrop slider-teardrop-" + _theme}></div>
					<Typography
						variant="text-label-medium"
						className={"slider-value slider-value-" + _theme}>
						{_value}
					</Typography>
				</div>

				<div
					ref={thumbOverlayRef}
					className={
						"slider-thumb-overlay slider-thumb-overlay-" + _theme
					}></div>
			</div>
			<input
				className={_computedComponentClassName}
				id={_id}
				type="range"
				min={_min}
				max={_max}
				value={_value}
				step={_step}
				onChange={handleValueChange}
				style={{background: _gradient}}></input>
		</div>
	);
};

export default Slider;
