import styled from 'styled-components'
import tw from 'twin.macro'

const FieldStyle = styled.div`
  ${tw`w-full`}

  input {
    ${tw`w-full text-primary-500 px-4 text-lg py-2 outline-none border-b-2 
      border-b-primary-1000 bg-transparent`}

    &:focus {
      ${tw`border-b-primary-500`}
    }

    &::placeholder {
      ${tw`text-primary-500 opacity-50`}
    }
  }
`

export { FieldStyle }
