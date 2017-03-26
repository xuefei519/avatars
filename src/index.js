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

$('a').click(function(){
  var title=$(this).parent().attr('id');
  var target=$(this).find('.profile')[0];
  domtoimage.toPng(target)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          //var w = window.open("");
          //w.document.write(img.outerHTML);

          var url = img.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
          window.open(url);

          /*var link = document.createElement("a");
          link.download = title+".png";
          link.href = img.src;
          link.click();*/
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      })
});
