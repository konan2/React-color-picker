
export const hexToRgb = (hex) => {
    let rgb = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

    let obj = {
        red: rgb[0],
        green: rgb[1],
        blue: rgb[2],
    }

    return obj
}
