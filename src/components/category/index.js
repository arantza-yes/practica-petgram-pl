import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt='image' />
    {emoji}
  </Anchor>
)
