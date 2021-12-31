import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card, Typography, Layout } from "antd";
import styles from "./Detail.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { apiGetDetail } from "api/api";

export const Detail = () => {
  // === antd ===
  const { Title } = Typography;
  const { Meta } = Card;
  const { Header, Footer, Content } = Layout;
  // === react route dom ===
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const address = searchParams.get("address");
  const id = searchParams.get("id");

  // useState
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    apiGetDetail(address, id).then((res) => {
      setTableData(res.data.assets);
    });
  }, []);

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
              {tableData && (
                <>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={`${tableData.name}`}
                        src={`${tableData.image_url}`}
                      />
                    }
                  >
                    <Meta
                      title={`${tableData.name}`}
                      description={`${tableData.description}`}
                    />
                  </Card>
                  <div className="text-center">
                    <Button
                      onClick={tableData.permalink}
                      type="primary"
                      style={{
                        position: "fixed",
                        bottom: "3rem",
                        "font-size": "1.5rem",
                        padding: "1rem",
                        height: "4rem",
                      }}
                    >
                      Permalink
                    </Button>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};
