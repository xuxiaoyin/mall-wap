$(function(){
	
	
	var iNow=0
	fnInt(iNow)
	function fnInt(n) {
		$('.list-wrap').css('display','none')
		$('.list-wrap').eq(n).css('display','block')
		$('.team-tab').find('.tab-nav').removeClass('active')
		$('.team-tab').find('.tab-nav').eq(n).addClass('active')
	}
	$('.team-tab').find('.tab-nav').click(function() {
		iNow=$(this).index()
		fnInt(iNow)
	})
	
	
	var switches=0
	fnSwitch(switches)
	function fnSwitch(n) {
		$('.switch-wrap').css('display','none')
		$('.switch-wrap').eq(n).css('display','block')
		$('.switch').find('span').attr('class','normal')
		$('.switch').find('span').eq(n).attr('class','on')
	}
	$('.switch').find('span').click(function() {
		iNow=$(this).index()
		fnSwitch(iNow)
	})
	
	
	
//	弹窗
	var aPopup=$('.mark-layer').find('.popup')
	$('.switch-wrap').find('.sell-score').click(function() {
		aPopup.css('display','none');
		$('.mark-layer').css('display','block');
		aPopup.filter('.sell-score').css('display','flex');
		$('.sell-score').find('.sure-subbmit').click(function() {
			if($('.sub-money').val()>parseInt($('#myMoney').html())) {
				aPopup.filter('.no-money').css('display','flex');
				$('.no-money').find('.back').click(function() {
					aPopup.css('display','none');
			        aPopup.filter('.sell-score').css('display','flex');
				})
			}else {
				$('.mark-layer').css('display','none');
			}
		})
		$('.sell-score').find('.sure-sell').click(function(){
			aPopup.css('display','none');
			aPopup.filter('.sure-sell').css('display','flex');
			$('.sure-sell').find('.btn-yes').click(function() {
				$('.mark-layer').css('display','none');
			})
			$('.sure-sell').find('.btn-no').click(function() {
				$(this).closest('.popup').css('display','none')
				$('.popup').filter('.sell-score').css('display','flex')
			})
		})
		$('.sell-score').find('.sure-nosell').click(function() {
			$('.mark-layer').css('display','none');
		})
	})
	
	$('.switch-wrap').find('.give-score').click(function() {
		aPopup.css('display','none');
		$('.mark-layer').css('display','block');
		aPopup.filter('.give-score').css('display','flex');
		$('.give-score').find('.sure-give').click(function(){
			aPopup.css('display','none');
			aPopup.filter('.sure-give').css('display','flex');
			$('.sure-give').find('.btn-yes').click(function() {
				$('.mark-layer').css('display','none');
			})
			$('.sure-give').find('.btn-no').click(function() {
				$(this).closest('.popup').css('display','none')
				$('.popup').filter('.give-score').css('display','flex')
			})
		})
		$('.give-score').find('.sure-nogive').click(function() {
			$('.mark-layer').css('display','none');
		})
	})
	
	
	
	
})
