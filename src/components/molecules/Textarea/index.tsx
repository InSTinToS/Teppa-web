import { TextareaStyle } from './styles'
import type { ITextareaProps } from './types'

const Textarea = ({ name = '', label, formik, ...props }: ITextareaProps) => (
  <TextareaStyle className='Textarea'>
    <label htmlFor='full_name'>
      {label}

      <textarea
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange(name)}
        {...props}
      />
    </label>
  </TextareaStyle>
)

export default Textarea
