import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    
    .headerLeft {
      display: flex;
      align-items: center;
      background-color: #242424;
      
      .logo {
        display: block;
        height: 70px;
        width: 176px;
        background-position: 0 0;
        text-indent: -9999px;
      }

      .select-item {
        position: relative;
        display: block;
        line-height: 70px;
        padding: 0 20px;
        color: #ccc;

        :hover {
          color: #fff;
          background: #000;
        }

        &.active {
          color: #fff;
          background: #000;
        }

        .active.icon  {
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 7px;
          bottom: -1px;
          left: 50%;
          transform: translate(-50%, 0);
          background-position: -226px 0;
        }
      }

      div:last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          right: -15px;
        }
      }
    }

    .headerRight {
      display: flex;
      align-items: center;
      color: #ccc;
      font-size: 12px;
    
      .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
    
        input {
          font-size: 12px;
        }
      }
    
      .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
      }
    }
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

