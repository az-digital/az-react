import React, { useState } from 'react'

import {
  // ExampleComponent,
  Alert,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'az-react'
import 'az-react/dist/index.css'

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return <div>
    {/* <ExampleComponent text="Create React Library Example 😄" /> */}
    <Alert color="success">
      This is a primary alert — check it out!
    </Alert>
    <Button color="primary">Danger!</Button>
    <div style={{maxWidth: '320px'}}>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://picsum.photos/318/180"
          alt="Card image cap"
          style={{marginBottom: 0}}
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">Button</Button>
        </CardBody>
      </Card>

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="primary">
          Dropdown
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
}

export default App
