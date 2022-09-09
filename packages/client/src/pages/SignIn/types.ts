type SignInProps = {
  href: string
  title: string
  authText: string
  regText: string
}

type InputGroupProps = {
  lastGroup?: boolean
}

type LoginFormProps = {
  onSubmit: () => void
}

export type { SignInProps, InputGroupProps, LoginFormProps }
