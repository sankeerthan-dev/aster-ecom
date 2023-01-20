import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import React, { useState } from 'react'

export default function SearchBox() {
  const [search, setSearch] = useState('')
  return (
    <View>
      <SearchBar
        placeholder='Search products...'
        lightTheme
        round
        value={search}
        onChange={(e) => setSearch(e)}
      />
    </View>
  )
}