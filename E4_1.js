// Задание E4.1.

function getObjectItems(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`key: ${key}, value: ${obj[key]}`);
        }
    }
}
