
export const rgbToHex = (r, g, b) => {
    var r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal)
    return hexVal 
  }

  const pad = (n) => {
    return (n.length<2) ? "0"+n : n;
  }
