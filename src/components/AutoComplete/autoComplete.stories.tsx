import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoComplete, DataSourceType } from './autoComplete'
interface LakerPlayerProps {
  value: string
  number: number
}
interface GithubUserProps {
  login: string
  url: string
  avatar_url: string
}
const simpleComplete = () => {
  const lakers = [
    'bradley',
    'pope',
    'caruso',
    'cook',
    'cousins',
    'james',
    'AD',
    'green',
    'howard',
    'kuzma',
    'McGee',
    'rando',
  ]
  const handleFetch = (query: string) => {
    return lakers
      .filter((name) => name.includes(query))
      .map((name) => ({ value: name }))
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      placeholder="Please enter your favoriate Golden State Warriors player to have a try"
    />
  )
}

const textComplete = `
  ~~~javascript
  const lakers = ['Stephen Curry', 'Klay Thompson', 'Kelly Oubre', 'Kevon Looney', 'Damion Lee', Draymond Green', 'Kent Bazemore', 'Nico Mannion', 'Eric Paschall']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
  return (
    <AutoComplete 
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      placeholder="Please enter your favoriate Golden State Warriors player to have a try"
    />
  )
  ~~~
`
const customComplete = () => {
  const lakersWithNumber = [
    { value: 'bradley', number: 11 },
    { value: 'pope', number: 1 },
    { value: 'caruso', number: 4 },
    { value: 'cook', number: 2 },
    { value: 'cousins', number: 15 },
    { value: 'james', number: 23 },
    { value: 'AD', number: 3 },
    { value: 'green', number: 14 },
    { value: 'howard', number: 39 },
    { value: 'kuzma', number: 0 },
  ]
  const handleFetch = (query: string) => {
    return lakersWithNumber.filter((player) => player.value.includes(query))
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>
    return (
      <>
        <p>Player Name: {itemWithNumber.value}</p>
        <span>Jersey Name: {itemWithNumber.number}</span>
      </>
    )
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      placeholder="Enter a Warriors player to try the custome dropdown"
      renderOption={renderOption}
    />
  )
}

const textCustom = `
### Demo
~~~javascript
const lakersWithNumber = [
  {value: 'curry', number: 30},
  {value: 'green', number: 23},
  {value: 'bazemore', number: 26},
  {value: 'looney', number: 5},
  {value: 'mannion', number: 2},
  {value: 'mulder', number: 15},
  {value: 'oubre', number: 12},
  {value: 'paschall', number: 7},
  {value: 'payton', number: 0},
  {value: 'thompson', number: 11},
] 
const handleFetch = (query: string) => {
  return lakersWithNumber.filter(player => player.value.includes(query))
}
const renderOption = (item: DataSourceType) => {
  const itemWithNumber = item as DataSourceType<LakerPlayerProps>
  return (
    <>
      <b>Player Name: {itemWithNumber.value}</b>
      <span>Jersey Number: {itemWithNumber.number}</span>
    </>
  )
}
return (
  <AutoComplete 
    fetchSuggestions={handleFetch}
    onSelect={action('selected')}
    placeholder="Enter a Warriors player to try the custome dropdown"
    renderOption={renderOption}
  />
)
~~~
`
const ajaxComplete = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }))
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <p>Name: {itemWithGithub.value}</p>
        <span>url: {itemWithGithub.url}</span>
      </>
    )
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      placeholder="Please enter your GitHub Username to have a try"
      onSelect={action('selected')}
      renderOption={renderOption}
    />
  )
}

const textAjax = `
### Demo
~~~javascript
const handleFetch = (query: string) => {
  return fetch('https://api.github.com/search/users?q='+ query)
    .then(res => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
    })
}

const renderOption = (item: DataSourceType) => {
  const itemWithGithub = item as DataSourceType<GithubUserProps>
  return (
    <>
      <p>Name: {itemWithGithub.value}</p>
      <span>url: {itemWithGithub.url}</span>
    </>
  )
}
return (
  <AutoComplete 
    fetchSuggestions={handleFetch}
    placeholder="Please enter your Github Username to have a try"
    onSelect={action('selected')}
    renderOption={renderOption}
  />
)
~~~
`
storiesOf('AutoComple', module)
  .add('AutoComplete', simpleComplete, {
    info: { source: false, text: textComplete },
  })
  .add('To create a Custom Suggestion Dropdown', customComplete, {
    info: { source: false, text: textCustom },
  })
  .add('Send Asynchronous requests to GitHub', ajaxComplete, {
    info: { source: false, text: textAjax },
  })
