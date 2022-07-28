import type { IStep } from 'components/organisms/MultiStepForm/types'

import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { registerThunk } from 'store/user/extraReducers/register'
import { IUser } from 'store/user/types'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const steps: IStep[] = [
  {
    label: 'Informações pessoais',
    fields: [
      { name: 'full_name', label: 'Nome completo' },
      { name: 'email', label: 'E-mail' },
      { name: 'phone', label: 'Celular' }
    ]
  },
  {
    label: 'Informações profissionais',
    fields: [
      { name: 'occupation', label: 'Cargo' },
      { name: 'salary', label: 'Pretensão salarial' },
      { name: 'type', label: 'Modelo de contratação' }
    ]
  },
  {
    label: 'Sobre você',
    fields: [
      { name: 'about', label: 'Fale um pouco sobre você!', textarea: true }
    ]
  }
]

const formatUserInfo = (user: Partial<IUser>) => {
  const fields: IStep['fields'] = steps.reduce(
    (prev, curr) => [...prev, ...curr.fields] as any,
    []
  )

  return Object.entries(user || {}).map(entry => {
    const value = entry[1]

    const keyLabel =
      fields.find(field => field.name === entry[0])?.label || entry[0]

    return [keyLabel, value]
  })
}

const useHome = () => {
  const router = useRouter()
  const { user } = useAppSelector(({ userStore }) => userStore)
  const dispatch = useAppDispatch()
  const { step: routeData } = router.query
  const [initialStep, setInitialStep] = useState(1)

  const userInfo = user ? formatUserInfo(user) : undefined

  useEffect(() => {
    setInitialStep(Number(routeData ? routeData[0] : 1))
  }, [routeData, initialStep])

  const onMultiStepFormSubmit = async (values: any) => {
    dispatch(registerThunk(values))
  }

  return { onMultiStepFormSubmit, steps, initialStep, userInfo }
}

export { useHome }
