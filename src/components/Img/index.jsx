import React from "react";
import styled from "styled-components";

export default function Img({ src, alt, width, height }) {

  return (
    <ImageStyled
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}

const ImageStyled = styled.img`
    object-fit: contain;
`