require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ImgFigure from './ImgFigure';

var imageDatas = require('../data/imageDatas.json');
imageDatas = (function genImageURL(imageDataArr){
	for(var i=0;i<imageDataArr.length;i++){
		var singleImage = imageDataArr[i];
		singleImage.imageURL = require("../images/"+singleImage.fileName);
		imageDataArr[i] = singleImage;
	}
	return imageDataArr;
})(imageDatas);


class AppComponent extends React.Component {	

  Constant:{
    centerPos:{
      left:0,
      right:0
    },
    hPosRange:{
      leftSecX:[0,0],
      rightSecX:[0,0],
      y:[0,0]
    },
    vPosRange:{
      x:[0,0],
      topY:[0,0]
    }
  },

  ComponentDidMount:function(){

  },

  render() {
  	// 用来存放小圆点,图片组件
  	var controllerUnits = [], imgFigures = [];

  	imageDatas.forEach((value, index) =>{
      imgFigures.push(<ImgFigure key={'imgFigures-' + index} data={value}/>);
    });
  	
    return (
      <div className="stage">
        <div className="images">
        	{imgFigures}
       	</div>
       	<div className="controller">
       		{controllerUnits}
       	</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

