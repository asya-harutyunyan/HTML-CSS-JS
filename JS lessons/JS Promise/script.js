"use strict";

class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolveCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolve, onReject) {
    onResolve = typeof onResolve === "function" ? onResolve : (value) => value;
    onReject =
      typeof onReject === "function"
        ? onReject
        : (reason) => {
            throw reason;
          };

    if (this.state === "fulfilled") {
      return new MyPromise((resolve, reject) => {
        try {
          const result = onResolve(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }

    if (this.state === "rejected") {
      return new MyPromise((resolve, reject) => {
        try {
          const result = onReject(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }

    if (this.state === "pending") {
      return new MyPromise((resolve, reject) => {
        this.onResolveCallbacks.push((value) => {
          try {
            const result = onResolve(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectCallbacks.push((reason) => {
          try {
            const result = onReject(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  }

  catch(onReject) {
    return this.then(undefined, onReject);
  }
}

// Example usage:
const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error("Random number is greater than 0.5"));
    }
  }, 1000);
});

myPromise
  .then((value) => console.log("Resolved:", value))
  .catch((error) => console.error("Rejected:", error));
