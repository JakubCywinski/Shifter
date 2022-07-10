import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	/* Scrollbar */
	*::-webkit-scrollbar {
		width: 8px;
	}
	
	*::-webkit-scrollbar-track {
		background: #f4f4f4;
	}
	
	*::-webkit-scrollbar-thumb {
		background-color: #f4f4f4;
		border-radius: 0px;
	}
	*::-webkit-scrollbar-thumb:active {
		background-color: red;
	}
	
	/* Selection */
	::-moz-selection {
		background-color: #f4f4f4;
		color: #121212;
	}
	
	::selection {
		background-color: red;
		color: #121212;
	}
	
	/* variables */
	:root {
	/* Font sizes propeties */
		--step--2: clamp(0.61rem, 0.56rem + 0.23vw, 0.84rem);
		--step--1: clamp(0.73rem, 0.67rem + 0.32vw, 1.05rem);
		--step-0: clamp(0.88rem, 0.79rem + 0.44vw, 1.31rem);
		--step-1: clamp(1.05rem, 0.93rem + 0.59vw, 1.64rem);
		--step-2: clamp(1.26rem, 1.1rem + 0.79vw, 2.05rem);
		--step-3: clamp(1.51rem, 1.3rem + 1.05vw, 2.56rem);
		--step-4: clamp(1.81rem, 1.54rem + 1.39vw, 3.2rem);
		--step-5: clamp(2.18rem, 1.81rem + 1.83vw, 4.01rem);
		--step-6: clamp(4.30rem, 3.37rem + 4.64vw, 8.94rem);
	}
	
	/* Reset styles */
	
	html {
		font-size: 16px;
		scroll-behavior: smooth;
	}
	
	body {
		height: 100vh;
		scrollbar-width: auto;
		scrollbar-color: #f4f4f4;
		font-family: -apple-system, BlinkMacSystemFont, 'Quicksand', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	/* Global classes */
	.headline-xl {
		font-size: var(--step-6);
	}
	
	.headline {
		font-size: var(--step-4);
	}
	
	.subtitle {
		font-size: var(--step-2);
	}
	
	.body {
		font-size: var(--step-0);
	}
	
	.body-sm {
		font-size: var(--step--1);
	}
	
	.caption {
		font-size: var(--step--2);
	}
`;
