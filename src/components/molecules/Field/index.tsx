import { FieldStyle } from './styles'
import type { IFieldProps } from './types'

const Field = ({ name, label, formik }: IFieldProps) => (
  <FieldStyle className='Field'>
    <label htmlFor='full_name'>
      {label}

      <input type='text' name={name} onChange={formik.handleChange(name)} />
    </label>
  </FieldStyle>
)

export default Field
