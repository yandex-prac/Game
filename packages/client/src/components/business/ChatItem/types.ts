type TopicType = {
  author: string
  content: string
  createdAt: string
  id: number
  title: string
  updatedAt: string
}

type ChatItemProps = {
  topic: TopicType
}

export type { ChatItemProps }
