import { FieldStyle } from './styles'
import type { IFieldProps } from './types'

const Field = ({ name = '', label, formik, ...props }: IFieldProps) => (
  <FieldStyle className='Field'>
    <label htmlFor='full_name'>
      {label}

      <input
        type='text'
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange(name)}
        {...props}
      />
    </label>
  </FieldStyle>
)

export default Field
