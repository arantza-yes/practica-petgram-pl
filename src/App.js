import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'
import GlobalStyles from './globalStyles'

export const App = () => (
  <>
    <GlobalStyles />
    <ListOfCategories />
    <PhotoCard />
  </>
)
