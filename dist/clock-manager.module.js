/*!
 * clock-manager
 * https://github.com/yomotsu/clock-manager
 * (c) 2019 @yomotsu
 * Released under the MIT License.
 */
var ClockManager = (function () {
    function ClockManager() {
        this._elapsedTime = 0;
        this._newElapsedTime = null;
        this._deltaTime = 0;
        this._lastUpdate = 0;
        this._running = false;
    }
    Object.defineProperty(ClockManager.prototype, "deltaTime", {
        get: function () {
            return this._deltaTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockManager.prototype, "elapsedTime", {
        get: function () {
            return this._elapsedTime;
        },
        set: function (elapsedTime) {
            this.setElapsedTime(elapsedTime);
        },
        enumerable: true,
        configurable: true
    });
    ClockManager.prototype.setElapsedTime = function (elapsedTime) {
        this._newElapsedTime = elapsedTime;
    };
    ClockManager.prototype.start = function () {
        this._running = true;
        this.setElapsedTime(this._elapsedTime);
        this.update();
    };
    ClockManager.prototype.stop = function () {
        this._running = false;
    };
    ClockManager.prototype.update = function () {
        var delta = this._running ? performance.now() - this._lastUpdate : 0;
        var newElapsedTime = typeof this._newElapsedTime === 'number' ? this._newElapsedTime : this._elapsedTime + delta;
        this._deltaTime = newElapsedTime - this._elapsedTime;
        this._elapsedTime = newElapsedTime;
        this._newElapsedTime = null;
        this._lastUpdate = performance.now();
    };
    return ClockManager;
}());

export default ClockManager;
