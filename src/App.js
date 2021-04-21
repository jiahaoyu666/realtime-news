import React, { useEffect, useState } from "react";
import axios from "axios";
import { sinaApi, getMultileTypes, contentTypes } from "./apis";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  ListGroup,
  Col,
  Row,
  Form,
  Image,
  Spinner,
  Button,
} from "react-bootstrap";

function App() {
  const [currentData, setData] = useState(null);
  const [fontSize, setFontSize] = useState(0);

  const [contentType, setContentType] = useState("sina");
  const [loading, setLoading] = useState(false);

  const handleTypeSelect = (val) => {
    const getdata = async () => {
      let mydata;
      if (val === "sina") {
        setLoading(true);
        mydata = await axios.get(sinaApi);
      } else {
        setLoading(true);
        mydata = await axios.get(getMultileTypes(val));
      }
      setContentType(val);
      setData(mydata.data);
      setLoading(false);
    };
    getdata();
  };

  const handleScroll = () => {
    let ls = window.localStorage;
    let sTop;
    sTop = document.documentElement.scrollTop || document.body.scrollTop;
    ls.setItem("sTop", sTop);
  };

  useEffect(() => {
    let ls = window.localStorage;
    if (ls.getItem("sTop")) {
      let oldStop = Number(ls.getItem("sTop"));
      if (oldStop) {
        document.documentElement.scrollTop = oldStop;
        document.body.scrollTop = oldStop;
      }
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(sinaApi);
      setData(data);
    };
    getdata();
  }, []);
  const handleFontSize = (val) => {
    setFontSize(Number(val));
  };
  return (
    <Container fluid="xl">
      {currentData && (
        <div>
          <h2 className="text-center mt-2 " id="heading">
            新闻汇总
          </h2>
          <Form className="pl-3 pr-3 d-flex justify-content-start align-items-center">
            <Form.Group className=" mt-2 mr-2">
              <Form.Label className="change-font-size">调节字体大小</Form.Label>
              <Form.Control
                type="range"
                custom
                min="1"
                max="20"
                step="1"
                value={fontSize}
                onChange={(e) => {
                  handleFontSize(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="type-label">选择类别</Form.Label>
              <Form.Control
                as="select"
                custom
                value={contentType}
                onChange={(e) => {
                  handleTypeSelect(e.target.value);
                }}
              >
                {contentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.text}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button
              className=" ml-3 mt-3 d-block"
              variant="outline-light"
              onClick={() => {
                window.location.reload();
              }}
            >
              <i className="fas fa-sync-alt"></i>
            </Button>
          </Form>
          {loading && (
            <Spinner
              animation="border"
              size="sm"
              role="status"
              style={{
                width: "200px",
                height: "200px",
                margin: "auto",
                display: "block",
              }}
            />
          )}
          {contentType === "sina" && !loading && (
            <Row className="justify-content-md-center">
              <Col xs md="auto">
                <ListGroup>
                  {currentData.items.map((item, index) => (
                    <ListGroup.Item
                      key={item.id}
                      className="main-font-size"
                      style={{ fontSize: `${20 + fontSize}px` }}
                    >
                      {index + 1}.{item.title}(
                      <a target="_blank" rel="noreferrer" href={item.url}>
                        {new Date(item.date_modified).toLocaleString()}
                      </a>
                      )
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          )}
          {contentType !== "sina" && !loading && (
            <Row className="justify-content-md-center">
              <Col xs md="auto">
                <ListGroup>
                  {currentData.newslist.map((item, index) => (
                    <ListGroup.Item
                      key={item.description + index}
                      className="main-font-size"
                      style={{ fontSize: `${20 + fontSize}px` }}
                    >
                      <Row>
                        <Col xs={12} md={3}>
                          <Image
                            src={item.picUrl}
                            fluid
                            thumbnail
                            className=" w-100"
                          />
                        </Col>
                        <Col xs={12} md={9}>
                          {index + 1}.{item.title}(
                          <a target="_blank" rel="noreferrer" href={item.url}>
                            {new Date(
                              item.ctime.replace(/-/g, "/")
                            ).toLocaleString()}
                          </a>
                          )
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          )}
        </div>
      )}
    </Container>
  );
}

export default App;
