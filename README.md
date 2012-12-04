BreakPoint-Images
=================

BreakPoint Images is a simple JavaScript plugin to swap images out based on viewport width stored as JSON in a data attribute.

<a href="http://codepen.io/tpitre/pen/uAFao"><strong>VIEW THE DEMO HERE</strong></a>

BreakPoint Images does not have any dependicies on any existing JavaScript framework. This really works best for responsive websites where you expect users to either be switching the orientation of their device or resizing the browser window. A lot of other viewport-based JS based scripts assume that each image loaded on each breakpoint will be the same aspect ratio. Most will load the largest image when viewed in the largest viewport setting, but not swap the image with the version meant for a smaller breakpoint when the viewport is scaled back down. This script will ensure that the proper image is loaded on its breakpoint when loaded and when scaled up or down.

This script really works well when your loading your images dynamically, like through Drupal with Imagecache settings or WordPress using their thumbnail, medium, and large images sizes.

The meat of this script is in the data attributes on the wrapping <code>&lt;span&gt;</code> tag.

<h4>There are 3 data attributes used:</h4>
<ul>
	<li><strong>data-alt:</strong> The <code>alt</code> attribute to apply to your image</li>
	<li><strong>data-title:</strong> The <code>title</code> attribute to apply to your image</li>
	<li><strong>data-src:</strong> The JSON object containing your breakpoint image data. It accepts 2 key/value pairs:
		<ul>
			<li><strong>bp:</strong> The breakpoint in pixels you want this image to react to</li>
			<li><strong>url:</strong> The path to the image to want to swap</li>
		</ul>
	</li>
</ul>

<hr>

<h3>EXAMPLE USAGE:</h3>

<h3>3 Breakpoints: 420, 820, &amp; 1100</h3>
    <span class="r-img" data-alt="My Alt" data-title="My Title" data-src="[{'bp':'420','url':'http://placehold.it/420x150'},{'bp':'820','url':'http://placehold.it/820x150'},{'bp':'1100','url':'http://placehold.it/1100x150'},]"><noscript><img src="http://placehold.it/1100x150" alt=""></noscript></span>

<h3>7 Breakpoints: 420, 520, 620, 720, 820, 920 &amp; 1020</h3>
    <span class="r-img" data-alt="My Alt" data-title="My Title" data-src="[{'bp':'420','url':'http://placehold.it/420x150'},{'bp':'520','url':'http://placehold.it/520x150'},{'bp':'620','url':'http://placehold.it/620x150'},{'bp':'720','url':'http://placehold.it/720x150'},{'bp':'820','url':'http://placehold.it/820x150'},{'bp':'920','url':'http://placehold.it/920x150'},{'bp':'1020','url':'http://placehold.it/1020x150',}]"><noscript><img src="http://placehold.it/820x150" alt=""></noscript></span>

<hr>

<h3>STEPS TO USE:</h3>
<ol>
	<li>Include breakpoint-images.min.js at the bottom of your web page.</li>
	<li>Add your default image tag with a <code>&lt;noscript></code> tag around it.</li>
	<li>Wrap that in a <code>&lt;span&gt;</code> with the class "r-img".</li>
	<li>Add 3 data attributes with desired data.</li>
</ol>