Constans is an visual and sound representation of mathemathical constants.
Idea is to visualy catch the fact that difference between quantity of occurence of individual number A && quantity of occurence of individual number B behind decimal point at certain moment is becoming less visible.
i.e :

      At 500 000th place behind decimal point occurence of numbers are [50047, 50083, 49735, 49770, 49777, 50021, 50095, 50084, 49865, 50524]
      #0 at 500 000th place behind decimal point has occured 50047 times
      #1 at 500 000th place behind decimal point has occured 50083 times
      #2  ....

This project is ment to find something interesting in constants. Maybe some properties which exists in all constants or interesting number series. 
There could be functions which do something interesting with digits behind decimal point, not just sort them based on quantity of occurences.


## Observations
------
 * Each individual number creates ~10% of all numbers up to 1 000 000 digits behind decimal point.
 * It's true for all constant numbers in /assets 
------
   
It looks like there is some harmony.

## How values for audio and d3 chart are obtained
    i ∈ {0,1,2,3,4,5,6,7,8,9}
    N < 1 000 000
    π = 3.14159265359 - 3  // 14159265359 ...
    c ∈ {π,φ,√2, ...} // assets/
    q = Array.from(π) // [1,4,1,5,9,2,6,5,3,5,9]
    data = window._CONSTANTS_GLOBAL._SORT2( q ) // data == [ [0,1,0,0,0,0,0,0,0,0],
                                                             [0,1,0,0,1,0,0,0,0,0],
                                                             [0,2,0,0,1,0,0,0,0,0],
                                                             [0,2,0,0,1,1,0,0,0,0],
                                                                    ... ]
    ///////////////////////////////////////////////////////////////////////////////
    // public/js/index.js (122)///////
    window._CONSTANTS_GLOBAL. _SORT2: function (data) {
    let arrays = [[],[],[],[],[],[],[],[],[],[]]
      
    let DataArray = []
    data.map(e => (() => { // 1st iteration e == 1 because q[0] == 1
        arrays[e].push(e) // e has same value as index
        DataArray.push(Object.values(arrays).map(e => e.length)) // maps length of arrays[0-9] and pushes to DataArray
      })()
    )
    return DataArray     //[[0,1,0,0,0,0,0,0,0,0], 1st occurence of #1  @ q[0]  **  DataArray[0] == data[0]
                          //[0,1,0,0,1,0,0,0,0,0], 1st occurence of #4  @ q[1]  **  DataArray[1] == data[1]
                          //[0,2,0,0,1,0,0,0,0,0], 2nd occurence of #1  @ q[2]  **  DataArray[2] == data[2]
                          //[0,2,0,0,1,1,0,0,0,0], 1st occurence of #5  @ q[3]  **  DataArray[3] == data[3]
                                                   Nth occurence of #i  @ q[N]  **  DataArray[N] == data[N]
                          ... ]}},
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    i ∈ {0,1,2,3,4,5,6,7,8,9}
    N < 1 000 000
    c ∈ {π,φ,√2, ...} // assets/ 
    q = Array.from( c ) 
    data = window._CONSTANTS_GLOBAL._SORT2( q )
    
    Q1: How many occurences of i are there up to Nth place behind decimal point in c
    A1: There are data[N][i] ocuurences of i up to Nth place behind decimal point in c
    
    Q2: How many occurences of #5 are there up to 12125th place behind decimal point in π 
         let i = 5
         let N = 12125
         q = Array.from( π ) 
         data[N] // [1162, 1197, 1203, 1226, 1208, 1207, 1295, 1223, 1220, 1185]
         data[N][i] // 1207
    A2: There are 1207 ocuurences of #5 up to 12125th place behind decimal point in π

## How d3.js chart works
------
    Update d3.js chart /views/index.hbs function topChart() *** line 154
    
    let B = 0
    var bars = g.selectAll('rect').data(data[B])
    
    B can iterate over data and plug values into d3.js chart 
    B is incremented by 1 in setInterval()
## How audio works
------
    //public/js/index.js ** line 143
    window._CONSTANTS_GLOBAL._SOUND: function (data) { // i.e data[15] is trough  == [1, 1, 0, 2, 2, 0, 1, 1, 5, 3]
    let maxValueOcurr = () => {
      const buffer = Object.assign([], data) // copy new array of data[15] - to avoid mutation
      let max = Math.max.apply(null,buffer) // max number from data[15] is 5
      let alpha = buffer.indexOf(max) // 9
      let output = []
      while (alpha != -1) { // alpha needs to be found ** ingore ?returns? while alpha is not found
        output.push(alpha) // if found push to output
        alpha = buffer.indexOf(max, alpha + 1) // than set alpha to indexOf(search for 5, start searching at index 6)
      }
      return output //  [9]
    }
    let minValueOcurr = () => { i.e data[15] is running  == [1, 1, 0, 2, 2, 0, 1, 1, 5, 3]
      const buffer = Object.assign([], data)
      let min = Math.min.apply(null,buffer) // min number is 0
      let alpha = buffer.indexOf(min)
      let output = []
      while (alpha != -1) {
        output.push(alpha)
        alpha = buffer.indexOf(min, alpha + 1)// than set alpha to indexOf(search for 5, start searching at index 6)
      }
      return output // [2,5]
    }
    return {
      maxValueOcurr : maxValueOcurr(),
      minValueOcurr : minValueOcurr()
    }
    }
    //////////////////////////////////////////////////////////////////////////
    window._CONSTANTS_GLOBAL._SOUND is plugged in views/index.hbs (249 - 250)
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let minSound =  () => window._CONSTANTS_GLOBAL._SOUND(data[15]).minValueOcurr // minSound == [2,5] ** numbers in array are indexes where min number is located in data[15]
    let maxSound = () => window._CONSTANTS_GLOBAL._SOUND(data[15]).maxValueOcurr // maxSound == [9] ** it is not a value but index of max number in data[15]

    let chroma = { // chroma is chromatic scale https://en.wikipedia.org/wiki/Chromatic_scale
           chroma0 : new Howl({src: [`lib/howler/sound/0_${'chroma'}.mp3`],loop: false}), // represents left* note** on chromatic scale
           chroma1 : new Howl({src: [`lib/howler/sound/1_${'chroma'}.mp3`],loop: false}),
           chroma2 : new Howl({src: [`lib/howler/sound/2_${'chroma'}.mp3`],loop: false}),
           chroma3 : new Howl({src: [`lib/howler/sound/3_${'chroma'}.mp3`],loop: false}),
           chroma4 : new Howl({src: [`lib/howler/sound/4_${'chroma'}.mp3`],loop: false}),
           chroma5 : new Howl({src: [`lib/howler/sound/5_${'chroma'}.mp3`],loop: false}),
           chroma6 : new Howl({src: [`lib/howler/sound/6_${'chroma'}.mp3`],loop: false}),
           chroma7 : new Howl({src: [`lib/howler/sound/7_${'chroma'}.mp3`],loop: false}),
           chroma8 : new Howl({src: [`lib/howler/sound/8_${'chroma'}.mp3`],loop: false}),
           chroma9 : new Howl({src: [`lib/howler/sound/9_${'chroma'}.mp3`],loop: false}),// represents right* note** on chromatic scale
           }

    function audio () {
          function min_max_sound () {
            let keys = Object.keys(chroma)
            chroma[keys[maxSound()[0]]].play() // plugs 0th index of [9] which is 9 or chroma["chroma9"] and plays it. It is max number in one iteration 
            chroma[keys[minSound()[0]]].play() // plugs 0th index of [2,5] which is 2 or chroma["chroma2"] and plays it.
                                               // minSound()[0] are just idexes therefore they has same value so only one return is fine.
          }
          function current_number_sound () {
            let keys = Object.keys(chroma)
            chroma[keys[data[15]]].play() // plays current number being processed in q.
          }
            
        *Chromatic scale has more than 10 notes** therefore ,in decimal system, I can choose how values will be mapped.

        Used file: https://en.wikipedia.org/wiki/Chromatic_scale; Has 26 notes**.
        [♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪,♪].length == 26
        I choosed to map middle 10 notes.
        [♪,♪,♪,♪,♪,♪,♪,♪,chroma0,chroma1,chroma2,chroma3,chroma4,chroma5,chroma6,chroma7,chroma8,chroma9,♪,♪,♪,♪,♪,♪,♪,♪]
        
        This can be done in all other musical scales. Depends on quantity of notes** and system how their mapped values will be represent.
        
        ** Not sure if represents note or pitch or some other term.
------
 * [Source](https://www.youtube.com/watch?v=wPn4tgmU8ek)
 * [gradient](https://uigradients.com/#Jupiter)
 * [data](http://www.numberworld.org/constants.html)

Stack : 
 * d3.js
 * JS
 * Express
 * Howler
 * HandleBars
 * Webpack
 * SASS
 * Bootstrap
 * jQuery

## Develop
------
  
   `$ git clone` 

   `$ npm i`

   `$ npm run startDev`

   `localhost:3000`