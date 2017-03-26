import React from 'react';
import ReactDOM from 'react-dom';
import Xuefei from './Xuefei';
import Tsing from './Tsing';
import Joy from './Joy';
import Quinn from './Quinn';
import Christina from './Christina';
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
  <Christina />,
  document.getElementById('Christina')
);
$('a').hover(function(){
  $(this).find('p').show();
},function(){
  $(this).find('p').hide();
});

$('a').click(function(){
  var title=$(this).parent().attr('id')+".png";
  var target=$(this).find('.profile')[0];

  domtoimage.toBlob(target)
    .then(function (blob) {
      FileSaver.saveAs(blob, title);
    });
});
