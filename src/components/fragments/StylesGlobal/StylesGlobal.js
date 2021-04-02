import React, { memo } from "react";
import { Fonts, Normalize, Default } from "./StylesGlobal.styled";

const GlobalStyles = () => (
  <>
    <Fonts />
    <Normalize />
    <Default />
  </>
);

export default memo(GlobalStyles);
