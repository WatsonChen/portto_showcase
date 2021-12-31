import React from "react";
import { Row, Col, Divider, Card, Typography, Layout } from "antd";
import styles from "./List.module.scss";

export const List = () => {
  // === antd ===
  const { Title } = Typography;
  const { Meta } = Card;
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <Divider>
            <Title level={2}>List</Title>
          </Divider>
        </Header>
        <Content className="p-10">
          <Row gutter={24}>
            <Col span={12}>
              <Card
                onClick={() => {
                  alert("!");
                }}
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="Europe Street beat" />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="Europe Street beat" />
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer className="text-center">Portto case</Footer>
      </Layout>
    </>
  );
};
