import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Header, Icon, Input, Item } from "native-base";

export default class SearchHeader extends Component {

  render() {
    return (
      <Header
         style={{ height: 80 }}
         searchBar
         rounder
      >
         <Item>
            <Icon name='search' />
            <Input 
               placeholder='Enter beer name'
               onChangeText={this.props.onChangeText}
               returnKeyType='search'
               onSubmitEditing={this.props.beerSearch}
            />
         </Item>
       </Header>
    )
  }
}