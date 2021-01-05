const getAllResolvedResilt=<T>(promises:Promise<T>[])=>Promise.all(promises)

getAllResolvedResilt<any>([Promise.resolve(true),Promise.resolve('hello')])
    .then(result=> console.log(result))


getAllResolvedResilt<any>([Promise.reject(new Error('error')),Promise.resolve(1)])
    .then(result=>console.log(result))
    .catch(error=>console.log('error:',error.message))