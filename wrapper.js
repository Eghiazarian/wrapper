let wrap = document.getElementById('wrap')
let divResult = document.getElementById('result')
wrap.onclick = () => {
    let text = document.getElementById('text').value
    divResult.innerHTML = `<div>${strWrapper(text, "[", "]")}</div>`
}
function strWrapper(str, left = "«", right = "»") {
    return str ? left + str + right : "null"
}