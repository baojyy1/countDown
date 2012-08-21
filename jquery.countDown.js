/*
* Created by baozhimin at 2012-08-16
* Copyright HiSupplier.com
*
* 计算文本框字数（中文和回车算2个字符）
* 显示数量ID：文本框ID + "Num"，如果组合ID不存在，默认为summTipCount
* 
* 默认最大数量150;
* 支持多个文本框
*
* 注：文本框的值发生改变时，标准浏览器触发oninput事件,而IE则触发onpropertychange事件。
**/
(function ($) {
	$.fn.countDown = function(options) {
		var options = $.extend({maxNum: 150}, options);

		function countDown($this){
			var o_this = ($this && $this[0]) || this;
			$this = $(o_this);
			var val = $this.val();
			var showId = $this.attr("id") + "Num";
			var show = $("#" + showId);
			if(show.size() <= 0){
				show = $("#summTipCount");
				if(show.size() <= 0){
					return;
				}
			}
			var length = val.replace(/[^\x00-\xff]/g, "aa").replace(/\n/g, "aa").length;
			
			var spare = options.maxNum - length;
			if (spare >= 0) {
				show.html(spare);
			} else {
				$this.val(val.substring(0, options.maxNum));
				show.html("0");
			}
		}
		
		return this.each(function(){
			countDown($(this));
			// 非IE浏览器
			if($.support.htmlSerialize){
				this.oninput = countDown;
			}else{
				this.onpropertychange = countDown;
			}
		});
	}
})(jQuery);