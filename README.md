# animate.css-alt-builder
Alternative easy to use custom ANIMATE.CSS builder for Gulp

Installing
```
npm install --save-dev
```
Also you can just run win-install.bat if you're on Windows.

Using
To customize your builds edit gulpfile.js
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
