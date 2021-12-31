import React, { useEffect, useState } from "react";
import { Row, Col, Divider, Card, Typography, Layout } from "antd";
import styles from "./List.module.scss";
import { apiGetList } from "api/api";
import { useNavigate } from "react-router-dom";

export const List = () => {
  // === antd ===
  const { Title } = Typography;
  const { Meta } = Card;
  const { Header, Footer, Content } = Layout;
  const [tableData, setTableData] = useState([]);
  // === react router dom ===
  const nevigate = useNavigate();
  // === useState ===
  // const [offset, setOffset] = useState(0);
  // const [limit, setLimit] = useState(5);
  // const [callApi, setCallApi] = useState(false)
  const handleScroll = (e) => {
    const target = e.target;
    console.log("1", target.scrollHeight);
    console.log("2", target.scrollTop);
    console.log("3", target.clientHeight);
    if (target.scrollHeight - target.scrollTop == target.clientHeight) {
      console.log("!!!!!");
    }
  };
  useEffect(() => {
    apiGetList(0, 5).then((res) => {
      setTableData(res.data.assets);
    });
  }, []);
  // useEffect(() => {
  //   console.log("At The Bottom"); //Add in what you want here
  // }, [bottom]);

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <Divider>
            <Title level={2}>List</Title>
          </Divider>
        </Header>
        <Content
          className="p-10"
          onScroll={handleScroll}
          style={{ height: "900px" }}
        >
          <Row gutter={24}>
            {tableData &&
              tableData.map((item) => {
                return (
                  <Col
                    span={12}
                    className={styles.cardCol}
                    onScroll={handleScroll}
                  >
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
                      <Meta title="Europe Street beat" />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Content>
        <Footer className="text-center">Portto case</Footer>
      </Layout>
    </>
  );
};
