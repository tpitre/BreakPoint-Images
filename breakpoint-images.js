/**
 * BreakPoint Images
 * Swap image src based on breakpoint stored in JSON data attribute
 * http://southleft.com
 *
 * Copyright 2012 Terrance Pitre / SouthLeft
 */
(function(p) {

	// Check window width
	var getWidth = function() {
			var width;
			if (document.body && document.body.offsetWidth) {
				width = document.body.offsetWidth;
			}
			if (document.compatMode === 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
				width = document.documentElement.offsetWidth;
			}
			if (window.innerWidth) {
				width = window.innerWidth;
			}
			return width;
		};
	window.onload = function() {
		getWidth();
	};
	window.onresize = function() {
		getWidth();
	};

	// Function to throttle the timing of an event
	var delayResize = (function() {
		var timer = 0;
		return function(callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
	})();

	// Image data logic
	p.swapImgs = function() {

		// Get all elements with the class name 'r-img'
		var rSpan = document.getElementsByClassName('r-img'),
			dataObj = {};

		// Loop through all 'r-img' classes
		for (var i = 0; i < rSpan.length; i++) {
			if (rSpan[i].getAttribute('data-src') !== null) {

				// Remove anything inside of 'r-img'
				rSpan[i].innerHTML = '';

				// Store the data-src values
				dataObj = eval(rSpan[i].getAttribute('data-src'));

				// Create new image
				var img = new Image();

				// Add alt data
				if (rSpan[i].getAttribute('data-alt').length > 0) {
					img.alt = rSpan[i].getAttribute('data-alt');
				}

				// Add title data
				if (rSpan[i].getAttribute('data-title').length > 0) {
					img.title = rSpan[i].getAttribute('data-title');
				}

				// Add image
				if (img.src.length <= 0) {
					rSpan[i].appendChild(img);
				}

				// Loop through all bp data points
				for (var j = 0; j < dataObj.length; j++) {
					var nextJ = j + 1 || 0;

					// If the viewport is smaller than the first bp, show the first bp image
					if (getWidth() <= parseInt(dataObj[0].bp)) {
						// Assign the image path
						img.src = dataObj[0].url;
						// Give is a class name
						img.className = "r-img-" + dataObj[0].bp;
					} else if (getWidth() >= parseInt(dataObj[j].bp) && getWidth() <= parseInt(dataObj[j].bp)) {
						img.src = dataObj[j].url;
						img.className = "r-img-" + dataObj[j].bp;
					} else if (getWidth() >= parseInt(dataObj[j].bp)) {
						img.src = dataObj[j].url;
						img.className = "r-img-" + dataObj[j].bp;
					}
				}
			}
		}
	};

	// Execute the function on load
	p.swapImgs();

	// Execute the function on resize
	window.onresize = function() {
		delayResize(function() {
			p.swapImgs();
		}, 100);
	};
}(this));