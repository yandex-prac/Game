type ModalType = {
  children: React.ReactNode
  isOpen: boolean
  onCloseModal: () => void
  title: string
}

type WrapperType = {
  isOpen: boolean
}

export type { ModalType, WrapperType }
