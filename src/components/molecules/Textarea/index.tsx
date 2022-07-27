import { TextareaStyle } from './styles'
import type { ITextareaProps } from './types'

const Textarea = ({ name, label, formik }: ITextareaProps) => (
  <TextareaStyle className='Textarea'>
    <label htmlFor='full_name'>
      {label}

      <textarea name={name} onChange={formik.handleChange(name)} />
    </label>
  </TextareaStyle>
)

export default Textarea
