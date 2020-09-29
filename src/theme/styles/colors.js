const baseColor = {
  primaryColor: "#00AEEF", // blueish
  secondaryColor: "#EE2A7B", // like pink
  tertiaryColor: "#FFC841", // like yellow
  primaryColorShade: "#2C5697", // blue shades
  supportingColor: "#A2C617", // green shades
  supportingColor2: "#dfae2c",
  danger: "red",
  white: "#ffffff",
  dark: "#0D0D0D",
  darkGrey: "#505050",
  coolGrey: "#737373",
  waterMarkGrey: "#b0b0b0",
  specialGrey: "#a8a8a8",
  darkYellow: "#dfae2c",
  borderColor: "#F6F6F5",
  // for header bars
  lightGreyAlpha: "#f6f6f6",
  lightGreyBeta: "#e2e2e2",
  lightGreyTheta: "#eeeeee",
  transparent: "transparent",
}

const isHex = (color = "") => color.length >= 3 && color.charAt(0) === "#"
const isRGB = (color = "") => color.toLowerCase().substring(0, 3) === "rgb"

const colors = {
  ...baseColor,
}

const getColorForString = (colorString = "") => {
  if (!colorString) return null

  const isValidColorString = isHex(colorString) || isRGB(colorString)
  return isValidColorString ? colorString : colors[colorString]
}

export default {
  ...colors,
  get: getColorForString,
}
