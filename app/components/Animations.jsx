"use client";
/** @jsxImportSource @emotion/react */
import {keyframes} from "@emotion/react";
export const appearing = keyframes`
0%{
opacity:0;
}
100%{
opacity:0.8
}
`;

export const float = keyframes`
  0% {
    opacity: 0.9;
    transform: translateY(10%);
  }
  50% {
    opacity: 1;
    transform: translateY(-10%);
  }
  100%{
  opacity:0.9;
  transform:translateY(10%)
  }  

`;
