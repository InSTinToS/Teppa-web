import { useMultiStepForm } from './logic'
import { MultiStepFormStyle } from './styles'
import { IMultiStepForm } from './types'

import Presence from 'components/atoms/Presence'

import Field from 'components/molecules/Field'
import Textarea from 'components/molecules/Textarea'

import {
  arrowAnimations,
  stepAnimations
} from 'components/templates/Home/animations'

import { motion } from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const MultiStepForm = ({ steps }: IMultiStepForm) => {
  const {
    step,
    formik,
    labels,
    stepsData,
    showArrowBack,
    onArrowBackClick,
    showArrowForward,
    onArrowForwardClick
  } = useMultiStepForm({ steps })

  return (
    <MultiStepFormStyle>
      <header>
        <span>{labels[step - 1]}</span>

        <Presence condition={showArrowBack}>
          <motion.button
            type='button'
            {...arrowAnimations()}
            onClick={onArrowBackClick}
          >
            <IoIosArrowBack />
          </motion.button>
        </Presence>

        <span>Etapa {step} de 3</span>

        <Presence condition={showArrowForward}>
          <motion.button
            type='button'
            {...arrowAnimations(true)}
            onClick={onArrowForwardClick}
          >
            <IoIosArrowForward />
          </motion.button>
        </Presence>
      </header>

      <form onSubmit={formik.handleSubmit}>
        <motion.ul {...stepAnimations(step)}>
          {stepsData.map((step, index) => (
            <li key={index}>
              {step.map(({ name, label, textarea }) =>
                textarea ? (
                  <Textarea
                    key={name}
                    name={name}
                    label={label}
                    formik={formik}
                  />
                ) : (
                  <Field key={name} name={name} label={label} formik={formik} />
                )
              )}
            </li>
          ))}
        </motion.ul>

        <button
          type='button'
          onClick={() => {
            if (showArrowForward) onArrowForwardClick
            else formik.handleSubmit
          }}
        >
          {showArrowForward ? 'Próxima etapa' : 'Cadastrar!'}
        </button>
      </form>
    </MultiStepFormStyle>
  )
}

export default MultiStepForm
