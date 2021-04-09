/**
 * 
 * @param { Array } dummyData 
 */

export default function initializeData(dummyData, sortState) {
    
    let clone = Object.assign([], dummyData)

    const obj = clone.reduce((acc, c) => {
        const letter = c.title[0];
        acc[letter] = (acc[letter] || []).concat(c);
        return acc;
    }, {})

    // `map` over the object entries to return an array of objects
    // In first render sort it as A-Z
    clone = Object.entries(obj).map(([letter, data]) => {
        return { letter, data }
    })

    let sortedData = []
    if (sortState) {
        sortedData = clone.sort((a, b) => {
            if (a.letter < b.letter) return -1
            else if (a.letter > b.letter) return 1
            return 0
        })
    } else {
        sortedData = clone.sort((a, b) => {
            if (a.letter > b.letter) return -1
            else if (a.letter < b.letter) return 1
            return 0
        })
    }

    return sortedData
}