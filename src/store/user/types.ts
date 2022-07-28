interface IUser {
  id: string
  type: string
  about: string
  phone: string
  email: string
  salary: string
  full_name: string
  occupation: string
  created_at: string
  updated_at: string
}

interface IUserStore {
  user?: Partial<IUser>
  loading?: boolean
}

export type { IUserStore, IUser }
