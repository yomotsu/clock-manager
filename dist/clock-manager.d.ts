export default class ClockManager {
    private _elapsedTime;
    private _newElapsedTime;
    private _deltaTime;
    private _lastUpdate;
    private _running;
    readonly deltaTime: number;
    elapsedTime: number;
    setElapsedTime(elapsedTime: number): void;
    start(): void;
    stop(): void;
    update(): void;
}
