import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FootContainer>
      <CompanyContainer>
        <div>주식회사 유니크굿 컴퍼니</div>
        <div>
          <div>
            사업자등록번호 524-88-00746 | 통신판매업신고번호
            2018-서울성동-0760호 대표이사 이은영,송인혁 | 서울특별시 성동구
            연무장13길 8, 메리히어 3층 전화 070-8706-1010
          </div>
        </div>
      </CompanyContainer>
      <ContactContainer>
        <div>Contact</div>
        <Socialbtn>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJ0d2l0dGVyX2ljb24iIHdpZHRoPSIzMy43OCIgaGVpZ2h0PSIzMy43OCIgdmlld0JveD0iMCAwIDUwIDUwIj4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHN0eWxlPg0KICAgICAgICAgICAgLmNscy0ye2ZpbGw6I2ZmZn0NCiAgICAgICAgPC9zdHlsZT4NCiAgICA8L2RlZnM+DQogICAgPHBhdGggaWQ9Iu2MqOyKpF83MCIgZmlsbD0iIzFkYTFmMiIgZD0iTTcwMS42MDkgMTE5Ljg0YTI1IDI1IDAgMSAxLTI1LTI1IDI1IDI1IDAgMCAxIDI1IDI1em0wIDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTEuNjA5IC05NC44NCkiLz4NCiAgICA8ZyBpZD0i6re466O5XzI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjY3NSAxMi42ODMpIj4NCiAgICAgICAgPHBhdGggaWQ9Iu2MqOyKpF84NSIgZD0iTTcxMC45OTIgMTM2LjUyNmE0LjM4MiA0LjM4MiAwIDAgMS0xLjI3NS4xNjZsLjAyMy0uMTM1YTEwLjQ2NCAxMC40NjQgMCAwIDAgMi41Ni0yLjkyNmMuMS0uMzMtLjAxNy0uNDQ0LS4wMTgtLjQ1NGwtMi4xMzkuOTA4LTEuNzkuODA4YTcuMTM4IDcuMTM4IDAgMCAwLTUuMi0yLjE0MWMtMy43MjEgMC02LjczOCAyLjYzNi02LjczOCA1Ljg4OWE4Ljc0NCA4Ljc0NCAwIDAgMCAuMjc1IDIuMjIxYzAgLjE3LjAwNy0uMTcxIDAgMGEyMS4wMjEgMjEuMDIxIDAgMCAxLTguMi0yLjQzNGMtNS40LTIuNzM0LTUuNzMzLTQuNjI2LTUuNzMzLTQuNjI2LS44NDcuOS0xLjI4NSAzLjg3OS0uNDI2IDYuMjE1YTcuNzQzIDcuNzQzIDAgMCAwIDIuNDQgMi44MzggNS43MjYgNS43MjYgMCAwIDEtMS43MzEtLjI4NCAzLjgzMSAzLjgzMSAwIDAgMS0xLjIyLS42Yy0uNTI2IDEuMjg0LjUzIDMuNTc3IDIuMzU2IDUuMjIxYTkuNjcyIDkuNjcyIDAgMCAwIDMuMDA4IDEuNTYxbC0zLjAzNi4wODVjLS4xNzEgMi45NTEgNi4xODkgNC43IDYuMTg5IDQuN2ExMC40IDEwLjQgMCAwIDEtNi4zNDUgMi4zMDcgMTIuMDkzIDEyLjA5MyAwIDAgMS0zLjQ2NS0uNTA5IDE2LjUyMiAxNi41MjIgMCAwIDAgMTEuMjc5IDQuMDQxYzExLjM1NS0uNiAxNy43NjYtMTAuMzU4IDE4LjA3MS0xOS45NDRsLjAxNS4wMmE3Ljk3OSA3Ljk3OSAwIDAgMCAxLjY2OS0xLjQgMTEuNzYzIDExLjc2MyAwIDAgMCAxLjg0NS0yLjQ2OXMtMS43Ljc0NS0yLjQxNC45NDJ6IiBjbGFzcz0iY2xzLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODAuNTI4IC0xMzIuNzUyKSIvPg0KICAgICAgICA8cGF0aCBpZD0i7Yyo7IqkXzg2IiBkPSJNNzc1LjQ0OCAxMzQuMDI0Yy4wMDguMTgyIDAgLjAxOCAwIDB6IiBjbGFzcz0iY2xzLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NDMuNjkzIC0xMzMuNTk4KSIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"
              alt="트위터"
            />
          </button>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwcmVmaXhfX2luc3RhZ3JhbS1pY29uIiB3aWR0aD0iMzMuNzgiIGhlaWdodD0iMzMuNzgiIHZpZXdCb3g9IjAgMCAzMy43OCAzMy43OCI+DQogICAgPGRlZnM+DQogICAgICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icHJlZml4X19yYWRpYWwtZ3JhZGllbnQiIGN4PSIuMzUxIiBjeT0iLjk3NSIgcj0iLjk5IiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+DQogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZWMwNTMiLz4NCiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjMyNyIgc3RvcC1jb2xvcj0iI2YyMjAzZSIvPg0KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQ4IiBzdG9wLWNvbG9yPSIjYjcyOWE4Ii8+DQogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1MzQyZDYiLz4NCiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4NCiAgICAgICAgPHN0eWxlPg0KICAgICAgICAgICAgLnByZWZpeF9fY2xzLTJ7ZmlsbDojZmZmfQ0KICAgICAgICA8L3N0eWxlPg0KICAgIDwvZGVmcz4NCiAgICA8cGF0aCBpZD0icHJlZml4X1/tjKjsiqRfMjA5IiBmaWxsPSJ1cmwoI3ByZWZpeF9fcmFkaWFsLWdyYWRpZW50KSIgZD0iTTU1OC4zNTUgNzUyLjY5NGExNi44OSAxNi44OSAwIDEgMS0xNi44OS0xNi44OSAxNi44OSAxNi44OSAwIDAgMSAxNi44OSAxNi44OXptMCAwIiBkYXRhLW5hbWU9Iu2MqOyKpCAyMDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MjQuNTc1IC03MzUuODA0KSIvPg0KICAgIDxnIGlkPSJwcmVmaXhfX+q3uOujuV80MDQiIGRhdGEtbmFtZT0i6re466O5IDQwNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4xMiA2LjEyKSI+DQogICAgICAgIDxnIGlkPSJwcmVmaXhfX+q3uOujuV80MDEiIGRhdGEtbmFtZT0i6re466O5IDQwMSI+DQogICAgICAgICAgICA8cGF0aCBpZD0icHJlZml4X1/tjKjsiqRfMjE5IiBkPSJNNTU2LjU3MyA3NzMuOTMzaC05LjI3OWE2LjEzNyA2LjEzNyAwIDAgMS02LjEzLTYuMTN2LTkuMjc5YTYuMTM4IDYuMTM4IDAgMCAxIDYuMTMtNi4xMzFoOS4yNzlhNi4xMzggNi4xMzggMCAwIDEgNi4xMzEgNi4xMzF2OS4yNzZhNi4xMzcgNi4xMzcgMCAwIDEtNi4xMzEgNi4xMzN6bS05LjI3OS0xOS42OTNhNC4yODkgNC4yODkgMCAwIDAtNC4yODQgNC4yODR2OS4yNzZhNC4yODkgNC4yODkgMCAwIDAgNC4yODQgNC4yODRoOS4yNzlhNC4yODkgNC4yODkgMCAwIDAgNC4yODQtNC4yODR2LTkuMjc5YTQuMjg5IDQuMjg5IDAgMCAwLTQuMjg0LTQuMjg0eiIgY2xhc3M9InByZWZpeF9fY2xzLTIiIGRhdGEtbmFtZT0i7Yyo7IqkIDIxOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0MS4xNjQgLTc1Mi4zOTMpIi8+DQogICAgICAgIDwvZz4NCiAgICAgICAgPGcgaWQ9InByZWZpeF9f6re466O5XzQwMiIgZGF0YS1uYW1lPSLqt7jro7kgNDAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjI1NSA1LjI1NSkiPg0KICAgICAgICAgICAgPHBhdGggaWQ9InByZWZpeF9f7Yyo7IqkXzIyMCIgZD0iTTU2MC40ODIgNzc3LjIyNmE1LjUxNSA1LjUxNSAwIDEgMSA1LjUxOC01LjUxNSA1LjUyMSA1LjUyMSAwIDAgMS01LjUxOCA1LjUxNXptMC05LjE4NGEzLjY2OSAzLjY2OSAwIDEgMCAzLjY2OSAzLjY2OSAzLjY3MyAzLjY3MyAwIDAgMC0zLjY2OS0zLjY2OXoiIGNsYXNzPSJwcmVmaXhfX2Nscy0yIiBkYXRhLW5hbWU9Iu2MqOyKpCAyMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NTQuOTY3IC03NjYuMTk2KSIvPg0KICAgICAgICA8L2c+DQogICAgICAgIDxnIGlkPSJwcmVmaXhfX+q3uOujuV80MDMiIGRhdGEtbmFtZT0i6re466O5IDQwMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMTk2IDMuNjE0KSI+DQogICAgICAgICAgICA8cGF0aCBpZD0icHJlZml4X1/tjKjsiqRfMjIxIiBkPSJNNTgzLjczMiA3NjMuMjExYTEuMzI1IDEuMzI1IDAgMSAxLTEuMzI1LTEuMzI2IDEuMzI2IDEuMzI2IDAgMCAxIDEuMzI1IDEuMzI2eiIgY2xhc3M9InByZWZpeF9fY2xzLTIiIGRhdGEtbmFtZT0i7Yyo7IqkIDIyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4MS4wODEgLTc2MS44ODUpIi8+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4NCg=="
              alt="인스타"
            />
          </button>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwcmVmaXhfX25hdmVyLWljb24iIHdpZHRoPSIzMy43OCIgaGVpZ2h0PSIzMy43OCIgdmlld0JveD0iMCAwIDMzLjc4IDMzLjc4Ij4NCiAgICA8ZyBpZD0icHJlZml4X1/qt7jro7lfNDEwIiBkYXRhLW5hbWU9Iuq3uOujuSA0MTAiPg0KICAgICAgICA8cGF0aCBpZD0icHJlZml4X1/tjKjsiqRfMjA5IiBmaWxsPSIjMDNjZjVkIiBkPSJNNTU4LjM1NSA3NTIuNjk0YTE2Ljg5IDE2Ljg5IDAgMSAxLTE2Ljg5LTE2Ljg5IDE2Ljg5IDE2Ljg5IDAgMCAxIDE2Ljg5IDE2Ljg5em0wIDAiIGRhdGEtbmFtZT0i7Yyo7IqkIDIwOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyNC41NzUgLTczNS44MDQpIi8+DQogICAgPC9nPg0KICAgIDxwYXRoIGlkPSJwcmVmaXhfX+2MqOyKpF8yMjkiIGZpbGw9IiNmZmYiIGQ9Ik0xNzIuMzM0IDI1Ni44MzFsLTYuNzA2LTkuNjM0aC01LjU1OXYxOGg1LjgyNHYtOS42MzRsNi43MDcgOS42MzdoNS41NTl2LTE4aC01LjgyNHoiIGRhdGEtbmFtZT0i7Yyo7IqkIDIyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Mi4wMjYgLTIzOS4xMjIpIi8+DQo8L3N2Zz4NCg=="
              alt="네이버"
            />
          </button>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwcmVmaXhfX3lvdXR1YmUtLWljb24iIHdpZHRoPSIzMy43OCIgaGVpZ2h0PSIzMy43OCIgdmlld0JveD0iMCAwIDMzLjc4IDMzLjc4Ij4NCiAgICA8ZyBpZD0icHJlZml4X1/qt7jro7lfNDA5IiBkYXRhLW5hbWU9Iuq3uOujuSA0MDkiPg0KICAgICAgICA8cGF0aCBpZD0icHJlZml4X1/tjKjsiqRfMjA5IiBmaWxsPSIjZDAwIiBkPSJNNTU4LjM1NSA3NTIuNjk0YTE2Ljg5IDE2Ljg5IDAgMSAxLTE2Ljg5LTE2Ljg5IDE2Ljg5IDE2Ljg5IDAgMCAxIDE2Ljg5IDE2Ljg5em0wIDAiIGRhdGEtbmFtZT0i7Yyo7IqkIDIwOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyNC41NzUgLTczNS44MDQpIi8+DQogICAgPC9nPg0KICAgIDxnIGlkPSJwcmVmaXhfX3lvdXR1YmUtc3ltYm9sIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjAzMiA5LjIyMSkiPg0KICAgICAgICA8cGF0aCBpZD0icHJlZml4X1/tjKjsiqRfMjI4IiBmaWxsPSIjZmZmIiBkPSJNMjEuNjA5IDE3LjE0MmEyLjc3OCAyLjc3OCAwIDAgMC0yLjM3Ny0yLjE2MSA3My44ODMgNzMuODgzIDAgMCAwLTguMjM0LS4zIDczLjkgNzMuOSAwIDAgMC04LjIzNS4zIDIuNzc3IDIuNzc3IDAgMCAwLTIuMzc2IDIuMTYxQTIzLjU0OSAyMy41NDkgMCAwIDAgMCAyMi4zMzlhMjMuNTQyIDIzLjU0MiAwIDAgMCAuMzgzIDUuMkEyLjc3NyAyLjc3NyAwIDAgMCAyLjc1OSAyOS43YTczLjgzMSA3My44MzEgMCAwIDAgOC4yMzQuMyA3My44MTYgNzMuODE2IDAgMCAwIDguMjM0LS4zIDIuNzc5IDIuNzc5IDAgMCAwIDIuMzczLTIuMTYzIDIzLjUzIDIzLjUzIDAgMCAwIC4zODUtNS4yIDIzLjU0NSAyMy41NDUgMCAwIDAtLjM3Ni01LjE5NXptLTEzLjQ1MiA4LjYxdi03LjI3MWw2Ljk5IDMuNjQ3eiIgZGF0YS1uYW1lPSLtjKjsiqQgMjI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xNC42NzYpIi8+DQogICAgPC9nPg0KPC9zdmc+DQo="
              alt="유투브"
            />
          </button>
        </Socialbtn>
        <button>문의하기</button>
      </ContactContainer>
      <BusinessContainer>
        <div>Business</div>
        <button>게임 제작 문의하기</button>
      </BusinessContainer>
    </FootContainer>
  );
};

export default Footer;

const FootContainer = styled.footer`
  position: relative;
  background-color: #0a111e;

  padding: 20px 100px 60px 400px;

  width: 100%;
  min-height: 100%;

  display: flex;
`;

const CompanyContainer = styled.div`
  width: 500px;
  display: block;
  div {
    color: white;
    margin-top: 5px;
  }
`;
const ContactContainer = styled.div`
  width: 200px;

  display: grid;
  div {
    color: white;
    margin-top: 5px;
  }
  button {
    color: white;
    background-color: #c869ff;
    border-radius: 20px;
  }
`;
const Socialbtn = styled.div`
  display: flex;

  button {
    color: white;
    border-radius: 20px;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;
const BusinessContainer = styled.div`
  width: 300px;
  display: grid;

  div {
    color: white;
    margin-top: 5px;
  }
  button {
    background-color: #0a111e;
    color: white;
    border-radius: 20px;
    border: 1px solid white;
    height: 35px;
  }
`;
