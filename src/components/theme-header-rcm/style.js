import styled from "styled-components";

export const ThemeHeaderRcmWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 0 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-position: -225px -156px;

  .left {
    display: flex;
    align-items: center;

    h3 {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    span {
      padding: 0 15px;
      border-right: 1px solid #d3d3d3;

      :last-child {
        border: 0;
      }
    }
  }

  .right {
  }
`;
