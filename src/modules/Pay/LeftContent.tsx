import React from "react";
import { Layout } from "antd";
import "../../sass/Pay/LeftContent.scss";
import { Steps } from "antd";
import { useState } from "react";

const { Header, Content } = Layout;
const { Step } = Steps;

function LeftContentHeader() {
  return (
    <Layout className="LeftContent__Layout">
      <Header className="LeftContent__Layout--Header">
        CỔNG THANH TOÁN ONLINE
      </Header>
    </Layout>
  );
}

function LeftContentContent() {
  interface steps {
    id: number;
    title: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const steps:steps[] = [
    {
      id : 0,
      title: "GIỎ HÀNG"
    },
    {
      id : 1,
      title: "THÔNG TIN THANH TOÁN"
    },
    {
      id : 2,
      title: "THANH TOÁN"
    },
    {
      id : 3,
      title: "HOÀN TẤT"
    }
  ]

  return (
    <Layout className="LeftContent__Layout">
      <Content className="LeftContent__Layout--Content">
        <Steps direction="vertical" current={0} initial={0}>
          {
            steps.map((step) => (
              <Step key={step.id} title={step.title}></Step>
            ))
          }
        </Steps>
      </Content>
    </Layout>
  );
}

export { LeftContentHeader, LeftContentContent };
