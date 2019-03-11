# clock-manager

[![Latest NPM release](https://img.shields.io/npm/v/clock-manager.svg)](https://www.npmjs.com/package/clock-manager)
![MIT License](https://img.shields.io/npm/l/clock-manager.svg)

## demos

- [basic](https://yomotsu.github.io/clock-manager/examples/basic.html)

## Usage

```shell
$ npm install --save clock-manager
```

### 1. make an instance and start it

```js
const clock = new ClockManager();
clock.start();
```

### 2. update in your requestAnimationFrames

You can get `deltaTime` and `elapsedTime` then.

```js
( anim() {

	requestAnimationFrame( anim );
	clock.update();
	const delta = clock.deltaTime;
	const elapsed = clock.elapsedTime;
	updateSOmething( delta );
	renderSomething();

} )();
```

even in a separate place

```js
function renderSomething() {

	const updatedDelta = clock.deltaTime;

}
```

### other features

- `clock.start()` : start / restart.
- `clock.stop()` : stop the clock.
- `clock.elapsedTime( number )` : time travel like, rewind and forward.
- `clock.update()` : update clock for the delta frame. this is usually executed in the beginning of requestAnimationFrame.

and getters:

- `clock.deltaTime`
- `clock.elapsedTime`
