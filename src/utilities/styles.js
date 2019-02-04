export const colors = {
  white: `#fff`,
  black: `#000`,
  grey: `#757575`,
  purple: `#8e24aa`,
  blue: `#1e88e5 `,
  deepPurple: `#6a1b9a `,
  green: `#43a047`,
  lightGreen: `#7cb342 `
};

export const transitionDefault = 'transition: all 0.3s ease-in-out';

export const transitionFunction = (
  property = 'all',
  time = '0.3s',
  type = 'linear'
) => {
  return `transition: ${property} ${time} ${type}`
}

export const transitionObject = ({
  property = 'all',
  time = '0.3s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out"
}) => {
  return `transition: ${property} ${time} ${type}`;
};

export const letterSpacing = ({ spacing = '0.1rem'}) => {
  return `letter-spacing:${spacing}`
}

// Styles for the border of elements.
export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}
