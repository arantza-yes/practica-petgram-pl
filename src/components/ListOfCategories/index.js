import React, { useEffect, useState } from 'react'

import { Category } from '../category'
// import { categories as mockCategories } from '../../../api/db.json'

import { Item, List } from './styles'

function useCategoriesData () {
  // estado para las categorias
  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(false)

  // para las categorias con el api
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(Response => {
        setCategories(Response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  // estado para las animaciones scroll
  const [showFixed, setShowFixed] = useState(false)

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
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
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
