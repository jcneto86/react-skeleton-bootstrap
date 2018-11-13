import { Component } from "react";
import * as React from "react";
import { Col, MenuItem, Nav, Navbar, NavDropdown, NavItem, Row } from "react-bootstrap";
import './Skeleton2Col.css';

class Skeleton2Col extends Component {
  public render() {
    return (
      <div id="component-name" className="conteiner">
      <Navbar inverse={false} collapseOnSelect={true} fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown
                eventKey={3}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider={true} />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight={true}>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col xsHidden={true} smHidden={true} md={3} lg={3} className='col-skeleton-height'>
          <h2 className='text-center one-color'>1</h2>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className='col-skeleton-height'>
          <h2 className='text-center two-color'>2</h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skeleton2Col;