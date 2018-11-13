import { Component } from "react";
import * as React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Jumbotron,
  Row,
  Well
} from "react-bootstrap";
import "./Exemp2Col.css";

class Exemp2Col extends Component {
  public render() {
    return (
      <div id="component-name" className="conteiner">
        <Row>
          <Col
            xsHidden={true}
            smHidden={true}
            md={3}
            lg={3}
            className="col-skeleton-height"
          >
            <Row>
              <Col md={12} lg={12}>
                <Row className="sticky-top">
                  <Col md={12} lg={12}>
                    <h2 className="text-center pagination-centered one-color">
                      1
                    </h2>
                    <Well>Look I'm in a well!</Well>
                    <Well>Look I'm in a well!</Well>
                    <Well>Look I'm in a well!</Well>
                    <ButtonGroup>
                      <Button>Left</Button>
                      <Button>Middle</Button>
                      <Button>Right</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className="col-skeleton-height">
            <h2 className="text-center two-color">2</h2>
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

export default Exemp2Col;
