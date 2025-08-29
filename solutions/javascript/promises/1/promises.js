export const promisify = (func) => {
  return function (arg) {
    return new Promise(function (resolve, reject) {
      func(arg, (err, result) => {
        if (err) {
          reject(err);
        } else if (result) {
          resolve(result);
        }
      });
    });
  };
};

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises) {
      return resolve(undefined);
    }
    if (!promises.length) {
      return resolve([]);
    }
    
    let results = Array.from({length: promises.length}, () => null);
    let completeCount = 0;
    
    promises.forEach((promise, index) => promise.then((result) => 
      {results[index] = result;
       completeCount++;
       if (completeCount === results.length) {
         return resolve(results);
       }  
      }).catch((err) => reject(err)));
  });
};

export const allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises) {
      return resolve(undefined);
    }
    if (!promises.length) {
      return resolve([]);
    }

    let results = Array.from({ length: promises.length }, () => null);
    let completeCount = 0;

    promises.forEach((promise, index) =>
      promise
        .then((result) => {
          results[index] = result;
          completeCount++;
          if (completeCount === results.length) {
            return resolve(results);
          }
        })
        .catch((err) => {
          results[index] = err;
          completeCount++;
          if (completeCount === results.length) {
            return resolve(results);
          }
        })
    );
  });
};


export const race = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises) {
      return resolve(undefined);
    }
    if (!promises.length) {
      return resolve([]);
    }

    promises.forEach((promise, index) =>
      promise.then((result) => resolve(result)).catch((err) => reject(err))
    );
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises) {
      return resolve(undefined);
    }
    if (!promises.length) {
      return resolve([]);
    }

    let errs = Array.from({ length: promises.length }, () => null);
    let errCount = 0;

    promises.forEach((promise, index) =>
      promise
        .then((result) => resolve(result))
        .catch((err) => {
          errs[index] = err;
          errCount++;
          if (errCount === errs.length) reject(errs);
        })
    );
  });
};

