var dispText = '';

var addNumber = function(ele){
  dispText += getInnerText(ele);
  setDisplayAsFloat(dispText);
}

var callback = function(){
  switch(getInnerText(this)){
	//.
	case '.':
	  if(dispText.indexOf('.')==-1)
		addNumber(this);

	  break;

	//MC
	case 'MC':
	  dispText = '';

	  break;

	//M+
	case 'M+':

	  break;

	//M-
	case 'M-':

	  break;

	//MR
	case 'MR':

	  break;

	//C
	case 'C':

	  break;

	//+/-
	case '+/-':

	  break;

	///
	case '/':

	  break;

	//*
	case '*':

	  break;

	//+
	case '+':

	  break;

	//-
	case '-':

	  break;

	//=
	case '=':

	  break;

	//NUMBERS
	default:
	  addNumber(this);
  }
}

var load = function(){
  display = getDisplayElem();//'var' = local

  var btns = document.getElementsByClassName('button');
  var len = btns.length;

  for(var i=0;i<len;i++)
	addEvent(btns[i],'click',callback);
}

addEvent(window,'load',load);