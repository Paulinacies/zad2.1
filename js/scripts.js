(function($) {
	if(typeof String.prototype.repeatt === "function") return;

		String.prototype.repeatt = function (count) {
			    
			    if (count < 1) return '';
			    
			    var result = '',
			    	text = this;
			    while (count > 1) {
			        if (count & 1) result += text;
			        count >>= 1, text += text;
			    }

			    return result + text;
			};

	var str = "hejho ".repeatt(3);

	console.log(str);

})(jQuery);