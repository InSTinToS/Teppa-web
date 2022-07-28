interface IStepFields {
  name: string
  label: string
  value?: string
  textarea?: boolean
}

interface IStep {
  label: string
  fields: IStepFields[]
}

interface IUseMultiStepForm {
  steps: IStep[]
  sessionKey?: string
  initialStep?: number
  onSubmit: (values: any) => void
}

interface IMultiStepForm extends IUseMultiStepForm {}

export type { IStep, IUseMultiStepForm, IMultiStepForm }
