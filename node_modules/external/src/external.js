function makePromise (x) {
  return new Promise (function (resolve) {
    setTimeout(function () {
      resolve(x * 3)
    }, 100)
  })
}

export default async function (x) {
  const result = await makePromise(x)
  return result
}
