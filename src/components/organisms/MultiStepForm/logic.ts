import { IUseMultiStepForm } from './types'

import { useFormik } from 'formik'
import { useState } from 'react'

const useMultiStepForm = ({ steps }: IUseMultiStepForm) => {
  const [step, setStep] = useState(1)

  const initialValues: any = {}

  for (let i = 0; i < steps.length; i++) {
    for (let j = 0; j < steps[i].fields.length; j++)
      initialValues[steps[i].fields[j].name] = ''
  }

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values)
    }
  })

  const labels = steps.map(({ label }) => label)
  const stepsData = steps.map(({ fields }) => fields)

  const onArrowForwardClick = () => {
    if (step < 3) setStep(prev => prev + 1)
  }

  const onArrowBackClick = () => {
    if (step > 1) setStep(prev => prev - 1)
  }

  const showArrowBack = step > 1
  const showArrowForward = step < 3

  return {
    step,
    labels,
    formik,
    stepsData,
    showArrowBack,
    showArrowForward,
    onArrowBackClick,
    onArrowForwardClick
  }
}

export { useMultiStepForm }
