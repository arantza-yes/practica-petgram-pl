import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    // const loadPollyfill = async () => {
    //   try {
    //     await import('intersection-observer')
    //   } catch (error) {
    //     console.log('error')
    //   }
    // }

    // if (!window.IntersectionObserver) loadPollyfill()

    // // console.log(element.current)
    // const observer = new window.IntersectionObserver(function (entries) {
    //   const { isIntersecting } = entries[0]
    //   // console.log(isIntersecting)
    //   if (isIntersecting) {
    //     // console.log('si')
    //     setShow(true)
    //     observer.disconnect()
    //   }
    //   // console.log({ isIntersecting })
    //   // console.log(entries)
    // })

    // observer.observe(element.current)
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // console.log(element.current)
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        // console.log(isIntersecting)
        if (isIntersecting) {
          // console.log('si')
          setShow(true)
          observer.disconnect()
        }
        // console.log({ isIntersecting })
        // console.log(entries)
      })

      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
