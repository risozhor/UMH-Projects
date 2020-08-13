(function (w,d,undefined){
if(typeof w.MTr!='undefined')return false;
if(typeof w.MT_DEV==undefined)w.MT_DEV=0;
MeTr = function(divName, options)
{
	if (this instanceof MeTr){
		var div=null,place=this;
		if (typeof divName === "string"){
			div = d.getElementById(divName);
		} else if (divName) {
			div = divName;
			divName = div.id;
		} else
			return MeTr.dbg('no place id="'+divName+'"');
		if (MeTr.places[divName])
			return MeTr.places[divName];
		if (options.test)
			MT_DEV = 1;
		MeTr.merge(place, {div:div,options:{d:divName},loaded:0});
		place.init();
		if (options.keyword)
			MeTr.options.keyword = escape(options.keyword);
		MeTr.merge(place.options, MeTr.options, options);
		MeTr.places[divName] = place;
		if (!options.nocall)
			place.load();
		return place;
	} else {
		if (MeTr.places[divName])
			return MeTr.places[divName];
		else
			MeTr.dbg('no place id="'+divName+'"');
	}
}
MeTr.isset=function(t){
return typeof t!='undefined';
}
MeTr.prototype = {
	load: function(){
		if (!this.div)
			return this.dbg('no place id="'+this.options.d+'"');
		var str=MeTr.host+'s?v3',vars={s:'site',p:'d',f:'format',m:'number',u:'user',w:'keyword',n:'skip',d:'doubt',r:'rnd',c:'cookie',l:'log'}, row=this.options,f=row.format;
		if (!row.skip)
			row.skip = MTr.skip;
		MTr.skip+=row.number||3;
		if (this.loaded)
			row.rnd = Math.round(Math.random()*100000000);

		for(i in vars)if(row[vars[i]])str+='&'+i+row[vars[i]];
		MTr.loadEl('SCRIPT', {async:"async", charset:"windows-1251", src:str});
		this.loaded = 1;
		this.dbg('Loading ' + this.div.id);
	},
	init: function(){
		if (this.div)
			this.div.innerHTML='';
		MeTr.merge(this, {bottomVisible:false,nurls:[],posFunc:null});
	},
	getPosition: function(elem){
		var top  = 0;
		while (elem.offsetParent){
			top += elem.offsetTop;
			elem = elem.offsetParent;
		}
		return top + elem.offsetTop;
	},
	getBottomPos: function(){
		var mt = this;
		if(mt.bottomVisible)
			return false;
		var WH = 0,clientHeight = 0;
		if (w.innerWidth) {
			WH = (clientHeight = w.innerHeight)+w.pageYOffset;
		} else if (d.documentElement && d.documentElement.clientWidth) {
			WH = (clientHeight = d.documentElement.clientHeight)+d.documentElement.scrollTop;
		} else if (d.body) {
			WH = (clientHeight = d.body.clientHeight)+d.body.scrollTop;
		}
		mt.startPos = mt.getPosition(mt.div);
		if ((WH >= mt.startPos) && ((WH-clientHeight)<=(mt.startPos+mt.div.clientHeight))){
			mt.bottomVisible = true;
			(new Image()).src=this.url;
			mt.countNURL();
			if (mt.posFunc){
				mt.delEvent(window, 'scroll', mt.posFunc);
				mt.delEvent(window, 'resize', mt.posFunc);
			}
			mt.imgArr = mt.div.getElementsByTagName('img');
			for (var i=0, s='';i< mt.imgArr.length;i++) {
				if (s = mt.imgArr[i].getAttribute('data-src')){
					mt.imgArr[i].src=s;
					mt.imgArr[i].removeAttribute('data-src');
				}
			}
			//mt.dbg('VISIBLE '+mt.div.id+' WH '+WH+' clientHeight '+clientHeight + 'sp '+ mt.startPos+' clH '+mt.div.clientHeight);
		}
	},
	countNURL: function(nurl){
		if (nurl=='')
			return false;
		if (this.bottomVisible) {
			while (this.nurls.length)
				(new Image()).src = this.nurls.pop();
		}
		else
			this.nurls.push(nurl);
	},
	commonStyle: function(){
		if(MTr.isCommonStyle)
			return '';
		MTr.isCommonStyle = 1;
		var e='.'+MTr.className,
		css = e+'{margin:auto;z-index:1}'+e+' a{line-height:1.1!important;}'+e+','+e+'::after,'+e+'::before{box-sizing:content-box!important;}'+e+'.img-top{text-align:center}'+e+'.img-left,'+e+'.img-right{text-align:left}'+e+'.inner{position:relative}'+e+'.pop-in{position:absolute}'+e+'.T,'+e+' .prt.T{top:0}'+e+'.B,'+e+' .prt.B{bottom:0}'+e+'.L,'+e+' .prt.L{left:0}'+e+'.R,'+e+' .prt.R{right:0}'+e+'.hor{width:100%}'+e+'.ver{height:100%}'+e+' table{width:100%;border-collapse: initial!important;cursor:pointer}'+e+' td{vertical-align:top!important;position: relative;}'+e+' .mt-hdr,'+e+' .mt-txt{display:block;line-height:0.8!important}'
+e+' .mt-hdr a,'+e+' .mt-txt a{border-style:none!important}'+e+' .mt-img{position:relative;height:auto;display:inline-block;z-index:10;overflow: hidden}'+e+' .mt-img:hover{z-index:15}'+e+'.img-left .mt-img{float:left}'+e+'.img-right .mt-img{float:right}'+e+' .mt-img img{width:100%;height:auto;}'+
e+' .mt-btn{display:inline-block;float:none;position:absolute;white-space:nowrap;bottom:3px}'+e+' .prt{position:absolute;z-index:11}'+e+' .prt .prt_title{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAqCAYAAABMW14yAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwtJREFUeNrsmzFMU1EUhm8NTp1tnYx2NiWuAosMIo40QStamjahiwwoUxMJJh1lwKUkhVKBIklpUJHWAUUjMLk0znUgLHXD1EWT6t/E2NR7bu+D+zDtO9/Y+9pe+t/3n7/nUJcQoiY6kMMLF9tin2cEwwKwAMx/o6v5gVpNvyRUKhXh9Xpt2VixUBDXBwa0r3e5XFrXnXu9JM5e7j3VD/nH54/i68275u8Aj8cjHkxMGN9wf/81Sx++oy3oXihkfFPBYJBrgC5+v18EhoaMbmp4+BYLYIVoNGpsQ4+np4Xb7WYBrAC/9vkuGdnQnZERZ6cgFeVy+fcH7ZOuxeNxEYmc7E6IRiLk61erVSN3BpVGrCYmVbKx7Q7Y2XlXj552+XYgECDXCltbbEFgNZuVPo7TCf+2I3q+KRbF0bcjFgDMPp21xb9jYzFyLZVKcRH+Wwe+1E+kDPg3fNwqKOA3Bgela6VSSeTW11kA3RMZDoctv95oaJQssC82NjiGNoMTiUQk42pPT93PrTAWk9sPCv6jqSkWQMbK8vKx/FwWPdFTkrG5+Yq/iFHgZCKby4Cf634xU1lWlkhcLECLbA4/H78/rhU9YVlU9NzefssCqEjOJcm12xodzcmHk3SdyeUc0Yo4kQA4oXu7u9K1VrMCWFRvXx/Z8kjNz7MAOuTzeXJNNSuARVHRU1XgWYAmnszMkP0h1ayAsigU9k6PnkYFAKuKtCKbFcCaqOi5tvZcOAkjAqj6Q7JZgcqanBA9jQug6g8BzAoaoyesycnR07gAQNUfapwVcPS0SQBVf+jPrEAVPVHInRI9bRGgVXzErABWREXPuWRSOBGjAqj6Q5gVUGNLPGcxs8gCmEA1u6VOP56DQs4CGEDVHzL5HBaAADESY0Rd0EtyWvS0VQDwLJPRvjadTgsnY4sAqv4QR89TEADojBOdGj0b+edfExcW6BO5v7ev/cKJRKLlNVaip5X3NsX3lyui69MH6drPwwMj74GflfCvJDvRghgWoG1qwPtO/MMOrpzvbod9/hJgAJdIGMi/wvmOAAAAAElFTkSuQmCC);margin:0;background-repeat:no-repeat;background-size:contain;content:"";display:inline-block;height:10px;line-height:10px;width:23px;border-top:1px solid #000}';
    style = d.createElement('style');
		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(d.createTextNode(css));
		}
		MTr.head.appendChild(style);
	},
	normDist: function(pixels, delta){
		if (typeof(pixels)=='string' && (pixels.indexOf('%') != -1)) {
			return pixels;
		} else
			return (parseInt(pixels) + parseInt(delta)) + 'px';
	},
	calcImgWidth: function(s){
		s.imgWidth = Math.round((s.height / s.vertNum)-(s.borderWidth+s.imgBordWidth+s.imgMargin)*2);
		if (s.imgWidth < 50) {
			s.imgWidth = 82;
			alert('h ' + s.height + 'bW '+s.borderWidth +'ibW ' +s.imgBordWidth+' iM'+ s.imgMargin);
		}
		if (s.imgWidth > 200) {
			s.imgWidth = 200;
		}
		return s.imgWidth;
	},
	teaserCSS: function(s){
		var e='\n.mt'+this.div.id+'.'+MTr.className,add='';
		s.trHeight=Math.floor((s.height-s.borderWidth*2 - s.infSpacVert*2)/s.vertNum);
		if (s.vertNum>1) {
			s.trHeight--;
		}
		var btnPos = '';
		if (s.imgPos!='img-top'){
			this.calcImgWidth(s);
		} else {
			btnPos = 'left:50%;-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);-o-transform:translateX(-50%);transform:r translateX(-50%);';
		}
		this.commonStyle();
		return '<style>'
+e+'{width:'+this.normDist(s.width,-2*s.borderWidth)+';height:'+this.normDist(s.height,-2*s.borderWidth)+';background-color:'+s.bgCol+';'+this.makeBorder(s,'border')+'}'
+e+':hover{background-color:'+s.bgHCol+'}'
+e+' table{border-spacing:'+s.infSpacHor+'px '+s.infSpacVert+'px}'
+e+' tr{height:'+s.trHeight+'px;}'
+e+' td{background-color:'+s.infBackColor+';'+this.makeBorder(s,'infBord')+';padding:'+s.infMargin+'px;text-align:'+s.infAlign+'!important;'+(s.horizNum>1 ? 'width:'+Math.round(100/s.horizNum)+'%':'')+'}'
+e+' td:hover{background-color:'+s.infBackHoverColor+'}'
+e+' .mt-img{width:'+s.imgWidth+'px;height:'+s.imgWidth+'px;'+this.makeBorder(s,'imgBord')+';background-color: #ffffff}'
+e+'.img-top .mt-img{margin-bottom:'+s.imgMargin+'px}'
+e+'.img-left .mt-img{margin-right:'+s.imgMargin+'px}'
+e+'.img-right .mt-img{margin-left:'+s.imgMargin+'px}'
+e+'.img-top .mt-btn,'
+e+'.img-left .mt-btn,'
+e+'.img-right .mt-btn{margin-top:'+s.imgMargin+'px}'
+e+' .mt-img:hover{width:'+(s.imgWidth + parseInt(s.imgHoverWidth))+ 'px;}'
+e+' .mt-hdr a{font-family:'+s.nameFont+';font-size:'+s.nameSize+'px;color:'+s.nameColor+';'+this.makeUIB(s.nameUIB)+'}'
+e+' .mt-hdr a:hover{font-size:'+s.nameHoverSize+'px;color:#e00;font-weight:normal;'+this.makeUIB(s.nameHoverUIB)+'}'
+e+' .mt-txt a{font-family:'+s.descrFont+';font-size:'+s.descrSize+'px;color:'+s.descrColor+';'+this.makeUIB(s.descrUIB)+'}'
+e+' .mt-txt a:hover{font-size:'+s.descrHoverSize+'px;color:#e00;'+this.makeUIB(s.descrHoverUIB)+'}'
+e+' .mt-btn{background-color:'+s.buttonBackColor+';padding:4px 8px;font-size:'+s.buttonSize+'px;'+btnPos+'}'
+e+' .mt-btn:hover{background-color:'+s.buttonBackHoverColor+';font-size:'+s.buttonHoverSize+'px}'
+e+' .mt-btn a{color:'+s.buttonTextColor+';font-family:'+s.buttonFont+';'+this.makeUIB(s.buttonUIB)+'}'
+e+' .mt-btn a:hover{color:'+s.buttonTextHoverColor+';'+this.makeUIB(s.buttonHoverUIB)+'}'+
'</style>';
	}
	,
	makeBorder: function(s,name){
		return typeof(s[name+'Width'])=='undefined' ||s[name+'Width']==0?'':'border-width:'+s[name+'Width']+'px;border-color:'+s[name+'Color']+';border-style:'+s[name+'Type']+';';
	},
	makeUIB: function(uib){
		return typeof(uib)=='undefined'?'font-weight:normal;text-decoration:none;font-style:normal;':'font-weight:'+(uib&4?'bold':'none')+';text-decoration:'+(uib&1?'underline':'none')+';font-style:'+(uib&2?'italic':'none')+';';
	},
	teaserReady: function(s,host,id,uid,ads,div,format,partner){
		var str = '', mt = this, num = 0;
		this.init();
		this.div.className = MTr.className + ' inner' +' '+ s.imgPos + ' mt'+this.div.id;
		if (s.partner) {
			str += '<div class="prt ' + s.partnerClass+'"><a target="_blank" href="http://mediatraffic.com.ua/?parentID=' + partner + '" class="prt_title"></a></div>';
		}
		for (j = 1 ;j <= s.vertNum; j++) {
			str += '<tr>';
			for (i = 1 ;i <= s.horizNum; i++) {
				row = ads[num++];
				if (typeof row=='undefined')
					break;
				var click = '<a onclick="MTr.click(this, \'' + (typeof row.url!='undefined'?row.url:host + 'c?s' + id +'&' + uid + '&a' + row.id +'&f'+format) + '\')" target="_blank"'+(typeof mt.options.clickTrack!='undefined'?' data-track="'+mt.options.clickTrack+'"':'')+'>';
				if (typeof row.nurl!='undefined')
					mt.countNURL(row.nurl);
				str += '<td>';
				str += '<div class="mt-img">'+click+'<img src="" data-src="' + row.img.replace(/uho\/img\/\d+/,'mediatraffic.com.ua/ad') + '" /></div>';
				str += '<div class="mt-hdr">'+click+row.text+'</a></div>';
				if (s.showDescr)
					str += '<div class="mt-txt">'+click+row.text1+'</a></div>';
				if (s.actionButton)
					str += '<div class="mt-btn">'+click+''+(row.price?row.price:'\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435')+'</a></div>';
				str += '</td>';
			}
			str += '</tr>';
		}
		this.div.innerHTML = '<table>' + str + '</table>'+this.teaserCSS(s);
		if (uid)
			mt.url = host + 'v?s' + id +'&' + uid+'&f'+format;
		mt.getBottomPos();
		if (!mt.bottomVisible) {
			mt.posFunc = function(){mt.getBottomPos()};
			mt.addEvent(window, 'scroll', mt.posFunc);
			mt.addEvent(window, 'resize', mt.posFunc);
		}
		mt.loaded = 2;
	},
	addStyle: function(style, name, elem){
		if (MTr.isset(this.options[elem])) {
			return (style?'' : ' style="') + name + ':#' + this.options[elem] + ';'+(style?'':'"');
		}
		return '';
	},
	addEvent: function(object, eventType, func){
		object[/*@cc_on !@*/0 ? 'attachEvent' : 'addEventListener'](/*@cc_on 'on' + @*/eventType, func, false);
	},
	delEvent: function(object, eventType, func){
		object[/*@cc_on !@*/0 ? 'detachEvent' : 'removeEventListener'](/*@cc_on 'on' + @*/eventType, func, false);
	}
}
MeTr.prototype.dbg=MeTr.dbg=function(str)
{
	if(typeof MT_DEV!='undefined' && MT_DEV)if(w.console)w.console.log(MeTr.product + ': '+str);
}

MeTr.merge = function()
{
	var options, name, copy, target = arguments[0] || {};
	for (i = 1 ; i < arguments.length; i++ )
		if ((options = arguments[i]) != null )
			for (name in options )
				if (options.hasOwnProperty(name) && options[name] !== undefined)
					target[name] = options[name];
	return target;
}
MeTr.loadEl = function(el, a)
{
	if (!MeTr.head)
		return;
	var f=d.createElement(el);
	for (i in a)
		f.setAttribute(i, a[i]);
	MeTr.head.appendChild(f);
}
MeTr.click = function(obj,str)
{
	if (!obj.href||obj.href==w.location.href)
		obj.href = str;
	if (obj.getAttribute('data-track')){
		(new Image()).src=obj.getAttribute('data-track');
		obj.setAttribute('data-track', '');
	}
	return true;
}

MeTr.merge(MeTr, {
	product: 'MeTr',
	version: 2.05,
	day: (new Date()).getDay(),
	places:{},
	options: {rnd: Math.round(Math.random()*100000000),nocall:0,tag:'DIV',format:0,userStatus:0,number:0,site:0,cookie:0},
	host:typeof MT_DEV!='undefined'&&MT_DEV?'//t.banner.sania.tt/':'//t.holder.com.ua/',
	isDomReady:false,
	skip:0,
	isCommonStyle:0,
	className: 'mtr3'
});

if (!d.cookie)d.cookie="b=b; path=/";
if (d.cookie)MeTr.options.cookie = 1;
MeTr.head=d.getElementsByTagName("head")[0];
MeTr.dbg('start v.'+MeTr.version);
if (typeof window==="object" && typeof w.document==="object" )
	w.MTr = MeTr;
})(window, document);
