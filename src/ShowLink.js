import React from 'react';

const ShowLink = ({active, children, onClick}) => {
	if(active) {
		return <span>{children}</span>
	}

	return (
		<a
			className="ShowLink"
			href="#"
			onClick={(e) => {onClick()}}
		>
			{children}
		</a>
	)
}

export default ShowLink;