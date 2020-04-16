let arrayOfWords = ['cucumbers', 'tomatoes','avacado']
let complicatedArray = ['cucumber', 44, true]

function allCaps(array){
    return new Promise((resolve, reject) =>{
        let capsArray = array.map(word => {

            if(typeof word ==='string'){
                return word.toUpperCase()
            } else {
                reject('Error: Not all items in the array are strings')
            }
        })
        resolve(capsArray)
    })
}

function sortWords(array){
    return new Promise((resolve, reject) => {
        if(array) {
            array.forEach((el) => {
                if(typeof el !=)
            })
        }
    })
}