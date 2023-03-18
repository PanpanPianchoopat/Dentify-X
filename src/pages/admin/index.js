import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useGetUser } from "@/hooks/useAuth";

import { message } from "antd";
import PageContainer from "@/components/common/PageContainer";
import NoData from "@/components/common/NoData";

import { LoadingIcon } from "../styled";
import { MenuContainer, ButtonWrapper, MenuButton, Report } from "./styled";

import { ADMIN_ROLE } from "../../../public/constants/users";
import Image from "next/image";

const AdminPage = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let ignore = false;
    const userRole = async () => {
      const response = await useGetUser();
      if (!ignore && response.data) {
        response.data.query_results[0].RoleID == ADMIN_ROLE
          ? setIsAdmin(true)
          : message
              .error("Permission denied, redirecting...")
              .then(() => router.back());
      } else {
        !ignore &&
          message
            .error("Access denied, please login")
            .then(() => router.push("/"));
      }
    };
    userRole();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <PageContainer
      theme="twoTone"
      heading="Administrator"
      account
      blur={!isAdmin}
    >
      <MenuContainer>
        <ButtonWrapper>
          <MenuButton
            onClick={() => router.push("/register")}
            style={{ border: "2px solid #4083B8", background: "#F7FBFF" }}
          >
            <Image
              src="/assets/AddUserIcon.png"
              alt=""
              width={50}
              height={50}
              priority={true}
            />
            <br />
            Add New User
          </MenuButton>
          <MenuButton
            style={{
              border: "2px solid #55B1B8",
              background: "#F5FDFE",
              cursor: "not-allowed",
            }}
          >
            <Image
              src="/assets/EditUserIcon.png"
              alt=""
              width={50}
              height={50}
              priority={true}
            />
            <br />
            Edit User
          </MenuButton>
          <MenuButton
            onClick={() => router.push("/analysis")}
            style={{ border: "2px solid #5BBC76", background: "#F0FAF5" }}
          >
            <Image
              src="/assets/AnalysisIcon.png"
              alt=""
              width={50}
              height={50}
              priority={true}
            />
            <br />
            Tooth Analysis
          </MenuButton>
        </ButtonWrapper>
        <Report>
          <NoData description="There's nothing to show here" />
        </Report>
      </MenuContainer>
    </PageContainer>
  ); 
};

export default AdminPage;
