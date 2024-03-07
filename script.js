/* Завдання 3 */
function findLongesWord(string){
    let array = string.split(" ")
    let longestWord = ""
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestWord.length){
            longestWord = array[i]
        }
    }
    return longestWord
}


console.log(findLongesWord("Hello World! How are you?"))

console.log("BREAK")

/* Завдання 7 */

let logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123']

function addloginUser(allLogins, login){
    function isLoginValid(login){
        return login.length >= 4 && login.length <= 16
    }
    function isLoginUnique(allLogins, login){
        return allLogins.includes(login)
    }
    if(!isLoginValid(login)){
        return "Треба рядок від 4-х до 16-ти символів"
    }
    if(isLoginUnique(allLogins, login)){
        return "Такий логін вже використовується"
    }
    allLogins.push(login)
    return "Логін успішно доданий"
}

console.log(addloginUser(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addloginUser(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addloginUser(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addloginUser(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'

console.log("BREAK")

/* Завдання 1 */

function logItems(array){
    for(let i = 0; i < array.length; i++){
        console.log(`${i +1} - ${array[i]}`)
    }
}
logItems(["Mango", "Poly", "Ajax", "Jooy", "Cool"])

console.log("BREAK")

/*  Завдання 2 */

console.log("Обручка - 1000грн, ", "Діадема-1600грн, ", "Браслет-750грн, ", "Ланцюжок - 1100грн")

function calculationNumbers(n, m, g, b){
    console.log(n + m + g + b)
}

calculationNumbers(1000, 1100, 1600, 750)

console.log("BREAK")
