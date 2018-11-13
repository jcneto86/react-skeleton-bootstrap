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
import "./Exemp3Col.css";

class Exemp3Col extends Component {
  public render() {
    return (
      <div id="component-name" className="conteiner">
        <Row>
          <Col
            xsHidden={true}
            smHidden={true}
            md={4}
            lg={3}
            className="col-skeleton-height"
          >
            <Row className='element-sticky'>
              <Col md={12} lg={12}>
                <h2 className="text-center pagination-centered one-color">1</h2>
                <Well>Look I'm in a well!</Well>
                <Well>Look I'm in a well!</Well>
                <Well>Look I'm in a well!</Well>
                <ButtonGroup>
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </Col>
              <Col mdHidden={false} md={12} lgHidden={true}>
                <h2 className="text-center tree-color">3</h2>
                <Row>
                  <Col md={6} lg={12}>
                    <Well>Look I'm in a well!</Well>
                    <Well>Look I'm in a well!</Well>
                  </Col>
                  <Col md={6} lg={12}>
                    <Well>Look I'm in a well!</Well>
                    <Well>Look I'm in a well!</Well>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} className="col-skeleton-height">
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
          <Col
            xsHidden={true}
            smHidden={true}
            mdHidden={true}
            lg={3}
            className="col-skeleton-height "
          >
            <h2 className="text-center tree-color">3</h2>
            <Row>
              <Col md={6} lg={12}>
                <Well>Look I'm in a well!</Well>
                <Well>Look I'm in a well!</Well>
              </Col>
              <Col md={6} lg={12}>
                <Well>Look I'm in a well!</Well>
                <Well>Look I'm in a well!</Well>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Exemp3Col;
