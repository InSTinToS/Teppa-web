import { IStep, IUseMultiStepForm } from './types'

import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

const getInitialValues = (steps: IStep[]) => {
  const initialValues: any = {}

  for (let i = 0; i < steps.length; i++)
    for (let j = 0; j < steps[i].fields.length; j++)
      initialValues[steps[i].fields[j].name] = ''

  return initialValues
}

const useMultiStepForm = ({
  steps,
  onSubmit,
  sessionKey,
  initialStep
}: IUseMultiStepForm) => {
  const [step, setStep] = useState(initialStep || 1)

  const formik = useFormik({
    onSubmit,
    enableReinitialize: true,
    initialValues: getInitialValues(steps)
  })

  const showArrowBack = step > 1
  const showArrowForward = step < 3
  const labels = steps.map(({ label }) => label)
  const stepsData = steps.map(({ fields }) => fields)

  const onArrowForwardClick = () => {
    if (step < 3) setStep(prev => prev + 1)
  }

  const onArrowBackClick = () => {
    if (step > 1) setStep(prev => prev - 1)
  }

  const onInputBlur = () => {
    if (sessionKey)
      sessionStorage.setItem(sessionKey, JSON.stringify(formik.values))
  }

  useEffect(() => {
    setStep(initialStep || 1)
  }, [initialStep])

  useEffect(() => {
    if (sessionKey) {
      const sessionString = sessionStorage.getItem(sessionKey)

      if (sessionString) {
        const sessionData = JSON.parse(sessionString)

        Object.keys(sessionData).map(key =>
          formik.setFieldValue(key, sessionData[key], false)
        )
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey])

  return {
    step,
    labels,
    formik,
    stepsData,
    onInputBlur,
    showArrowBack,
    showArrowForward,
    onArrowBackClick,
    onArrowForwardClick
  }
}

export { useMultiStepForm }
