/*
id: The unique identifier for the card element. className: Additional custom
CSS class names for the card. configuration: The configuration style of the
card (e.g., "outlined"). initial: The initial character displayed as the
monogram (default: "A"). header: The main header text of the card
(default: "Header"). subhead: The subhead text of the card (default: "Subhead").
imageSrc: The source URL for the image displayed in the card (default: 
default-media-small.png"). The component uses React hooks to manage its state
for the props and also handles the theme based on the user's preference or
system setting. The rendered card's class name is dynamically generated based
on the provided props, configuration, and theme, and it will have the following
classes: "card": General card styling. "horizontal-card": Specific styling for
a horizontal card layout. "horizontal-card-[configuration]": Styling specific
to the chosen configuration. "horizontal-card-[theme]": Styling specific to
the chosen theme (retrieved from localStorage or using the preferred scheme).
Additional custom CSS class names provided via "className" prop.
The card's header section consists of a monogram, header text, and subhead text,
all stylized with Typography components. The monogram displays the first
character of the "initial" prop or "A" if not provided. The header and subhead
text are set to default values if not provided. The card's image section displays
the image provided via the "imageSrc" prop.
*/

import {useState} from "react";
import {StringBuilder} from "../../Gizmos/StringBuilder";
import {getPreferredScheme} from "../../Gizmos/Themeing";
import Typography from "../../Typography/Typography";
import {IHorizontalCardProps} from "./IHorizontalCardProps";
import React from "react";

const HorizontalCard: React.FC<IHorizontalCardProps> = ({
	id,
	className,
	configuration,
	initial,
	header,
	subhead,
	imageSrc,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "outlined");
	const [_initial] = useState(initial?.charAt(0) || "A");
	const [_header] = useState(header || "Header");
	const [_subhead] = useState(subhead || "Subhead");
	const [_imageSrc] = useState(imageSrc || "default-media-small.png");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedComponentClassName = new StringBuilder()
		.add("card")
		.add("horizontal-card")
		.add("horizontal-card-" + _config)
		.add("horizontal-card-" + _theme)
		.add(_className)
		.toString();

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="horizontal-card-header">
				<div className="horizontal-card-header-content">
					<div className="horizontal-card-header-content-monogram">
						<Typography
							variant="text-title-medium"
							className={
								"horizontal-card-header-content-monogram-initial horizontal-card-header-content-monogram-initial-" +
								_theme
							}>
							{_initial}
						</Typography>
					</div>
					<div className="horizontal-card-header-content-text">
						<Typography
							variant="text-title-medium"
							className="horizontal-card-header-content-text-header">
							{_header}
						</Typography>
						<Typography
							variant="text-body-medium"
							className="horizontal-card-header-content-text-subhead">
							{_subhead}
						</Typography>
					</div>
				</div>
				<div className="horizontal-card-header-media">
					<img src={_imageSrc}></img>
				</div>
			</div>
		</div>
	);
};

export default HorizontalCard;
