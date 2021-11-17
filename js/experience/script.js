
var $cursor = $('.cursor');

function moveCircle(e) {
  TweenLite.to($cursor, 0.2, {
    css: {
      left: e.pageX,
      top: e.pageY - scrollY,
    }
  });
}
function scale0() {
    TweenMax.to($cursor, 0.4, {
        scale: 0,
    });
    return false;
}
function scale1() {
    TweenMax.to($cursor, 0.4, {
        scale: 1,
    });
    return false;
}
$(window).on('mousemove', moveCircle)
.on('mouseover', scale1)
.on('mouseleave', scale0);




var mapMission = new TweenMax.fromTo('.map-mission', 1, {
	delay: 0.2,
	opacity: 0,
	yoyo: true,
	repeat: -1
}, {
	delay: 0.2,
	opacity: 1,
	yoyo: true,
	repeat: -1
})

mapMission;

var keyMission = new TweenMax.fromTo('.key-bg', 2, {
	opacity: 0,
	yoyo: true,
	repeat: -1
}, {
	opacity: 1,
	yoyo: true,
	repeat: -1
})

keyMission;

var mission5Video = $('.mission5-video');
function mission5Play(){
	mission5Video.get(0).currentTime = 0;
	mission5Video.get(0).play();
}
function mission5Pause(){
	mission5Video.get(0).pause();
}
function mission5Stop(){
	mission5Video.get(0).pause();
	mission5Video.get(0).currentTime = 0;
}

var mission6Video = $('.mission6-video');
function mission6Play(){
	mission6Video.get(0).currentTime = 0;
	mission6Video.get(0).play();
}
function mission6Pause(){
	mission6Video.get(0).pause();
}
function mission6Stop(){
	mission6Video.get(0).pause();
	mission6Video.get(0).currentTime = 0;
}





var missionVal;




var video = $('.mission-video');
function play(){
    video.get(0).currentTime = 0;
    video.get(0).play();
  }
  function pause(){
    video.get(0).pause();
  }
  function stop(){
    video.get(0).pause();
    video.get(0).currentTime = 0;
  }




var errorNum = 0;
var save = 0;
var objNum = 0;

var randomError = function() {
	errorNum = 0;
	save = 0;
	objNum = 0;

	$('.complete-container').css({'display':'none', 'opacity':'0'});

	var bodyWidth = $('.error-container').width() - 300;
	var bodyHeight = $('.error-container').height() - 180;
	var randPosX
	var randPosY 
	for(var i = 0; i < 6; i++){
		randPosX = Math.floor((Math.random()*bodyWidth));
		randPosY = Math.floor((Math.random()*bodyHeight));
  
		$('.error').eq(i).css('display', 'block');
		$('.error').eq(i).css('left', randPosX);
		$('.error').eq(i).css('top', randPosY);
	}

  };

  randomError();




var dragBtn = $('.drag-button');
var dragTgt = $('.drag-target');
var laptop = $('.part.top');
var overlap = '50%';

Draggable.create(dragBtn, {
	type: 'y',
	bounds: '.drag-container',
	onDrag: function(e) {
		if( this.hitTest(dragTgt, overlap) ) {
			$(this.target).addClass('in-range');
		} else {
			$(this.target).removeClass('in-range');
		}
    var matrix = dragBtn.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    var matrixY = matrix[13] || matrix[5]
    var matrixPlusY = -matrixY /6 - 90
    // console.log(matrixPlusY);
    if(matrixPlusY > 0) {
      laptop.stop().css('transform', 'translate3d(0, 0, 0) rotateX(0deg)');
    } else {
		  laptop.stop().css('transform', 'translate3d(0, 0, 0) rotateX('+ matrixPlusY + 'deg)');
    }
	},
	onDragEnd: function(e) {
		var endPos = $(this.target).parent().height() - 52 + 'px';
		if( $(this.target).hasClass('in-range') ) {
			$(this.target).addClass('in-target');
			gsap.to(this.target, {duration: 0.2, y: '-' + endPos});
			$('#mission1').css('z-index','0');
			$('#mission2').css({'z-index':'10', 'opacity':'1'});
			$('#mission1 .mockup .part.top').stop().css({'transform': 'translate3d(0, 0, 0) rotateX(-90deg)'})
			
			$('.mission-ui-play').attr('value', '2');
			$('.mission-ui-retry').attr('value', '2');

			randomError();
		} else {
			gsap.to(this.target, {duration: 0.5, y: 0});
			laptop.stop().css({'transform': 'translate3d(0, 0, 0) rotateX(-90deg)'})
		}
	}
});




$('.error-close').click(function(){
	if(errorNum < 5){
		// console.log('close');
		$(this).parents('.error').css('display','none');
		errorNum++;
		console.log(errorNum);
	} else if(errorNum == 5){
		$(this).parents('.error').css('display','none');
    	$('.error-complete').css({'display':'block'}).stop().animate({'opacity':'1'}, 400);
		$('.mission3').css({'z-index':'9'});
		$('.mission2').stop().delay(2000).animate({'opacity':'0'}, 400, function(){
			$('.mission3').css({'z-index':'10'});
			$('.mission2').css({'z-index':'0', 'opacity':'1'});
			$('.mission-ui-play').attr('value', '3');
			$('.mission-ui-retry').attr('value', '3');
		});
	}
})



if($(this).is(':animated') == false){
	$('.key-btn').click(function(){
		$(this).animate({'opacity':'0'}).css({'display':'none'});
		if(save == 0) {
			save = 1;
		} else if(save == 1){
			save = 2;
			$('.save-complete').css({'display':'block'}).stop().animate({'opacity':'1'}, 400);
			$('.mission4').css({'z-index':'9'});
			$('.mission3').stop().delay(2000).animate({'opacity':'0'}, 400, function(){
				$('.mission4').css({'z-index':'10'});
				$('.mission3').css({'z-index':'0', 'opacity':'1'});
				$('.mission-ui-play').attr('value', '4');
				$('.mission-ui-retry').attr('value', '4');
	
			});
		}
		console.log(save);
	})
		
};


var mission4Script = function(){
	$('.work-list').html('<button draggable="true" id="one" class="work-btn id-btn"><img src="./img/experience/indesign.png" width="100%"></button><button draggable="true" id="two" class="work-btn ps-btn"><img src="./img/experience/photoshop.png" width="100%"></button><button draggable="true" id="three" class="work-btn ae-btn"><img src="./img/experience/aftereffect.png" width="100%"></button><button draggable="true" id="four" class="work-btn il-btn"><img src="./img/experience/illust.png" width="100%"></button>')


var addEvent = (function () {
	if (document.addEventListener) {
	  return function (el, type, fn) {
		if (el && el.nodeName || el === window) {
		  el.addEventListener(type, fn, false);
		} else if (el && el.length) {
		  for (var i = 0; i < el.length; i++) {
			addEvent(el[i], type, fn);
		  }
		}
	  };
	} else {
	  return function (el, type, fn) {
		if (el && el.nodeName || el === window) {
		  el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
		} else if (el && el.length) {
		  for (var i = 0; i < el.length; i++) {
			addEvent(el[i], type, fn);
		  }
		}
	  };
	}
  })();
  
  (function () {
  
	var pre = document.createElement('pre');
	pre.id = "view-source"
	
	// private scope to avoid conflicts with demos
	addEvent(window, 'click', function (event) {
	  if (event.target.hash == '#view-source') {
		// event.preventDefault();
		if (!document.getElementById('view-source')) {
		  pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
		  document.body.appendChild(pre);      
		}
		document.body.className = 'view-source';
		
		var sourceTimer = setInterval(function () {
		  if (window.location.hash != '#view-source') {
			clearInterval(sourceTimer);
			document.body.className = '';
		  }
		}, 200);
	  }
	});
	  
	})();
	
	

	
	  var links = document.querySelectorAll('.work-btn'), el = null;
	  
		for (var i = 0; i < links.length; i++) {
			el = links[i];
		
			el.setAttribute('draggable', 'true');
		
			addEvent(el, 'dragstart', function (e) {
			e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
			e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work
			});
		}
		
		var bin = document.querySelector('#bin');
		
		addEvent(bin, 'dragover', function (e) {
			if (e.preventDefault) e.preventDefault(); // allows us to drop
			this.className = 'over';
			e.dataTransfer.dropEffect = 'copy';
			return false;
		});
		
		// to get IE to work
		addEvent(bin, 'dragenter', function (e) {
			this.className = 'over';
			return false;
		});
		
		addEvent(bin, 'dragleave', function () {
			this.className = '';
		});
		
		addEvent(bin, 'drop', function (e) {
			if (e.stopPropagation) e.stopPropagation(); // stops the browser from redirecting...why???
		
			// console.log(e);
			var el = document.getElementById(e.dataTransfer.getData('Text'));
			
			el.parentNode.removeChild(el);
		

			// stupid nom text + fade effect
			bin.className = '';
		//   yum.innerHTML = eat[parseInt(Math.random() * eat.length)];
		//   yum.innerHTML = this.innerText;
			objNum++;
			console.log(objNum);
			
			
			if(objNum == 4) {
				console.log('next');
				$('.submit-complete').css({'display':'block'}).stop().animate({'opacity':'1'}, 400);
				$('.mission5').css({'z-index':'9'});
				$('.mission4').stop().delay(2000).animate({'opacity':'0'}, 400, function(){
					$('.mission5').css({'z-index':'10'});
					$('.mission4').css({'z-index':'0', 'opacity':'1'});
					$('.mission-ui-play').attr('value', '5');
					$('.mission-ui-retry').attr('value', '5');
					mission5Play();
				});
			}
		
	
			return false;
		});
	}

	  $('.mission-btn').on('click', function(){
		randomError();
		missionVal = $(this).attr('value');
		$('#experience').css({'z-index':'5'});
		$('#mission-wrap').css({'z-index':'6'}).stop().animate({'opacity':'1'}, 400);
		$('#mission' + missionVal).css({'z-index':'10'});
		$('.mission-ui-play').attr('value', missionVal);
		$('.mission-ui-retry').attr('value', missionVal);
		mission4Script();
		$('.key-btn').css({'opacity':'1', 'display':'block'});

		if($(this).attr('value') == 5) {
			mission5Play();
		} else if($(this).attr('value') == 6) {
			mission6Play();
		}

	})


	  $('.mission-ui-back').on('click', function(){
		
		$('#experience').css({'z-index':'2'});
		$('#mission-wrap').stop().animate({'opacity':'0'}, 400, function(){
			$('#mission-wrap').css({'z-index':'1'});
			$('.mission').css({'z-index':'0'})
		});
		$('#mission1 .mockup .part.top').stop().css({'transform': 'translate3d(0, 0, 0) rotateX(-90deg)'})
		gsap.to($('.drag-button'), {duration: 0.5, y: 0});
		$('.mission-ui-play').attr('value', '');
		// $('.work-btn').css('display','block');

		mission5Stop();
		mission6Stop();

	})


	var playVal;
$('.mission-ui-play').on('click', function(){
	playVal = $(this).attr('value');
	console.log(playVal);
	$('.mission-video-container').css('display', 'block').stop().animate({'opacity':'1'}, 400);
	$('.mission-video').attr('src', './img/experience/mission_video/m0' + playVal + '.mp4');
	play();
	mission5Pause();
	mission6Pause();
	
})

$('.mission-video-close').on('click', function(){
	$('.mission-video-container').stop().animate({'opacity':'0'}, 300, function(){
		$('.mission-video-container').css('display', 'none');
	});
	stop();
})


$('.mission-ui-retry').on('click', function(){
	// if($(this).attr('value') == 1) {
	// 	console.log('mission1');
	// } else if($(this).attr('value') == 2) {
	// 	console.log('mission2');
	// } else if($(this).attr('value') == 3) {
	// 	console.log('mission3');
	// } else if($(this).attr('value') == 4) {
	// 	console.log('mission4');
	// } else if($(this).attr('value') == 5) {
	// 	console.log('mission5');
	// } else if($(this).attr('value') == 6) {
	// 	console.log('mission6');
	// }
	mission5Stop();
	mission6Stop();
	$('#mission1 .mockup .part.top').stop().css({'transform': 'translate3d(0, 0, 0) rotateX(-90deg)'})
	gsap.to($('.drag-button'), {duration: 0.1, y: 0});
	$('.mission').css({'z-index':'0'})
	$('.mission1').css({'z-index':'10'})
	$('.mission-ui-play').attr('value', '1');
	
})

$(".mission5-video").on("ended", function() {
	$('.mission6').css({'z-index':'9'});
	$('.mission5').stop().animate({'opacity':'0'}, 400, function(){
		$('.mission6').css({'z-index':'10'});
		$('.mission5').css({'z-index':'0', 'opacity':'1'});
		$('.mission-ui-play').attr('value', '6');
		$('.mission-ui-retry').attr('value', '6');
		mission6Play();
	});
});

	