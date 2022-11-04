import { useEffect } from 'react'

type ClickByOutZone = {
  ref: any
  isOpen: boolean
  closeCallback: () => void
}

export const useClickByOutZone = ({
  ref,
  isOpen,
  closeCallback,
}: ClickByOutZone) => {
  const handleCloseByOutZone = (evt: Event) => {
    const element = ref.current as null | Element
    const target = evt.target as HTMLElement
    if (!isOpen) return
    if (element && !element.contains(target)) {
      closeCallback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseByOutZone, true)

    return () =>
      document.removeEventListener('click', handleCloseByOutZone, true)
  }, [isOpen])
}
