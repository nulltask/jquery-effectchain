/*!
 * jQuery Chaining Effects Plugin v1.0 (2011-02-01)
 *
 * @author Seiya Konno <seiya@uniba.jp>
 * @license Dual licensed under the MIT or GPL Version 2 licenses.
 * @requires jQuery 1.4.3+
 * @see http://rd.uniba.jp/
 */

if (!window.console) {
	window.console = { log: function() {} };
}

(function($, undefined) {
	
	var namespace = "effectChain",
		prefix = "fxchain"
	;
	
	$.fn[namespace] = function(options) {
		var options = opts = $.extend({
			css: {
				opacity: 0
			},
			target: "." + namespace,
			delay: 0,
			interval: 50,
			reverse: false,
			args: [{
				opacity: 1 
			}, {
				duration: 500,
				easing: "swing"
			}]
		}, options);
		
		var $target = this.find(opts.target),
			targetLength = $target.lengrh,
			sum = 0
		;
		
		if (opts.reverse) {
			$target = $target.get().reverse();
		}
				
		$($target).each(function(index) {
			var
				$this = $(this),
				o = $.extend({}, opts, $this.data(prefix)),
				animateParams = $.extend({}, opts.args[0], $this.data(prefix + "-params")),
				animateOptions = $.extend({}, opts.args[1], $this.data(prefix + "-options"))
			;
			
			$this
				.css(o.css)
				.delay(o.delay + sum)
				.animate.apply($this, [animateParams, animateOptions])
			;
			sum += o.interval + o.delay;
		});
		
		return this;
	}
	
})(jQuery);