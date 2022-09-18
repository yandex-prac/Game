import { useIntl } from 'react-intl'

export const useCustomIntl = (text: string) => {
  const intl = useIntl()
  return (intl.messages[text] || '') as string
}
