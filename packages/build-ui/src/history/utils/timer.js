export class Timer {
    constructor(timer) {
        this.running = timer.running || false;
        this.timeout = null;
        this.latest = timer.latest;
        this.checkpoint = timer.checkpoint;
        this.start = timer.start;
    }
    begin() {
        const now = Date.now();
        this.running = true
        this.start = now;
        this.checkpoint = now;
        this.latest = now;
    }
    mark() {
        const now = Date.now();
        this.running = true
        this.checkpoint = now;
        this.latest = now;
    }
    update() {
        const now = Date.now();
        this.latest = now;
    }
    withHandlers(handlers) {
        this.handlers = handlers;
    }
    getDifference() {
        return this.latest - this.checkpoint;
    }
    getShort() {
        return this.latest - this.checkpoint;
    }
    getTotal() {
        const now = Date.now();
        return now - this.start;
    }
    getLong() {
        const now = Date.now();
        return now - this.latest;
    }
    isRunning() {
        return this.running;
    }
    run(configuration) {
        this.millis = configuration.batchTime;
        this.maxMillis = configuration.batchTimeLimit;
        this.begin();
        return new Promise((res, rej) => {
            const finishLong = () => (
                this.finishLong()
            )
            this.timeout = setTimeout(
                finishLong, 
                this.millis
            );
            const reject = reason => {
                rej(reason);
                clearTimeout(this.timeout);
            };
            const resolve = value => {
                res(value);
            }
            this.withHandlers({
                resolve: resolve, 
                reject: reject,
            });
        });
    }
    finish() {
        const diff = this.getDifference();
        const total = this.getTotal();
        if (diff === 0 || total >= this.maxMillis) {
            this.running = false;
            this.timeout = null;
            this.handlers.resolve();
            return true;
        }
        return false;
    }
    finishLong() {
        if (this.finish()) return;
        const short = this.getShort();
        this.mark();
        const finishShort = () => (
            this.finishShort()
        );
        this.timeout = setTimeout(
            finishShort, 
            short
        );
    }
    finishShort() {
        if (this.finish()) return;
        const long = this.millis - this.getLong();
        this.mark();
        const finishLong = () => (
            this.finishLong()
        );
        this.timeout = setTimeout(
            finishLong, 
            long
        );
    }
    forceFinish() {
        if (!this.running) return;
        this.handlers.resolve();
        this.running = false;
        this.timeout = null;
    }
    abort(reason) {
        if (!this.running) return;
        this.handlers.reject(reason);
        this.running = false;
        this.timeout = null;
    }
}

export default function timer() {
    return new Timer({});
}