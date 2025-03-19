import React, { useState } from "react";
import useDarkSide from "./useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "dark" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<div className="bg-gray-500 rounded-lg p-2 dark:bg-gray-800">
				<DarkModeSwitch className=" dark:text-white "
					checked={darkSide}
					onChange={toggleDarkMode}
					size={25}
				/>
			</div>
		</>
	);
}