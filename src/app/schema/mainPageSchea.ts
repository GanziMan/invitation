export interface CommentFormType {
  name: string
  comment: string
}

export interface AccountInfoType {
  position: string
  name: string
  accountInfo: string
}

export interface CommentType {
  name: string
  comment: string
  date: string
  nextCursor: string
}

export const GroomAccountInfo: AccountInfoType[] = [
  {
    position: '신랑',
    name: ' ⃝ ⃝ ⃝',
    accountInfo: '카카오뱅크 0000-11-000000',
  },
  {
    position: '아버지',
    name: ' ⃝ ⃝ ⃝',
    accountInfo: '카카오뱅크 0000-11-000000',
  },
  {
    position: '어머니',
    name: ' ⃝ ⃝ ⃝',
    accountInfo: '카카오뱅크 0000-11-000000',
  },
]
export const BrideAccountInfo: AccountInfoType[] = [
  {
    position: '신부',
    name: ' ⃝ ⃝ ⃝',
    accountInfo: '카카오뱅크 0000-11-000000',
  },
  {
    position: '아버지',
    name: ' ⃝ ⃝ ⃝',
    accountInfo: '카카오뱅크 0000-11-000000',
  },
  {
    position: '어머니',
    name: ' ⃝ ⃝ ⃝ ',
    accountInfo: '카카오뱅크 0000-11-000000',
  },
]
