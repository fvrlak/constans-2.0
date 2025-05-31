window._CONSTANTS_GLOBAL = {
  _SORT: function (data) {
    arrays = {
      _zero: [],
      _one: [],
      _two: [],
      _three: [],
      _four: [],
      _five: [],
      _six: [],
      _seven: [],
      _eight: [],
      _nine: []
    }
    DataArray = []
    data.map(el => {
      if (el == 0) {
        arrays._zero.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 1) {
        arrays._one.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 2) {
        arrays._two.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 3) {
        arrays._three.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 4) {
        arrays._four.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 5) {
        arrays._five.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 6) {
        arrays._six.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 7) {
        arrays._seven.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 8) {
        arrays._eight.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
      if (el == 9) {
        arrays._nine.push(el)
        DataArray.push(Object.values(arrays).map(e => e.length))
      }
    })

    return DataArray
  },
  _ANALYSIS: function (data) {
    const len = data.length
    let range = () => {
      const buffer = Object.assign([], data)
      let min = Math.min.apply(null, buffer)
      let max = Math.max.apply(null, buffer)
      return max - min
    }
    let aMean = () => {
      const buffer = Object.assign([], data)
      return buffer.reduce((p, c) => p + c) / len
    }
    let median = () => {
      const buffer = Object.assign([], data)
      let alpha = Object.assign([], buffer).sort((a, b) => a - b)
      let beta = alpha[4] + alpha[5]
      return beta / 2
    }
    let std = () => {
      const buffer = Object.assign([], data)
      return Math.sqrt(
        buffer.map(e => {
            let sqDelta = []
            let deltaMean = e - aMean()
            sqDelta.push(Math.pow(deltaMean, 2))
            return sqDelta[0]
          })
          .reduce((p, c) => p + c) / len
      )
    }
    let hMean = () => {
      const buffer = Object.assign([], data)
      return len / buffer.map(e => 1 / e).reduce((p, c) => p + c) // bad
    }
    let gMean = () => {
      const buffer = Object.assign([], data)
      return Math.pow(buffer.reduce((p, c) => p * c), 1 / len)
    }
    let meanRange = () => {
      return Math.abs(aMean() - hMean())
    }
    Array.prototype.maxValue = () => {
      const buffer = Object.assign([], data)
      return Math.max.apply(null, buffer)
    }
    Array.prototype.minValue = () => {
      const buffer = Object.assign([], data)
      return Math.min.apply(null, buffer)
    }
    return {
      range: range(),
      meanRange: meanRange(),
      aMean: aMean(),
      median: median(),
      std: std(),
      hMean: hMean(),
      gMean: gMean(),
      maxValue: Array.prototype.maxValue(),
      minValue: Array.prototype.minValue(),
    }
  },
  _SORT2: function (data) {
    let arrays = [[],[],[],[],[],[],[],[],[],[]]
      
    let DataArray = []
    data.map(e => (() => {
        arrays[e].push(e)
        DataArray.push(Object.values(arrays).map(e => e.length))
      })()
    )
    return DataArray
  },
  _SOUND: function (data) {
    let maxValueOcurr = () => {
      const buffer = Object.assign([], data)
      let max = Math.max.apply(null,buffer)
      let alpha = buffer.indexOf(max)
      let output = []
      while (alpha != -1) { // alpha needs to be found ** ingore ?returns? while alpha is not found
        output.push(alpha)
        alpha = buffer.indexOf(max, alpha + 1)
      }
      return output
    }
    let minValueOcurr = () => {
      const buffer = Object.assign([], data)
      let min = Math.min.apply(null,buffer)
      let alpha = buffer.indexOf(min)
      let output = []
      while (alpha != -1) {
        output.push(alpha)
        alpha = buffer.indexOf(min, alpha + 1)
      }
      return output
    }
    return {
      maxValueOcurr : maxValueOcurr(),
      minValueOcurr : minValueOcurr()
    }

  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
function cFunction (alpha) {
  let data = Object.assign([],constant_data_array)
      .map(e => JSON.stringify(e))
      .reduce((p,c) => p + c)
  let output = []
  for (let i = 0; i < data.length; i++) {
    if(data.substring(i,i + alpha.length) == alpha) {
      output.push(i)
    }
  }
  return output
  }
function rExp(v) {
let data = Object.assign([],constant_data_array)
  .map(e => JSON.stringify(e))
  .reduce((p,c) => p + c)
let alpha = new RegExp(v,'g')
let beta;
while((beta = alpha.exec(data))) {
  let msg = `${beta[0]} + ${alpha.lastIndex}`
  console.log(msg)
}
}