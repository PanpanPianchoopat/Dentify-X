import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useGetUser } from "@/hooks/useAuth";

import { STATUS } from "@/services/commonAPI";

import CookieWarning from "../CookieWarning";

import { Dropdown } from "antd";
import { HiOutlineUserCircle, HiOutlineLogout } from "react-icons/hi";
import {
  Background,
  Container,
  HeadContainer,
  BackButton,
  StyledHead,
  BackIcon,
  UserAccount,
  UserIcon,
} from "./styled";
import LogoutPop from "../LogoutPop";

export default function PageContainer({ className, children, ...props }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLogout, setIsLogout] = useState(false);

  const handleClick = () => {
    setIsLogout(true);
  };

  const items = [
    {
      key: "1",
      label: <a>Profile</a>,
      icon: <HiOutlineUserCircle style={{ fontSize: "18px" }} />,
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <a onClick={handleClick}>Logout</a>,
      icon: <HiOutlineLogout style={{ fontSize: "18px" }} />,
    },
  ];

  useEffect(() => {
    let ignore = false;
    const userInfo = async () => {
      const response = await useGetUser();
      if (response && response.status == STATUS.OK) {
        const result = response.data.query_results[0];
        setUser([result.FirstName, result.LastName]);
      }
    };
    userInfo();
    return () => {
      ignore = true;
    };
  }, []);

  function getDisplayName(user) {
    if (user.length == 2) {
      const firstName = user[0].charAt(0).toUpperCase() + user[0].slice(1);
      const displayName = `${firstName} ${user[1].charAt(0).toUpperCase()}.`;
      return displayName;
    } else {
      return;
    }
  }

  function getIconName(user) {
    const shortName = [];
    user.map((name) => {
      shortName.push(name.charAt(0).toUpperCase());
    });
    return shortName;
  }

  return (
    <Background
      className={className}
      customTheme={props.theme}
      blur={props.blur}
    >
      {props.heading && (
        <HeadContainer>
          {props.back && (
            <BackButton customTheme={props.theme} onClick={() => router.back()}>
              <BackIcon />
              Back
            </BackButton>
          )}
          <StyledHead customTheme={props.theme}>{props.heading}</StyledHead>
          {props.account && (
            <UserAccount customTheme={props.theme}>
              {user && getDisplayName(user)}
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
              >
                <UserIcon>{user && getIconName(user)}</UserIcon>
              </Dropdown>
            </UserAccount>
          )}
        </HeadContainer>
      )}
      <Container>{children}</Container>
      <LogoutPop isOpen={isLogout} setIsOpen={setIsLogout} />
      <CookieWarning />
    </Background>
  );
};
