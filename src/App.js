import React, { useEffect, useState } from "react";
import axios from "axios";
import { sinaApi } from "./apis";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup, Col, Row, Form } from "react-bootstrap";

function App() {
  const [currentData, setData] = useState(null);
  const [fontSize, setFontSize] = useState(0);

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
          <h2 className="text-center mt-2 text-secondary" id="heading">
            新闻汇总
          </h2>
          <Form className="pl-5 pr-5">
            <Form.Group>
              <Form.Label>调节字体大小</Form.Label>
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
          </Form>
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
                      {new Date(item.date_modified).toLocaleTimeString()}
                    </a>
                    )
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

export default App;
