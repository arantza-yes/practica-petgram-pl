import React from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'http://placekitten.com/300/300'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  const Key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(Key, false)

  // console.log(liked)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='photocard' />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' />  {likes} likes!
            </Button>
          </>
      }
    </Article>
  )
}
