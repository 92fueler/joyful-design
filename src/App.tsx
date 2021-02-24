import React from 'react'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Joyful Design World !</h1>
        <div>
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
      </header>
    </div>
  )
}

export default App
