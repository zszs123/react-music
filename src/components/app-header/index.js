import React, { memo, useState } from "react";
import { withRouter } from "react-router-dom";

import { headerLinks } from "@/common/local-data";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { HeaderWrapper } from "./style";

function HYAppHeader(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(props);

  function selectItemCliack(link, index) {
    setActiveIndex(index);
    props.history.push(link);
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="headerLeft">
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          {headerLinks.map((item, index) => (
            <div
              href={item.link}
              key={item.title}
              className={`select-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => selectItemCliack(item.link, index)}
            >
              {item.title}
              <i
                className={`sprite_01 icon ${
                  activeIndex === index ? "active" : ""
                }`}
              ></i>
            </div>
          ))}
        </div>
        <div className="headerRight">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
}

export default withRouter(memo(HYAppHeader));
