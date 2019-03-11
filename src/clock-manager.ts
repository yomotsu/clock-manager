export default class ClockManager {

	private _elapsedTime: number = 0;
	private _newElapsedTime: number | null = null;
	private _deltaTime: number = 0;
	private _lastUpdate: number = 0;
	private _running: boolean = false;

	get deltaTime(): number {

		return this._deltaTime;

	}

	get elapsedTime(): number {

		return this._elapsedTime;

	}

	set elapsedTime( elapsedTime: number ) {

		this.setElapsedTime( elapsedTime );

	}

	public setElapsedTime( elapsedTime: number ): void {

		this._newElapsedTime = elapsedTime;
		// deltaを取得するためには、setElapsedTime後にupdateを実行して新しいelapsedTimeを適用する必要がある

	}

	public start(): void {

		this._running = true;
		// 停止時の経過時間からスタート
		this.setElapsedTime( this._elapsedTime );
		this.update();

	}

	public stop(): void {

		this._running = false;

	}

	public update(): void {

		const delta = this._running ? performance.now() - this._lastUpdate : 0;
		const newElapsedTime = typeof this._newElapsedTime === 'number' ? this._newElapsedTime : this._elapsedTime + delta;

		this._deltaTime = newElapsedTime - this._elapsedTime;
		this._elapsedTime = newElapsedTime;
		this._newElapsedTime = null;
		this._lastUpdate = performance.now();

	}

}
