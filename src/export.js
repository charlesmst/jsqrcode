function setCallback(c){
    qrcode.callback = c
}
function decode(dataUrl){
    qrcode.decode(dataUrl)
}
module.exports = {
    setCallback,
    decode
}