import React from 'react';
import ReactDOM from 'react-dom';
import Xuefei from './Xuefei';
import Tsing from './Tsing';
import Joy from './Joy';
import Quinn from './Quinn';
import Angela from './Angela';
import Chuck from './Chuck';
<<<<<<< HEAD
import Su3 from './Su3';
=======
import Pmc from './Pmc';
>>>>>>> fd525a8370df8f575db7caf9395dccb8c1a1001f
import Yoga from './Yoga';
import Christina from './Christina';
import Mengru from './Mengru';
import './style/index.css';
import $ from 'jquery';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

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
<<<<<<< HEAD
  <Su3/>,
  document.getElementById('Su3')
=======
  <Pmc />,
  document.getElementById('Pmc')
>>>>>>> fd525a8370df8f575db7caf9395dccb8c1a1001f
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
