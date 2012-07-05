// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
	log.history = log.history || [];
	// store logs to an array for reference
	log.history.push(arguments);
	if(this.console) {
		arguments.callee = arguments.callee.caller;
		var newarr = [].slice.call(arguments);
		( typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
	}
};
// make it safe to use console.log always
(function(b) {
	function c() {
	}

	for(var d = "assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","), a; a = d.pop(); ) {
		b[a] = b[a] || c
	}
})((function() {
	try {
		console.log();
		return window.console;
	} catch(err) {
		return window.console = {};
	}
})());

$(document).bind("mobileinit", function() {
	console.log("mobileinit");
	
	
	//백버튼 자동추가
	//$.mobile.page.prototype.options.addBackBtn = true;
		
	// 네임스페이스를 설정하는 부분입니다.
	// 기본값은 "" 으로 변경시 data-role 와 같은 부분응ㄹ data-네임스페이스-role 와 같이 사용해야 합니다.
	// $.mobile.ns = "";

	// 자동초기화 관련
	// $.mobile.autoInitializePage = false;
	
	// 서브페이지 URL 키 값 설정
	// 같은 html 파일 내에 있는 서브페이지로 이동하기 위한 키 값을 어떤것으로 설정할 것인지 선택하는 부분입니다.
	// sample.html&ui-page=subpage
	// $.mobile.subPageUrlKey = "ui-page";

	// 활성화된 페이지 Class 설정
	// $.mobile.activePageClass = "ui-page-active";

	// 활성화된 버튼 Class 설정
	// $.mobile.activeBtnClass = "ui-btn-active";

	// 아래내용없음
	// $.mobile.nonHistorySelectors = "dialog";

	// ajax 기능 사용 여부
	// $.mobile.ajaxEnabled = true;
	//$.mobile.hashListeningEnabled = false;
	//$.mobile.pushStateEnabled = false;

	// 기본 화면 전환 효과
	//$.mobile.defaultPageTransition = "flow";
	$.mobile.defaultPageTransition = "fade";

	// 기본 다이얼로그 창 전환 효과
	// $.mobile.defaultDialogTransition = "pop";
	// $.mobile.minScrollBack = "150";

	// 외부 페이지 로딩시 보여지는 메세지
	// $.mobile.loadingMessage = "loading";

	// 외부 페이지 에러시 보여지는 메세지
	// $.mobile.pageLoadErrorMessage = "Error Loading Page";

	// $.mobile.gradeA
});
