import React, { useEffect, useState } from 'react'

import { Category } from '../category'
// import { categories as mockCategories } from '../../../api/db.json'

import { Item, List } from './styles'

export const ListOfCategories = () => {
  // estado para las categorias
  const [categories, setCategories] = useState([])

  // estado para las animaciones scroll
  const [showFixed, setShowFixed] = useState(false)

  // para las categorias con el api
  useEffect(function () {
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(Response => {
        setCategories(Response)
      })
  }, [])

  // para la animacion de scroll
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
      categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
    }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
