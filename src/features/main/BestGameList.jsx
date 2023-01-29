import React from "react";
import styled from "styled-components";
import CategoryCards from "../../components/gameInfoCard/CategoryCards";
import CategoryMenu from "../../components/CategoryMenu";

const BestGameList = () => {
  return (
    <>
      <CategoryContainer>
        <div>
          <CategoryMenu>카테고리</CategoryMenu>
        </div>
        <CategoryList>
          <CategoryListItem>
            <CategoryListItemImgWrap>
              <CategoryIconImg
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3e %3cdefs%3e %3cstyle%3e .cls-1%7bfill:%23c769ff;opacity:.3%7d.cls-2,.cls-6,.cls-8%7bfill:none;stroke-miterlimit:10%7d.cls-6,.cls-8%7bstroke:%232e2e2e%7d.cls-6%7bstroke-width:1.25px%7d.cls-8%7bstroke-linecap:round;stroke-width:1.5px%7d.cls-10,.cls-9%7bstroke:none%7d.cls-10%7bfill:%232e2e2e%7d %3c/style%3e %3c/defs%3e %3cg id='Icon_24_Classic'%3e %3cg id='%EA%B7%B8%EB%A3%B9_2377'%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1604' d='M14.625 9.007c-.008-.056-.016-.111-.026-.166a7.128 7.128 0 0 0-.206-.928v-.014a7.068 7.068 0 0 0-.265-.731A16.222 16.222 0 0 0 8.781.794a2.13 2.13 0 0 0-2.562 0A16.222 16.222 0 0 0 .876 7.168a7.068 7.068 0 0 0-.265.732v.014a7.128 7.128 0 0 0-.211.927c-.01.055-.018.11-.026.166a7.2 7.2 0 1 0 14.25 0z' class='cls-1'/%3e %3cg id='%ED%8C%A8%EC%8A%A4_1605' class='cls-2'%3e %3cpath d='M14.922 9.022l-.026-.173a7.515 7.515 0 0 0-.216-.966v-.015a7.429 7.429 0 0 0-.275-.762c-1.21-3.049-3.983-5.457-5.623-6.679a2.139 2.139 0 0 0-2.564 0C4.578 1.649 1.8 4.057.6 7.106a7.428 7.428 0 0 0-.275.762v.015a7.516 7.516 0 0 0-.225.966l-.026.173a7.5 7.5 0 1 0 14.844 0z' class='cls-9'/%3e %3cpath d='M7.5 16.046c3.308 0 6-2.692 6-6 0-.24-.02-.5-.064-.819l-.019-.127-.002-.016c-.047-.29-.103-.542-.172-.77l-.006-.022-.004-.014c-.06-.197-.132-.394-.213-.587l-.007-.017-.007-.016c-1.08-2.73-3.671-4.949-5.12-6.028-.144-.107-.29-.13-.386-.13-.097 0-.242.023-.386.13-1.449 1.08-4.04 3.298-5.12 6.028l-.007.016-.007.017c-.081.193-.153.39-.213.587l-.004.014-.006.022c-.069.228-.125.48-.172.77l-.002.016-.019.125c-.044.32-.064.58-.064.821 0 3.308 2.692 6 6 6m0 1.5c-4.142 0-7.5-3.358-7.5-7.5 0-.348.032-.688.078-1.024l.026-.173c.053-.329.122-.653.216-.966l.004-.015c.078-.26.17-.514.275-.762C1.805 4.057 4.578 1.649 6.218.427 6.6.142 7.05 0 7.5 0c.45 0 .9.142 1.282.427 1.64 1.222 4.413 3.63 5.619 6.679.105.248.197.502.275.762l.004.015c.094.313.163.637.216.966l.026.173c.046.336.078.676.078 1.024 0 4.142-3.358 7.5-7.5 7.5z' class='cls-10'/%3e %3c/g%3e %3c/g%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1606' d='M23.95 14.97l-.017-.111a4.751 4.751 0 0 0-.139-.622v-.009a4.84 4.84 0 0 0-.177-.49 11.468 11.468 0 0 0-4.078-4.627.636.636 0 0 0-.718 0 11.468 11.468 0 0 0-4.078 4.627 4.84 4.84 0 0 0-.177.49v.009a4.751 4.751 0 0 0-.139.622l-.017.111a4.909 4.909 0 0 0-.05.658 4.822 4.822 0 1 0 9.644 0 4.909 4.909 0 0 0-.054-.658z' class='cls-1'/%3e %3cpath id='%EC%84%A0_165' fill='%23fff' d='M0 0L24 0' transform='translate(0 23.25)'/%3e %3crect id='%EC%82%AC%EA%B0%81%ED%98%95_2236' width='24' height='1.5' fill='%232e2e2e' rx='.75' transform='translate(0 22.5)'/%3e %3cg id='%EA%B7%B8%EB%A3%B9_2379'%3e %3cg id='%EA%B7%B8%EB%A3%B9_2378'%3e %3cg id='%ED%8C%A8%EC%8A%A4_1608' class='cls-2'%3e %3cpath d='M23.95 14.97l-.017-.111a4.751 4.751 0 0 0-.139-.622v-.009a4.84 4.84 0 0 0-.177-.49 11.468 11.468 0 0 0-4.078-4.627.636.636 0 0 0-.718 0 11.468 11.468 0 0 0-4.078 4.627 4.84 4.84 0 0 0-.177.49v.009a4.751 4.751 0 0 0-.139.622l-.017.111a4.909 4.909 0 0 0-.05.658 4.822 4.822 0 1 0 9.644 0 4.909 4.909 0 0 0-.054-.658z' class='cls-9'/%3e %3cpath d='M19.178 19.05c1.887 0 3.422-1.535 3.422-3.422 0-.132-.012-.282-.038-.475l-.01-.064v-.004l-.001-.004c-.028-.17-.06-.313-.097-.44l-.015-.05-.001-.003c-.035-.11-.071-.209-.11-.3l-.008-.017-.007-.018c-.65-1.642-2.25-3.013-3.135-3.677-.885.664-2.486 2.035-3.135 3.677l-.007.018-.008.018c-.039.09-.075.189-.11.3v.003l-.016.05c-.038.126-.07.27-.097.439v.004l-.001.004-.01.068c-.026.19-.038.34-.038.471 0 1.887 1.535 3.422 3.422 3.422m0 1.4c-2.663 0-4.822-2.159-4.822-4.822 0-.224.021-.443.05-.658l.017-.111c.034-.212.078-.42.139-.622l.002-.009c.051-.167.109-.331.177-.49.907-2.293 3.193-4.022 4.078-4.627.108-.074.234-.111.359-.111.125 0 .25.037.359.111.885.605 3.171 2.334 4.078 4.627.068.159.126.323.177.49l.002.009c.061.202.105.41.139.622l.017.111c.029.215.05.434.05.658 0 2.663-2.159 4.822-4.822 4.822z' class='cls-10'/%3e %3c/g%3e %3cpath id='%EC%84%A0_166' d='M0 6.452L0 0' class='cls-6' transform='translate(19.178 16.101)'/%3e %3c/g%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1609' fill='none' stroke='%232e2e2e' stroke-linecap='round' stroke-miterlimit='10' stroke-width='1.25px' d='M17.669 14.687L19.178 17l1.509-2.313'/%3e %3c/g%3e %3cpath id='%EC%84%A0_167' d='M2.5 2.523L0 0' class='cls-8' transform='translate(4.863 8.281)'/%3e %3cpath id='%EC%84%A0_168' d='M0 2.452L0 0' class='cls-6' transform='translate(19.178 20.101)'/%3e %3cg id='%EA%B7%B8%EB%A3%B9_2380'%3e %3cpath id='%EC%84%A0_169' d='M0 11.4L0 0' class='cls-8' transform='translate(7.5 11.6)'/%3e %3cpath id='%EC%84%A0_170' d='M0 6.4L0 0' class='cls-8' transform='translate(7.5 16.6)'/%3e %3cpath id='%EC%84%A0_171' d='M3.271 0L0 3.413' class='cls-8' transform='translate(7.514 10.121)'/%3e %3c/g%3e %3cpath id='%EC%84%A0_172' d='M0 5.6L0 0' class='cls-8' transform='translate(7.5 6)'/%3e %3c/g%3e %3c/svg%3e"
                alt="tree이모지"
              />
            </CategoryListItemImgWrap>
            야외형
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemImgWrap>
              <CategoryIconImg
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3e %3cdefs%3e %3cstyle%3e .cls-2%7bfill:%232e2e2e%7d %3c/style%3e %3c/defs%3e %3cg id='Icon_24_Mobile' transform='translate(-36)'%3e %3cg id='border'%3e %3cg id='material_system_icon_border'%3e %3cpath id='%EC%82%AC%EA%B0%81%ED%98%95_2609' fill='none' d='M0 0H24V24H0z' transform='translate(36)'/%3e %3c/g%3e %3c/g%3e %3cg id='%EB%A0%88%EC%9D%B4%EC%96%B4_5'%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1748' d='M52.5 1.5A2.5 2.5 0 0 1 55 4v16a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 41 20V4a2.5 2.5 0 0 1 2.5-2.5h9m0-1.5h-9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z' class='cls-2'/%3e %3crect id='%EC%82%AC%EA%B0%81%ED%98%95_2610' width='10' height='14' fill='%23c769ff' opacity='0.5' rx='1' transform='translate(43 4)'/%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1749' d='M52.25 4.35v13.3h-8.5V4.35h8.5m.25-1.25h-9a1 1 0 0 0-1 1v13.8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V4.1a1 1 0 0 0-1-1z' class='cls-2'/%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1750' d='M49.9 20.4h-3.8a.5.5 0 0 0-.5.5v.2a.5.5 0 0 0 .5.5h3.8a.5.5 0 0 0 .5-.5v-.2a.5.5 0 0 0-.5-.5z' class='cls-2'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e"
                alt="tree이모지"
              />
            </CategoryListItemImgWrap>
            모바일
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemImgWrap>
              <CategoryIconImg
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3e %3cdefs%3e %3cstyle%3e .cls-1%7bfill:none%7d.cls-2%7bfill:%232e2e2e%7d %3c/style%3e %3c/defs%3e %3cg id='Icon_24_Interaction' transform='translate(-72)'%3e %3cg id='border'%3e %3cg id='material_system_icon_border'%3e %3cpath id='%EC%82%AC%EA%B0%81%ED%98%95_2606' d='M0 0H24V24H0z' class='cls-1' transform='translate(72)'/%3e %3c/g%3e %3c/g%3e %3cg id='%EB%A0%88%EC%9D%B4%EC%96%B4_5'%3e %3cg id='material_system_icon_border-2'%3e %3cpath id='%EC%82%AC%EA%B0%81%ED%98%95_2607' d='M0 0H24V24H0z' class='cls-1' transform='translate(72)'/%3e %3c/g%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1745' d='M85.658 22.568l-.02-.068H76.75V1.561h9.007a1.5 1.5 0 0 1 1.5 1.5v5l1.5-.445V3.061a3 3 0 0 0-3-3H73a1 1 0 0 0-1 1V23a1 1 0 0 0 1 1h12.757a2.978 2.978 0 0 0 1-.184 1.988 1.988 0 0 1-1.099-1.248zM75.25 22.5H73.5V1.561h1.75z' class='cls-2'/%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1746' d='M90.745 8.512a.6.6 0 0 1 .574.43l3.256 10.983a.6.6 0 0 1-.4.746l-6.424 1.9a.59.59 0 0 1-.171.025.6.6 0 0 1-.58-.426l-3.255-10.983a.6.6 0 0 1 .4-.746l6.423-1.9a.6.6 0 0 1 .172-.025m0-1.4a1.969 1.969 0 0 0-.569.083L83.752 9.1a2 2 0 0 0-1.352 2.485l3.255 10.983a2 2 0 0 0 2.486 1.349l6.424-1.9a2 2 0 0 0 1.349-2.486L92.662 8.544a2 2 0 0 0-1.917-1.432z' class='cls-2'/%3e %3crect id='%EC%82%AC%EA%B0%81%ED%98%95_2608' width='6.028' height='10.484' fill='%23c769ff' opacity='0.5' rx='.951' transform='rotate(-16.51 81.26 -286.434)'/%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1747' d='M89.745 11.222l2.2 7.441-3.437 1.019-2.205-7.441 3.437-1.019m.262-1.456a.947.947 0 0 0-.276.041l-4.183 1.239a.973.973 0 0 0-.656 1.209l2.427 8.187a.973.973 0 0 0 .932.7.992.992 0 0 0 .277-.04l4.182-1.24a.973.973 0 0 0 .656-1.209l-2.421-8.19a.975.975 0 0 0-.933-.7z' class='cls-2'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e"
                alt="tree이모지"
              />
            </CategoryListItemImgWrap>
            키트형
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemImgWrap>
              <CategoryIconImg
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3e %3cdefs%3e %3cstyle%3e .cls-1%7bfill:none%7d.cls-2%7bfill:%232e2e2e%7d %3c/style%3e %3c/defs%3e %3cg id='Icon_24_Etc'%3e %3cg id='border'%3e %3cg id='material_system_icon_border'%3e %3cpath id='%EC%82%AC%EA%B0%81%ED%98%95_2611' d='M0 0H24V24H0z' class='cls-1'/%3e %3c/g%3e %3c/g%3e %3cg id='%EB%A0%88%EC%9D%B4%EC%96%B4_5'%3e %3cpath id='%ED%8C%A8%EC%8A%A4_1751' d='M12 3.5A8.5 8.5 0 1 1 3.5 12 8.51 8.51 0 0 1 12 3.5M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z' class='cls-2'/%3e %3ccircle id='%ED%83%80%EC%9B%90_352' cx='1.25' cy='1.25' r='1.25' class='cls-2' transform='translate(10.75 10.75)'/%3e %3ccircle id='%ED%83%80%EC%9B%90_353' cx='1.25' cy='1.25' r='1.25' class='cls-2' transform='translate(15.333 10.75)'/%3e %3ccircle id='%ED%83%80%EC%9B%90_354' cx='1.25' cy='1.25' r='1.25' class='cls-2' transform='translate(6.167 10.75)'/%3e %3cg id='material_system_icon_border-2'%3e %3cpath id='%EC%82%AC%EA%B0%81%ED%98%95_2612' d='M0 0H24V24H0z' class='cls-1'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/svg%3e"
                alt="tree이모지"
              />
            </CategoryListItemImgWrap>
            교육용
          </CategoryListItem>
        </CategoryList>
      </CategoryContainer>
      <div>
        <div>
          <Dived />
          <CategoryCards />
        </div>
        <div>
          <Dived />
          <CategoryCards />
        </div>
      </div>
    </>
  );
};

export default BestGameList;
const Dived = styled.div`
  margin-bottom: 48px;
  margin-top: 32px;
  width: 100%;
  height: 16px;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  background-color: linear-gradient(
    to top,
    rgb(250, 250, 250) 18%,
    rgb(248, 248, 248) 73%,
    rgb(245, 245, 245) 83%
  );
  background-image: linear-gradient(
    to bottom,
    rgb(250, 250, 250) 18%,
    rgb(248, 248, 248) 73%,
    rgb(245, 245, 245) 83%
  );
`;
const CategoryContainer = styled.div`
  margin-top: 32px;
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  max-width: 1140px;
  box-sizing: border-box;

  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
`;

const CategoryList = styled.ul`
  display: flex;
  margin-top: 32px;
`;
const CategoryListItem = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-right: 32px;
`;
const CategoryListItemImgWrap = styled.div`
  margin-right: 16px;
`;
const CategoryIconImg = styled.img``;
