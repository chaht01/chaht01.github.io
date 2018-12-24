import { css } from "styled-components";
const sizes = {
  sm: 640,
  md: 960,
  lg: 1200
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
