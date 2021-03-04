import React, { useState } from 'react'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Transition from './components/Transition/transition'

import Icon from './components/Icon/icon'

// import axios from 'axios'

const App: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Joyful Design World !</h1>
        <div>
          <Icon icon="arrow-down" />
          <h2>Menu components</h2>
          <Menu>
            <MenuItem>cool link</MenuItem>
            <MenuItem>cool link 1</MenuItem>
            <MenuItem>cool link 2</MenuItem>
            <SubMenu title="test">
              <MenuItem>cool link</MenuItem>
              <MenuItem>cool link 1</MenuItem>
              <MenuItem>cool link 2</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <div>
          <h2>Button components</h2>
          <Button btnType="default">default button</Button>
          <Button btnType="danger" size="sm">
            danger, small-size button
          </Button>
          <Button disabled btnType="primary">
            disabled primary button
          </Button>
          <Button btnType="primary" size="lg">
            primary, large-size button
          </Button>
          <Button btnType="link" href="http://www.google.com">
            link button, linking to Google.com
          </Button>
          <Button btnType="link" disabled href="http://www.google.com">
            link button, linking to Google.com
          </Button>
        </div>
        <div>
          <Button size="lg" onClick={() => setShow(!show)}>
            Toggle
          </Button>
          <Transition wrapper in={show} timeout={300} animation="zoom-in-top">
            <p>
              hello world <code>console.log('hello world')</code>
            </p>
            <p>
              hello world <code>console.log('hello world')</code>
            </p>
            <p>
              hello world <code>console.log('hello world')</code>
            </p>
          </Transition>
          <Transition in={show} timeout={300} wrapper animation="zoom-in-top">
            <Button size="lg">I am a button</Button>
          </Transition>
        </div>
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
          <form
            method="post"
            encType="multipart/form-data"
            action="https://jsonplaceholder.typicode.com/posts"
          >
            <input type="file" name="myFile" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  )
}

export default App
