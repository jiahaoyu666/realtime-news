import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup } from "react-bootstrap";

function App() {
  const [currentData, setData] = useState(null);
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(
        "https://ruanyf.github.io/sina-news/rss.json"
      );
      setData(data);
    };
    getdata();
  }, []);
  return (
    <Container>
      {currentData && (
        <div>
          <h4 className="text-center mt-2 text-secondary">
            {currentData.description}
          </h4>
          <ListGroup>
            {currentData.items.map((item, index) => (
              <ListGroup.Item key={item.id}>
                {index + 1}.{item.title}(
                <a target="_blank" rel="noreferrer" href={item.url}>
                  {new Date(item.date_modified).toLocaleTimeString()}
                </a>
                )
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </Container>
  );
}

export default App;
