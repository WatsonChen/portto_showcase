import React from "react";
import { Row, Col, Divider, Card, Typography, Layout } from "antd";
import styles from "./Detail.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  // === antd ===
  const { Title } = Typography;
  const { Meta } = Card;
  const { Header, Footer, Content } = Layout;
  // === react route dom ===
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <Row className="pt-3">
            <Col span={4}>
              <LeftOutlined
                style={{ fontSize: "45px", color: "#fff" }}
                onClick={() => {
                  navigate("/list");
                }}
              />
            </Col>
            <Col span={20}>
              <Title level={2}>Detail</Title>
            </Col>
          </Row>
        </Header>
        <Content className="p-10">
          <Row gutter={24}>
            <Col span={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="Europe Street beat" description="description" />
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer className="text-center">Portto case</Footer>
      </Layout>
    </>
  );
};
