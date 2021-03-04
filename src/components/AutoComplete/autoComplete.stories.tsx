import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoComplete, DataSourceType } from './autoComplete'

// interface LakerPlayerProps {
//   value: string
//   number: number
// }

interface GithubUserProps {
  login: string
  url: string
  avatar_url: string
}

const SimpleComplete = () => {
  // const lakers = [
  //   'bradley',
  //   'pope',
  //   'caruso',
  //   'cook',
  //   'cousins',
  //   'james',
  //   'AD',
  //   'green',
  //   'howard',
  //   'kuzma',
  //   'McGee',
  //   'rando',
  // ]

  // const lakersWithNumber = [
  //   { value: 'bradley', number: 11 },
  //   { value: 'pope', number: 1 },
  //   { value: 'caruso', number: 4 },
  //   { value: 'cook', number: 2 },
  //   { value: 'cousins', number: 15 },
  //   { value: 'james', number: 23 },
  //   { value: 'AD', number: 3 },
  //   { value: 'green', number: 14 },
  //   { value: 'howard', number: 39 },
  //   { value: 'kuzma', number: 0 },
  // ]

  // const handleFetch = (query: string) => {
  //   return lakers
  //     .filter((name) => name.includes(query))
  //     .map((name) => ({
  //       value: name,
  //     }))
  // }

  // const renderOption = (item: string) => {
  //   return <h4>Player's name: {item}</h4>
  // }

  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter((player) => player.value.includes(query))
  // }

  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    return (
      <>
        <h4>name: {item.login}</h4>
        <p>number: {item.url}</p>
      </>
    )
  }

  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }))
      })
  }

  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      renderOption={renderOption}
      placeholder="Enter Lakers players for a try"
    />
  )
}

storiesOf('AutoComplete Component', module).add('AutoComplete', SimpleComplete)
