export default function filterNullFromArr(arr) {
    return arr.filter(obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === null) {
                return false;
            }
        }
        return true;
    });
}