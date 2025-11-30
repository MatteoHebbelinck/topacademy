import { storyblokEditable } from "@storyblok/react";
import React from "react";
import PropTypes from "prop-types";

export default function Colorcode({ blok }) {
	return (
		<div {...storyblokEditable(blok)}>
			{/* Output is optional – meestal toon je niets.
			    Het blok wordt vooral gebruikt om een kleurwaarde op te halen. */}
			<span>{blok.title}</span>
		</div>
	);
}

Colorcode.propTypes = {
	blok: PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired
};
