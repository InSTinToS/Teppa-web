interface IStepFields {
  name: string
  label: string
  textarea?: boolean
}

interface IStep {
  label: string
  fields: IStepFields[]
}

interface IUseMultiStepForm {
  steps: IStep[]
}

interface IMultiStepForm extends IUseMultiStepForm {}

export type { IStep, IUseMultiStepForm, IMultiStepForm }
