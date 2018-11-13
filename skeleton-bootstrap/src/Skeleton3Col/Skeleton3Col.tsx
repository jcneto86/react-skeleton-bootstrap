import { Component } from "react";
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import "./Skeleton3Col.css";

class Skeleton3Col extends Component {
  public render() {
    return (
      <div id="component-name" className="conteiner">
        <Row>
          <Col
            xsHidden={true}
            smHidden={true}
            md={4}
            lg={3}
            className="col-skeleton-height one-color"
          >
            <h2 className="text-center">
              xsHidden={true} smHidden={true} md={4} lg={3}
            </h2>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={6}
            className="col-skeleton-height two-color"
          >
            <h2 className="text-center">
              xs={12} sm={12} md={8} lg={6}
            </h2>
          </Col>
          <Col
            xsHidden={true}
            smHidden={true}
            mdHidden={true}
            lg={3}
            className="col-skeleton-height tree-color"
          >
            <h2 className="text-center">
              xsHidden={true} smHidden={true} mdHidden={true} lg={3}
            </h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skeleton3Col;
