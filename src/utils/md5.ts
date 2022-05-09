import CryptoJS from "crypto-js";


export default (value : string) => {
    return CryptoJS.MD5('value' + 'Szk25623').toString()
}