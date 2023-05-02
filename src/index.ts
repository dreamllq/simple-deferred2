export default class Deferred<T> {
	promise;
	resolve?: (value: T | PromiseLike<T>) => void = undefined;
	reject?: (reason?: any) => void = undefined;

	constructor(){
		this.promise = new Promise<T>((resolve, reject)=>{
			this.resolve = resolve;
			this.reject = reject;
		})
		Object.freeze(this)
	}
};