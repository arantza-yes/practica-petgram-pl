import React from 'react'

import { Category } from '../category'
import { categories } from '../../../api/db.json'

import { Item, List } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
      }
    </List>
  )
}
