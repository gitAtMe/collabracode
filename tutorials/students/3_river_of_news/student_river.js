var riverCallback = {
  "onsuccess" : function(obj) {

	var items = obj.rss.channel.item;
	var river = document.getElementById('river');

	for(var key in items){
	  var p = document.createElement('p');
	  var h3 = document.createElement('h3');
	  var txt = document.createTextNode(items[key].title);
	  var span = document.createElement('span');

	  h3.appendChild(txt);
	  addEvent(h3,'click',function(){
		var s = this.nextSibling;

		if(s.className=='hidden')
		  s.className = '';
		else
		  s.className = 'hidden';
	  });

	  span.className = 'hidden';
	  span.innerHTML = items[key].description.replace(/&quot;/g,'"');
	  p.appendChild(h3);
	  p.appendChild(span);

	  river.appendChild(p);
//	  log(items[key]);		
	}

//    log("SUCCESS: Loaded rss.json file");
  },
  "onerror" : function(req) {
    log("ERROR: Unable to download rss.json file" + req);
  }
};
