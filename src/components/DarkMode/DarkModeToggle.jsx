import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function DarkModeToggle() {
	const [currentTheme, setTheme] = useState(getInitialTheme());
    
	//render when value chnage ..
	useEffect(() => {
		applyTheme();
	}, [currentTheme]);

	// get default theme value //
	function getInitialTheme() {
		let userTheme = null;
		let systemTheme = true;

		if (typeof window !== 'undefined' && window.localStorage) {
			userTheme = localStorage.getItem('theme');
			systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		return userTheme || (systemTheme ? 'dark' : 'light');
	}

	// apply theme //
	function applyTheme() {
		if (currentTheme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}

	//change theme //
	function toggleTheme() {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}

	return (
		<>
			{currentTheme === 'dark' ? (
				<Sun className="h-10 w-" onClick={toggleTheme} />
			) : (
				<Moon className="h-12 w-5" onClick={toggleTheme} />
			)}
		</>
	);
}

export default DarkModeToggle;