import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;

    .top-menu {
      padding-top: 2px;
      padding-left: 182px;

      .item {
        display: inline-block;
        line-height: 20px;
        padding: 0 13px;
        margin: 0 17px;
        color: #fff;

        &:hover,
        &.active {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`;
