import { HomeStyle } from './styles'

import MultiStepForm from 'components/organisms/MultiStepForm'

import { TNextPageWithLayout } from 'typescript/next.types'

import Head from 'next/head'
import { IStep } from 'organisms/MultiStepForm/types'

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

const Home: TNextPageWithLayout = () => (
  <>
    <Head>
      <title>Home</title>

      <meta name='description' content='Generated by create next app' />

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <HomeStyle>
      <MultiStepForm steps={steps} />
    </HomeStyle>
  </>
)

export default Home
