(function ( $, x5engine ) {
	var s = x5engine.settings,
		b = x5engine.boot;

	s.islocal = true;
	b.push(function () {
		x5engine.setupDateTime();
		x5engine.imAccess.showLogout();
		x5engine.utils.autoHeight();
		x5engine.cart.ui.updateWidget();
		x5engine.imGrid.init();
	});
	b.push(function () {
		x5engine.menu({
			target: '#imMnMn',
			showCurrent: false,
			verticalScroll: false,
			orientation: 'horizontal',
			menuHeight: 22,
			menuWidth: 120,
			submenuHeight: 22,
			submenuWidth: 160,
			opacity: 0.800,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});

	// ShowBox
	$.extend(s.imShowBox, {
		'effect' : 'fade',
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 1,
			'left': 1
		},
		'borderRadius' : '5px 5px 5px 5px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.700,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'fade',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.700
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 0,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'none',
		'showTail' : true
	});

	// Captcha
	var codes = s.imCaptcha.offlineCodes;
	codes[0] = { letter: 'E', path: 'captcha/imcpa_5us.gif'};
	codes[1] = { letter: 'X', path: 'captcha/imcpa_ysx.gif'};
	codes[2] = { letter: 'P', path: 'captcha/imcpa_y7a.gif'};
	codes[3] = { letter: 'R', path: 'captcha/imcpa_u63.gif'};
	codes[4] = { letter: 'F', path: 'captcha/imcpa_8nr.gif'};
	codes[5] = { letter: 'N', path: 'captcha/imcpa_6tk.gif'};
	codes[6] = { letter: 'H', path: 'captcha/imcpa_y28.gif'};
	codes[7] = { letter: 'U', path: 'captcha/imcpa_gvr.gif'};
	codes[8] = { letter: 'M', path: 'captcha/imcpa_zky.gif'};
	codes[9] = { letter: 'P', path: 'captcha/imcpa_xmt.gif'};
	s.loaded = true;
})( _jq, x5engine );