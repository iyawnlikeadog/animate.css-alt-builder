var gulp      = require('gulp');
var concatCss = require('gulp-concat-css');
var cssnano   = require('gulp-cssnano');

// Edit builds

var builds = {
	project_one: {
		animations: ["fadeOutUp", "fadeInDown"],
		output:     "./project_one/animate.css",
		min:        "./project_one/animate.min.css"
	},
	project_two: {
		animations: ["flipInX", "lightSpeedOut"],
		output:     "./project_two/animate.css",
		min:        false
	}
};

/*
attention_seekers:
	bounce, flash, pulse, rubberBand, shake, headShake, swing, tada, wobble, jello

bouncing_entrances:
	bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp

bouncing_exits:
	bounceOut, BounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp

fading_entrances:
	fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig

fading_exits:
	fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig

flippers:
	flip, flipInX, flipInY, flipOutX, flipOutY

lightspeed:
	lightSpeedIn, lightSpeedOut

rotating_entrances:
	rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight

rotating_exits
	rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight

specials:
	hinge, rollIn, rollOut

zooming_entrances:
	zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp

zooming_exits:
	zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp

sliding_entrances:
	slideInDown, slideInLeft, slideInRight, slideInUp

sliding_exits:
	slideOutDown, slideOutLeft, slideOutRight, slideOutUp
*/

gulp.task('default', function () {

	for (var k in builds) {

		var animations = ['./source/animate.css'];
		var output     = builds[k]['output'];
		var min        = builds[k]['min'];

		for (var key in builds[k]['animations']) {
			var animation_name = builds[k]['animations'][key];
			var animation_src  = './source/' + animation_name + '.css';
			animations.push(animation_src);
		};

		if (output !== false) {
			var path     = output.substring(0, output.lastIndexOf("/") + 1);
			var filename = output.substring(output.lastIndexOf("/") + 1, output.length);
			gulp.src(animations)
					.pipe(concatCss(filename))
					.pipe(gulp.dest(path));
		}

		if (min !== false) {
			var min_path     = min.substring(0, min.lastIndexOf("/") + 1);
			var min_filename = min.substring(min.lastIndexOf("/") + 1, min.length);
			gulp.src(animations)
					.pipe(concatCss(min_filename))
					.pipe(cssnano())
					.pipe(gulp.dest(min_path));
		}
	}

});
