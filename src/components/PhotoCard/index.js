import React from 'react'
import { Button, Img, ImgWrapper } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'http://placekitten.com/300/300'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='photocard' />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />  {likes} likes!
      </Button>
    </article>
  )
}
