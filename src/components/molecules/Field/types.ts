import { FormikProps } from 'formik'
import type { HTMLProps } from 'react'

interface IFieldProps extends HTMLProps<HTMLInputElement> {
  formik: FormikProps<any>
}

export type { IFieldProps }
