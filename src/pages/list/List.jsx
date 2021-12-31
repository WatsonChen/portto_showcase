import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Divider, Card, Typography, Layout } from "antd";
import styles from "./List.module.scss";
import { apiGetList } from "api/api";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

export const List = () => {
  // === antd ===
  const { Title } = Typography;
  const { Meta } = Card;
  const { Header, Footer, Content } = Layout;
  const [tableData, setTableData] = useState([]);
  // useState
  const [isIntersecting, setIsIntersecting] = useState(false);
  // useRef
  const ref = useRef();
  // === react router dom ===
  const nevigate = useNavigate();
  // === useState ===
  const [offset, setOffset] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  let observer = new IntersectionObserver(([entry]) => {
    if (entry) setIsIntersecting(entry.isIntersecting);
  });
  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && !isBottom) {
      apiGetList(offset, 5).then((res) => {
        setTableData(tableData.concat(res.data.assets));
        if (res.data.assets.length == 5) {
          setOffset(offset + 5);
        }
        if (res.data.assets.length < 5) {
          setIsBottom(true);
        }
      });
    }
  }, [isIntersecting]);

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <Divider>
            <Title level={2}>List</Title>
          </Divider>
        </Header>
        <Content className="p-10" style={{ height: "100%" }}>
          <Row gutter={24}>
            {tableData &&
              tableData.map((item) => {
                return (
                  <Col span={12} className={styles.cardCol}>
                    <Card
                      onClick={() => {
                        nevigate(
                          `/detail?address=${item.asset_contract.address}&id=${item.token_id}`
                        );
                      }}
                      hoverable
                      cover={
                        <img alt={`${item.name}`} src={`${item.image_url}`} />
                      }
                    >
                      <Meta title={`${item.name}`} />
                    </Card>
                  </Col>
                );
              })}
          </Row>
          <div ref={ref} id="test">
            {isBottom ? (
              "已經沒有更多資料了"
            ) : (
              <LoadingOutlined style={{ "font-size": "2rem" }} />
            )}
          </div>
        </Content>
        <Footer className="text-center">Portto case</Footer>
      </Layout>
    </>
  );
};
