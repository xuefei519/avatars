import React from 'react';
import ReactDOM from 'react-dom';
import Xuefei from './Xuefei';
import Tsing from './Tsing';
import Joy from './Joy';
import Quinn from './Quinn';
import Angela from './Angela';
import Chuck from './Chuck';
import Su3 from './Su3';
import Pmc from './Pmc';
import Ysy from './Ysy';
import Yozen from './Yozen';
import Yoga from './Yoga';
import Christina from './Christina';
import Mengru from './Mengru';
import AnnieH from './AnnieH';
import Jacob from './Jacob';
import Erin from './Erin';
import Yoyo from './Yoyo';
import Sheryl from './Sheryl';
import Grace from './Grace';
import Yannan from './Yannan';
import './style/index.css';
import $ from 'jquery';

ReactDOM.render(
  <Xuefei />,
  document.getElementById('Xuefei')
);
ReactDOM.render(
  <Tsing />,
  document.getElementById('Tsing')
);
ReactDOM.render(
  <Joy />,
  document.getElementById('Joy')
);
ReactDOM.render(
  <Quinn />,
  document.getElementById('Quinn')
);
ReactDOM.render(
  <Angela />,
  document.getElementById('Angela')
);
ReactDOM.render(
  <Chuck />,
  document.getElementById('Chuck')
);
ReactDOM.render(
  <Su3/>,
  document.getElementById('Su3')
);
ReactDOM.render(
  <Pmc />,
  document.getElementById('Pmc')
);
ReactDOM.render(
  <Yozen />,
  document.getElementById('Yozen')
);
ReactDOM.render(
  <Ysy />,
  document.getElementById('Ysy')
);
ReactDOM.render(
  <Yoga />,
  document.getElementById('Yoga')
);
ReactDOM.render(
  <Christina />,
  document.getElementById('Christina')
);
ReactDOM.render(
  <Mengru />,
  document.getElementById('Mengru')
);
ReactDOM.render(
  <Yannan />,
  document.getElementById('Yannan')
);
ReactDOM.render(
  <Sheryl />,
  document.getElementById('Sheryl')
);
ReactDOM.render(
  <Grace />,
  document.getElementById('Grace')
);
ReactDOM.render(
  <AnnieH />,
  document.getElementById('AnnieH')
);
ReactDOM.render(
  <Yoyo />,
  document.getElementById('Yoyo')
);
ReactDOM.render(
  <Jacob />,
  document.getElementById('Jacob')
);
ReactDOM.render(
  <Erin />,
  document.getElementById('Erin')
);
$('a').hover(function(){
  $(this).find('p').show();
  $(this).find('.deco').show();
  $(this).find('.tohide').hide();
},function(){
  $(this).find('p').hide();
  $(this).find('.deco').hide();
  $(this).find('.tohide').show();
});

/*$('a').click(function(){
  var title=$(this).parent().attr('id')+".png";
  var target=$(this).find('.profile')[0];

  domtoimage.toBlob(target)
    .then(function (blob) {
      FileSaver.saveAs(blob, title);
    });
});*/
