document.write('<style>.dropdown-list {color: #B5B7B9; display: -moz-inline-stack; display: inline-block; zoom:1; *display: inline; _overflow: hidden; cursor: pointer; padding: 4px 12px 4px 4px;	background: url(\'//ui.ill.in.ua/i/dropdown_arrows1.png\') no-repeat right 1px; position: relative;} .dropdown-list:hover {background-color: #464C52;} .dropdown-class .dropdown-list {background: url(\'//ui.ill.in.ua/i/dropdown_arrows1.png\') no-repeat right -32px; background-color: #575D63; color: #B5B7B9;} .f-dropdown {position: absolute; z-index: 9999999; font-size: 11px; display: none; bottom: 28px;} .dropdown-class .f-dropdown {display: block;} .f-dropdown .dropdown-menu-umh,.f-dropdown .dropdown-panel {min-width: 160px; max-width: 360px;	list-style: none; background: #FFF;	border: solid 1px rgba(0, 0, 0, .2); box-shadow: 0 5px 10px rgba(0, 0, 0, .2); overflow: visible; padding: 4px 0; margin: 0;} .f-dropdown .dropdown-panel {padding: 10px;} .f-dropdown.dropdown-tip {margin-top: 8px;} .f-dropdown.dropdown-tip:before {position: absolute; bottom: -6px; left: 9px; content: \'\'; border-left: solid transparent 7px; border-right: solid transparent 7px; border-top: 7px solid #CCC; border-bottom-color: rgba(0, 0, 0, 0.2); display: inline-block;} .f-dropdown.dropdown-tip.dropdown-anchor-right:before {left: auto; right: 9px;} .f-dropdown.dropdown-tip:after {position: absolute; bottom: -5px; left: 10px; content: \'\'; border-left: solid transparent 6px; border-right: solid transparent 6px; border-top: 6px solid #FFF; display: inline-block;} .f-dropdown.dropdown-tip.dropdown-anchor-right:after {left: auto; right: 10px;} .f-dropdown.dropdown-scroll .dropdown-menu-umh, .f-dropdown.dropdown-scroll .dropdown-panel {max-height: 358px; overflow: auto;} .f-dropdown .dropdown-menu-umh LI {list-style: none; padding: 0 0; margin: 0; line-height: 18px;background : none repeat scroll 0 0 transparent !important;} .f-dropdown .dropdown-menu-umh LI > A, .f-dropdown .dropdown-menu-umh LABEL {display: block; color: #555; text-decoration: none; line-height: 16px;	padding: 3px 15px; white-space: nowrap;} .f-dropdown .dropdown-menu-umh LI > A:hover, .f-dropdown .dropdown-menu-umh LABEL:hover {background-color: #0094F5; color: #FFF; cursor: pointer;} #bigmir_footer_iframe {height: 320px;}</style>');
(function(){
	var inf = document.getElementById('siteLinksUmhGroup');
		if(inf)
		{
			inf.innerHTML='<div class="dropdown-list" onclick="$(this).parent().toggleClass(\'dropdown-class\')">Cайты UMHgroup<div id="dropdown-1" class="f-dropdown dropdown-tip">'+
			'<ul class="dropdown-menu-umh">'+
			'<li><a href="http://i.ua"  rel="nofollow" target="_blank">I.ua</a></li>'+
			'<li><a href="http://bigmir.net"  rel="nofollow" target="_blank">bigmir)net</a></li>'+
			'<li><a href="http://korrespondent.net"  rel="nofollow" target="_blank">КорреспонденТ</a></li>'+
			'<li><a href="http://aif.ua"  rel="nofollow" target="_blank">Аргументы и факты в Украине</a></li>'+
			'<li><a href="http://kp.ua"  rel="nofollow" target="_blank">КП в Украине</a></li>'+
			'<li><a href="http://dengi.ua"  rel="nofollow" target="_blank">Деньги.ua</a></li>'+
			'<li><a href="http://football.ua"  rel="nofollow" target="_blank">Football.ua</a></li>'+
			'<li><a href="http://iSport.ua"  rel="nofollow" target="_blank">iSport.ua</a></li>'+
			'<li><a href="http://vgorode.ua"  rel="nofollow" target="_blank">В Городе</a></li>'+
			'<li><a href="http://gloss.ua"  rel="nofollow" target="_blank">Gloss.ua</a></li>'+
			'<li><a href="http://tv.ua"  rel="nofollow" target="_blank">TV.ua</a></li>'+
			'<li><a href="http://afisha.bigmir.net"  rel="nofollow" target="_blank">Afisha.bigmir.net</a></li>'+
			'<li><a href="http://tochka.net"  rel="nofollow" target="_blank">tochka.net</a></li>'+	
			'<li><a href="http://ivona.bigmir.net"  rel="nofollow" target="_blank">Ivona.bigmir.net</a></li>'+
			'<li><a href="http://archidea.com.ua"  rel="nofollow" target="_blank">Архидея</a></li>'+
			'<li><a href="http://uzr.com.ua"  rel="nofollow" target="_blank">За Рулём Украина</a></li>'+
			'<li><a href="http://mport.ua"  rel="nofollow" target="_blank">Mport.ua</a></li>'+
			'<li><a href="http://smak.ua" rel="nofollow" target="_blank">Smak.ua</a></li>'+	
			'<li><a href="http://foodandmood.com.ua" rel="nofollow" target="_blank">Food & Mood</a></li>'+	
			'<li><a href="http://kolobok.ua" rel="nofollow" target="_blank">Kolobok.ua</a></li>'+	
			'<li><a href="http://radioclub.ua"  rel="nofollow" target="_blank">Radioclub</a></li>'+	
			'<li><a href="http://nrj.ua"  rel="nofollow" target="_blank">NRJ.ua</a></li>'+
			'<li><a href="http://loungefm.com.ua"  rel="nofollow" target="_blank">Lounge FM</a></li>'+	
			'<li><a href="http://nashe.ua/"  rel="nofollow" target="_blank">Наше Радио</a></li>'+
			'<li><a href="http://www.retro.ua"  rel="nofollow" target="_blank">Ретро FM</a></li>'+	
			'<li><a href="http://radioclub.ua/radio/jamfm"  rel="nofollow" target="_blank">Джем FM</a></li>'+	
			'<li><a href="http://www.avtoradio.ua"  rel="nofollow" target="_blank">Авторадио</a></li>'+	
			'<li><a href="http://radiopyatnica.com.ua"  rel="nofollow" target="_blank">Радио Пятница</a></li>'+	
			'</ul></div></div>';
		}
})();