$(document).ready(function() {
	
	// Nivo Slider
	$('#slides').nivoSlider({
		effect:'random',
		directionNav: false,
		animSpeed:500,
		pauseTime:4000,
		captionOpacity: 1
	});
	
	// Media Slideshow
	$("#media_slideshow").tabs({ fx:{ opacity: "toggle" } }).tabs("rotate", 5000, true);
	$("#media_slideshow").hover(function() {
		$("#media_slideshow").tabs("rotate",0,true);
	},function() {
		$("#media_slideshow").tabs("rotate",5000,true);
	});
	
	// Drop down menus
	$("div#header #nav li ul").each(function() {
		$(this).prepend('<li class="arrow"></li>');
		$(this).css({
			'left' : -($(this).width() / 2 - ($(this).parent().width() / 2) + 10)
		});
	});
	$("div#header #nav li").hover(function() {
		if($(this).find("ul").size != 0) {
			$(this).find("ul").stop(true, true).fadeIn("fast");
		}
	}, function() {
		$(this).find("ul").stop(true, true).fadeOut("fast");
	});
	
	$("div#header ul#nav li").each(function() {
		$("ul li:last a", this).css({ 'border' : 'none' });
	});
	
	// Hours Drop Down
	$(".hours").css({ 'top' : "-"+($(".hours").outerHeight())+"px" });
	$("a.hours_toggle").click(function() {
		if($(this).hasClass("active")) {
			$(".hours").animate({ 'top' : "-"+($(".hours").outerHeight())+"px" }, 300);
			$(this).animate({ 'top' : '-1px' }, 300)
						 .removeClass("active")
						 .find("span")
						 .addClass("down").removeClass("up");
		} else {
			$(".hours").animate({ 'top' : 0 }, 300);
			$(this).animate({ 'top' : $(".hours").height() + $(this).outerHeight() - 6 }, 300)
						 .addClass("active")
						 .find("span")
						 .removeClass("down").addClass("up");
		}
	});
	
	// Our story reviews slideshow
	$("#reviews").tabs({ fx:{ opacity: "toggle" } }).tabs("rotate", 3000, true);
	
	// Gallery Slideshow 
	$("#slideshow").nivoSlider({
			effect:'fade',
	    controlNavThumbs:true,
			controlNavThumbsReplace: '.jpg',
			directionNav: false,
			captionOpacity: 1,
			afterLoad: function(){
				$(".nivo-controlNav a:nth-child(7n) img").css({ 'margin-right' : 0 });
			}
	});
	
	// Gallery hover
	$("div#gallery .three_column li, div#gallery .four_column li").each(function() {
		$("a", this).append('<div class="hover"></div>');
	});
	$("div#gallery .three_column li, div#gallery .four_column li").hover(function() {
		$("a", this).find(".hover").stop(true, true).fadeIn(400);
	}, function() {
		$("a", this).find(".hover").stop(true, true).fadeOut(400);
	});
	
	// Gallery Fancyboxes
	$("a.gallery_image").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	400, 
		'speedOut'		:	400, 
		'overlayShow'	:	false
	});
	$("#gallery ul.three_column li:nth-child(3n)").addClass("last");
	$("#gallery ul.four_column li:nth-child(4n)").addClass("last");
	
	// Small Sidebar
	$("div#flickr ul li").hover(function() {
		$(this).animate({ 'opacity' : '0.6' }, 300);
	}, function() {
		$(this).stop(true,true).animate({ 'opacity' : '1' }, 300)
	});
	
	// Tabs, toggles and accordions
	$(".tabs").tabs();
	$(".accordion").accordion({ autoHeight: false, header: '.heading' });
	$(".small_accordion").accordion({ autoHeight: false });
	$(".list_accordion").accordion({ autoHeight: false, active: false });
	
	// Button hover state
	$(".button").stop(true,true).hover(function() {
		$(this).animate({ 'opacity' : '0.8' }, 300);
	}, function() {
		$(this).stop(true,true).animate({ 'opacity' : '1' }, 300)
	});
	
	// Pricing table hover
	$(".pricing_box").hover(function() {
		$(this).stop(true,true).animate({ 'opacity' : '1' }, 300).addClass("active");
	}, function() {
		$(this).stop(true,true).animate({ 'opacity' : '0.8' }, 300).removeClass("active");
	});
	
	// Default text field values
	$(".text_field").focus(function(srcc)
  {
      if ($(this).val() == $(this)[0].title) {
          $(this).addClass("text_field_active");
          $(this).val("");
      }
  });
  $(".text_field").blur(function() {
      if ($(this).val() == "") {
          $(this).removeClass("text_field_active");
          $(this).val($(this)[0].title);
      }
  });
  $(".text_field").blur();
	
	// Fix table borders
	$("table").each(function() {
		$("tr th:last", this).addClass("no_right_border");
		$("tr:last td", this).addClass("no_bottom_border");
		$("tr", this).each(function() {
			$("td:last", this).addClass("no_right_border");
		});
	});	
	
	// Twitter Arrows
	//$("div#feedback div.tweets ul li").append('<em class="arrow"></em>');
	
	// UL borders
	$(".press ul li:last, .specials ul li:last").css({ 'border-bottom' : 'none' });
	
	// Hours & location hover states
	$(".directions a").css({ 'opacity' : 0.6 }).append("<span></span>");
	$(".directions a").hover(function() {
		$(this).stop(true, true).animate({ 'opacity' : 1 }, 200);
	}, function() {
		$(this).stop(true, true).animate({ 'opacity' : 0.6 }, 200);
	});
	
	// Ajax contact form
	$('#contact_form').submit(function() {
       
		var this_form = $(this);
  	$.ajax({
  		type: 'post',
  		data: this_form.serialize(),
  		url: 'scripts/send_email.php',
  		success: function(res) {
  			if(res == "true") {
					$(this_form)[0].reset();
					$(".notice").removeClass("error").text("Thank you for contacting us!").addClass("success").fadeIn("fast");
  			} else {
  				$(".notice").text("Please check all fields and try again.").addClass("error").fadeIn("fast");
  			}
  		}
  	});
		
   });
	
});
// Twitter integration
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(7($){$.1C.B=7(o){8 s=$.1a({h:j,C:j,1b:2C,M:j,H:j,l:3,1c:j,u:1,1D:1E,1d:j,1e:j,I:j,1F:"i 2D,",1G:"i",1H:"i 2E",1I:"i 2F 2G",1J:"i 2H 2I 2J",V:j,1f:j,1g:"W.1h",X:"2K.W.1h",1i:"1j.W.1h",J:"{Y}{1K}{N}{m}",1L:7(1M,1N){5 1N["O"]-1M["O"]},1O:7(B){5 1E}},o);8 1k=/\\b((?:[a-z][\\w-]+:(?:\\/{1,3}|[a-1l-9%])|2L\\d{0,3}[.]|[a-1l-9.\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\))+(?:\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:\'".,<>?«»“”‘’]))/K;7 t(J,Z){6(1m J==="1P"){8 11=J;2M(8 1n 2N Z){8 1o=Z[1n];11=11.1p(1Q 2O(\'{\'+1n+\'}\',\'g\'),1o===j?\'\':1o)}5 11}f 5 J(Z)}$.1a({B:{t:t}});7 E(1R,1S){5 7(){8 1q=[];1r.1T(7(){1q.2P(1r.1p(1R,1S))});5 $(1q)}}$.1C.1a({1U:E(1k,7(v){8 1V=(/^[a-z]+:/i).2Q(v)?v:"P://"+v;5"<a x=\\""+1V+"\\">"+v+"</a>"}),1W:E(/@(\\w+)/K,"@<a x=\\"P://"+s.1g+"/$1\\">$1</a>"),1X:E(/(?:^| )[\\#]+([\\w\\2R-\\2S\\2T-\\2U\\2V-\\2W\\2X-\\2Y]+)/K,\' <a x="P://\'+s.1i+\'/1j?q=&2Z=$1&30=31\'+((s.h&&s.h.12==1)?\'&1s=\'+s.h.N("%32%2B"):\'\')+\'">#$1</a>\'),1Y:E(/\\b(1Z)\\b/K,\'<n c="1Z">$1</n>\'),20:E(/\\b(21)\\b/K,\'<n c="21">$1</n>\'),22:E(/(&33;)+[3]/K,"<23 c=\'34\'>&#35;</23>")});7 25(26){5 27.36(26.1p(/^([a-z]{3})( [a-z]{3} \\d\\d?)(.*)( \\d{4})$/i,\'$1,$2$4$3\'))}7 28(29){8 2a=(2b.12>1)?2b[1]:1Q 27();8 k=13((2a.37()-29)/2c,10);8 r=\'\';6(k<y){r=k+\' 38 F\'}f 6(k<39){r=\'a 3a F\'}f 6(k<(45*y)){r=(13(k/y,10)).1t()+\' 3b F\'}f 6(k<(2*y*y)){r=\'3c 3d F\'}f 6(k<(24*y*y)){r=\'\'+(13(k/3e,10)).1t()+\' 3f F\'}f 6(k<(48*y*y)){r=\'a 3g F\'}f{r=(13(k/3h,10)).1t()+\' 3i F\'}5\'3j \'+r}7 2d(m){6(m.v(/^(@([A-3k-1l-9-3l]+)) .*/i)){5 s.1I}f 6(m.v(1k)){5 s.1J}f 6(m.v(/^((\\w+3m)|3n) .*/3o)){5 s.1G}f 6(m.v(/^(\\w*3p) .*/i)){5 s.1H}f{5 s.1F}}7 2e(){8 Q=(\'2f:\'==3q.3r.3s?\'2f:\':\'P:\');8 l=(s.1c===j)?s.l:s.1c;6(s.C){5 Q+"//"+s.X+"/1/"+s.h[0]+"/3t/"+s.C+"/2g.14?u="+s.u+"&3u="+l+"&15=?"}f 6(s.1b){5 Q+"//"+s.X+"/1b/"+s.h[0]+".14?u="+s.u+"&l="+l+"&15=?"}f 6(s.M===j&&s.h.12==1){5 Q+\'//\'+s.X+\'/1/2g/3v.14?D=\'+s.h[0]+\'&l=\'+l+(s.1D?\'&3w=1\':\'\')+\'&u=\'+s.u+\'&15=?\'}f{8 M=(s.M||\'1s:\'+s.h.N(\' 3x 1s:\'));5 Q+\'//\'+s.1i+\'/1j.14?&q=\'+3y(M)+\'&3z=\'+l+\'&u=\'+s.u+\'&15=?\'}}7 2h(e){8 o={};o.e=e;o.2i=e.2i;o.D=e.3A||e.16.D;o.H=s.H;o.2j=e.2k||e.16.2k;o.R=1m(e.1u)!=\'3B\';o.O=25(e.3C);o.I=s.I=="3D"?2d(e.m):s.I;o.G=e.3E;o.S="P://"+s.1g+"/";o.17=o.S+o.D;o.2l=o.17+"/3F/"+o.G;o.2m=o.S+"1v/B?3G="+o.G;o.2n=o.S+"1v/R?G="+o.G;o.2o=o.S+"1v/2p?G="+o.G;o.2q=o.R&&e.1u.16.D;o.2r=28(o.O);o.2s=o.R?(\'3H @\'+o.2q+\' \'+e.1u.m):e.m;o.1w=$([o.2s]).1U().1W().1X()[0];o.2t=$([o.1w]).22().1Y().20()[0];o.16=t(\'<a c="3I" x="{17}">{D}</a>\',o);o.N=s.I?t(\' <n c="3J">{I}</n> \',o):\' \';o.Y=o.H?t(\'<a c="3K" x="{17}"><3L 3M="{2j}" 3N="{H}" 3O="{H}" 3P="{D}\\\'s Y" 2u="{D}\\\'s Y" 3Q="0"/></a>\',o):\'\';o.1K=t(\'<n c="O"><a x="{2l}" 2u="3R B 3S W">{2r}</a></n>\',o);o.m=t(\'<n c="1w">{2t}</n>\',o);o.3T=t(\'<a c="1x 3U" x="{2m}">3V</a>\',o);o.3W=t(\'<a c="1x 3X" x="{2n}">R</a>\',o);o.3Y=t(\'<a c="1x 3Z" x="{2o}">2p</a>\',o);5 o}5 1r.1T(7(i,L){8 C=$(\'<40 c="41">\').42(L);8 2v=\'<p c="43">\'+s.1d+\'</p>\';8 2w=\'<p c="44">\'+s.1e+\'</p>\';8 18=$(\'<p c="18">\'+s.V+\'</p>\');6(s.h&&1m(s.h)=="1P"){s.h=[s.h]}6(s.V)$(L).2x(18);$(L).46("B:1y",7(){$.47(2e(),7(1z){6(s.V)18.49();6(s.1d)C.4a(2v);C.2y();8 T=$.2z(1z.4b||1z,2h);T=$.4c(T,s.1O).4d(s.1L).4e(0,s.l);C.2x($.2z(T,7(o){5"<U>"+t(s.J,o)+"</U>"}).N(\'\')).1A(\'U:4f\').1B(\'4g\').2A().1A(\'U:4h\').1B(\'4i\').2A().1A(\'U:4j\').1B(\'4k\');6(s.1e)C.4l(2w);$(L).19("4m").19((T.12===0?"2y":"4n"));6(s.1f){4o.4p(7(){$(L).19("B:1y")},2c*s.1f)}})}).19("B:1y")})}})(4q);',62,275,'|||||return|if|function|var||||class||item|else||username||null|delta|count|text|span|||||||page|match||href|60|||tweet|list|screen_name|replacer|ago|tweet_id|avatar_size|join_text|template|gi|widget|query|join|tweet_time|http|proto|retweet|twitter_base|tweets|li|loading_text|twitter|twitter_api_url|avatar|info||result|length|parseInt|json|callback|user|user_url|loading|trigger|extend|favorites|fetch|intro_text|outro_text|refresh_interval|twitter_url|com|twitter_search_url|search|url_regexp|z0|typeof|key|val|replace|returning|this|from|toString|retweeted_status|intent|tweet_text|tweet_action|load|data|children|addClass|fn|retweets|true|auto_join_text_default|auto_join_text_ed|auto_join_text_ing|auto_join_text_reply|auto_join_text_url|time|comparator|tweet1|tweet2|filter|string|new|regex|replacement|each|linkUrl|url|linkUser|linkHash|capAwesome|awesome|capEpic|epic|makeHeart|tt||parse_date|date_str|Date|relative_time|date|relative_to|arguments|1000|build_auto_join_text|build_api_url|https|statuses|extract_template_data|source|avatar_url|profile_image_url|tweet_url|reply_url|retweet_url|favorite_url|favorite|retweeted_screen_name|tweet_relative_time|tweet_raw_text|tweet_text_fancy|title|intro|outro|append|empty|map|end||false|said|am|replied|to|was|looking|at|api|www|for|in|RegExp|push|test|u00c0|u00d6|u00d8|u00f6|u00f8|u00ff|u0600|u06ff|tag|lang|all|2BOR|lt|heart|x2665|parse|getTime|seconds|120|minute|minutes|an|hour|3600|hours|day|86400|days|about|Za|_|ed|just|im|ing|document|location|protocol|lists|per_page|user_timeline|include_rts|OR|encodeURIComponent|rpp|from_user|undefined|created_at|auto|id_str|status|in_reply_to|RT|tweet_user|tweet_join|tweet_avatar|img|src|height|width|alt|border|view|on|reply_action|tweet_reply|reply|retweet_action|tweet_retweet|favorite_action|tweet_favorite|ul|tweet_list|appendTo|tweet_intro|tweet_outro||bind|getJSON||remove|before|results|grep|sort|slice|first|tweet_first|odd|tweet_even|even|tweet_odd|after|loaded|full|window|setTimeout|jQuery'.split('|'),0,{}))