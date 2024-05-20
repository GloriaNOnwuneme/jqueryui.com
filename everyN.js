(function( $ ) {
	$.fn.everyN = function(x, y) {
		return this.filter(function(index) {
			if (y === "skip") {
				return (index+1) % (x) !== 0;
			} else {return (index+1) % (x) === 0;}
		});
	};
}( jQuery ));

/* other functions to add - grouping by N items??*/