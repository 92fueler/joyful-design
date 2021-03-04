import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../src/styles/index.scss'

library.add(fas)

const wrapperStyle = {
  padding: '20px 40px',
  width: '800px',
}

const storyWrapper = (stroyFn) => <div style={wrapperStyle}>{stroyFn()}</div>

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })

const loaderFn = () => {
  return [
    require('../src/components/Button/button.stories.tsx'),
    require('../src/components/Menu/menu.stories.tsx'),
    require('../src/components/Input/input.stories.tsx'),
  ]
}

// automatically import all files ending in *.stories.js
configure(loaderFn, module)
