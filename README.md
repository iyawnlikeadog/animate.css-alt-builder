# animate.css-alt-builder
Alternative easy to use <a href="https://github.com/daneden/animate.css">ANIMATE.CSS</a> custom builder for Gulp

###Installing
To install the builder you must have Node.js installed on your system.<br>
Download ZIP, extract it and install Gulp and it's dependencies using the following command:
```
npm install --save-dev
```

###Using
To customize your builds just edit gulpfile.js. Here's an example:
```js
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
```
Then run gulp default task
```
gulp
```
