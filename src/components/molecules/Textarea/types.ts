import { FormikProps } from 'formik'
import type { HTMLProps } from 'react'

interface ITextareaProps extends HTMLProps<HTMLInputElement> {
  formik: FormikProps<any>
}

export type { ITextareaProps }
