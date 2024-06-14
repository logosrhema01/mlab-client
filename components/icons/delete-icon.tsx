import React from "react";
import { IconSvgProps } from "./types";

export const DeleteIcon = ({
	size = 24,
	width,
	height,
	color = "fill-white",
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 512 512"
		width={size || width}
		{...props}
	>
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1}
		>
			<path
				className={color}
				fillRule="evenodd"
				clipRule="evenodd"
				fill="primary"
				d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
			/>
		</g>
	</svg>
);