import React from 'react'
import styles from './styles.module.css'
import './scss/arizona-boostrap.scss'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

// custom components
// TODO: we could use the ESnext version of `export AlertBox from './alertbox'
// if we install @babel/plugin-proposal-export-default-from
export { default as AlertBox } from './alertbox'
export { default as Footer } from './footer'
export { default as Header } from './header'
// export { default as Layout } from './layout'

// reactstrap re-exports
export { Alert } from 'reactstrap'
export { Button } from 'reactstrap'
export {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
export {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
