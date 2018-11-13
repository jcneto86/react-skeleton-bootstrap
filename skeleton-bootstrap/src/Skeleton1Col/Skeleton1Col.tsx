import { Component } from "react";
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import './Skeleton1Col.css';

class Skeleton1Col extends Component {
  public render() {
    return (
      <div id="component-name" className="conteiner">
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12} className='col-skeleton-height one-color'>
          <h2 className='text-center'>Col 12</h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skeleton1Col;
