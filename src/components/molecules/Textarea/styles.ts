import styled from 'styled-components'
import tw from 'twin.macro'

const TextareaStyle = styled.div`
  ${tw`w-full h-full`}

  textarea {
    ${tw`w-full text-primary-500 px-4 text-lg py-2 outline-none border-b 
      border-b-transparent bg-transparent`}

    ${tw`border-2 rounded-lg border-primary-500 mt-4 h-48`}
  

    &::placeholder {
      ${tw`text-primary-500 opacity-50`}
    }
  }
`

export { TextareaStyle }
