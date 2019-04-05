import React from 'react';

export default class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		console.log(this.imageRef.current.clientHeight);
	};

	render() {
		const { alt_description, urls } = this.props.image;
		return (
			<div>
				<img ref={this.imageRef} src={urls.regular} alt={alt_description} />
			</div>
		);
	}
}
