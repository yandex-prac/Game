type ButtonEnum = 'submit' | 'reset' | 'button'

type DarkModeType = {
  darkMode: boolean
}

type FormProps = {
  onSubmit: () => void
}

type SigninDTO = {
  login: string
  password: string
}

type SigninResponseDTO = {
  reason?: string
}

type UserInfoDTO = {
  avatar?: string
  display_name?: string
  first_name: string
  second_name: string
  login: string
  email: string
  password?: string
  phone: string
}

type SignupResponseDTO = {
  reason?: string
  id?: number
}

type ProfileProps = {
  isNotDisabled?: boolean
}

type ProfileDTO = {
  id: number
  first_name: string
  second_name: string
  display_name: null | string
  login: string
  avatar: null | string
  email: string
  phone: string
  status?: null | string
}

type EditPasswordDTO = {
  oldPassword: string
  newPassword: string
}

type SearchForUserByLoginDTO = {
  login: string
}

type OAuthIDDTO = {
  redirect_uri: string
}

type OAuthIDResponseDTO = {
  service_id: string
}

type OAuthDTO = {
  code: string
  redirect_uri: string
}

type NewLeaderDTO = {
  data: {
    time: number
    user_id: string
    username: string
  }
  ratingFieldName: string
  teamName: string
}

type NewLeaderResponseDTO = {
  reason?: string
}

type LeadersDTO = {
  ratingFieldName: string
  cursor: number
  limit: number
}

type LeadersResponseDTO = {
  data: {
    time: number
    user_id: string
    username: string
  }
}

type RenderIconType = 'success' | 'error' | 'attention' | 'information'

type TopicType = {
  author: string
  content: string
  createdAt: string
  id: number
  title: string
  updatedAt: string
}

type GetTopicsDTO = {
  title: string
  author: string
  content?: string
}

type AddTopicDTO = {
  message: string
}

export type {
  ButtonEnum,
  DarkModeType,
  FormProps,
  SigninDTO,
  SigninResponseDTO,
  UserInfoDTO,
  SignupResponseDTO,
  ProfileProps,
  ProfileDTO,
  EditPasswordDTO,
  SearchForUserByLoginDTO,
  RenderIconType,
  NewLeaderDTO,
  NewLeaderResponseDTO,
  LeadersDTO,
  LeadersResponseDTO,
  OAuthIDDTO,
  OAuthIDResponseDTO,
  OAuthDTO,
  TopicType,
  GetTopicsDTO,
  AddTopicDTO,
}
