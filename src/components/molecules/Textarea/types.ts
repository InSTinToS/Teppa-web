import { FormikProps } from 'formik'
import type { TextareaHTMLAttributes } from 'react'

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  formik: FormikProps<any>
}

export type { ITextareaProps }
