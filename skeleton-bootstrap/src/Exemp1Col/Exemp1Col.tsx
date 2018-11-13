import { Component } from "react";
import * as React from "react";
import {
  Button,
  Col,
  Jumbotron,
  Panel,
  Row,
  Well
} from "react-bootstrap";
import "./Exemp1Col.css";

function handleClick() {
  alert("You have clicked on me");
}

class Exemp1Col extends Component {
  public render() {
    return (
      <div id="component-name" className="conteiner">
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2 className="text-center two-color">1</h2>
            <Row>
              <Col md={12} lg={12}>
                <Row className="sticky-top">
                  <Col md={12} lg={6}>
                    <Well>Look I'm in a well!</Well>
                    <Well>Look I'm in a well!</Well>
                  </Col>
                  <Col md={12} lg={6}>
                    <Row>
                      <Col md={6} lg={12}>
                        <Panel onClick={handleClick}>
                          <Panel.Body>Basic panel example</Panel.Body>
                        </Panel>
                      </Col>
                      <Col md={6} lg={12}>
                        <Well>Look I'm in a well!</Well>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <Jumbotron className="text-center">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Exemp1Col;
