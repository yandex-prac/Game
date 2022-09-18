import { useIntl } from 'react-intl'

export const useCustomIntl = (text: string) => {
  const intl = useIntl()
  console.log('intl', intl)
  return (intl.messages[text] || '') as string
}
