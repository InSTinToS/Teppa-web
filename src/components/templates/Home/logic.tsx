import type { IStep } from 'components/organisms/MultiStepForm/types'

import api from 'api'

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

const useHome = () => {
  const onMultiStepFormSubmit = async (values: any) => {
    try {
      await api.post('/users', values)
    } catch (error: any) {
      const errorMessage = error.response?.data.error

      if (errorMessage === 'E-mail already exists') {
        const response = await api.get('/users')

        const foundId = response.data.users.find(
          (user: any) => user.email === values.email
        ).id

        await api.patch(`/users/${foundId}`, values)
      }
    }
  }

  return { onMultiStepFormSubmit, steps }
}

export { useHome }
