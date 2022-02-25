import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { RightCircleOutlined } from "@ant-design/icons";

import { ThemeHeaderRcmWrapper } from "./style";

export default memo(function ThemeHeaderRcm(props) {
  const { title, keyWords = [], moreLink="/", keyWordClick } = props;

  return (
    <ThemeHeaderRcmWrapper className="sprite_02">
      <div className="left">
        <h3>{title}</h3>
        {keyWords.map((item, index) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="right">
        <NavLink to={moreLink}>
          更多&nbsp;&nbsp;
          <RightCircleOutlined />
        </NavLink>
      </div>
    </ThemeHeaderRcmWrapper>
  );
});
