import React from 'react';

const Button = () => {
	return (
		<button {...props} className={'button ' + props.className}></button>
	)
}

export default Button;