/*
The interface "INavigationRailProps" extends the "IComponentProps" interface
from the "../Component/IComponentProps" module, inheriting its properties.
The Navigation Rail is a vertical navigation menu typically found on the side
of a web page or application. The interface defines optional "icons" and "fab"
(Floating Action Button) properties, which allow adding icon-based navigation
options and a customizable action button respectively. Each "icon" in the "icons"
array can have a name, an optional label for accessibility, a configuration for
styling, and an optional badge with a configuration and a numeric value.
The "onClick" property for both "icons" and "fab" allows specifying the functions
to be executed when the corresponding element is clicked.
*/

import { IComponentProps } from "../Component/IComponentProps";

export interface INavigationRailProps extends IComponentProps {
	icons?: {
		name: string;
		label?: string;
		configuration?: string;
		badge?: {
			configuration: string;
			value?: number;
		};
		onClick?: () => void;
	}[];
	fab?: {
		onClick?: () => void;
		fabIconName?: string;
		label?: string;
	};
}
