require('normalize.css/normalize.css');
import React from 'react';

class ImgFigure extends React.Component {
	render(){
		let { data } = this.props;
		return(
			<figure className="img-figure">
				<img className="img-img" src={data.imageURL} alt={data.title}/>
				<figcaption>
					<h2 className="img-title">{data.title}</h2>
				</figcaption>
			</figure>
		);
	}
};

ImgFigure.defaultProps = {
};

export default ImgFigure;