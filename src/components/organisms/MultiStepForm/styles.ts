import styled from 'styled-components'
import tw from 'twin.macro'

const MultiStepFormStyle = styled.section`
  ${tw`w-full overflow-hidden flex-1`}

  header {
    ${tw`grid w-full grid-cols-5 gap-y-4  bg-primary-500 text-secondary py-8 
      px-4`}

    span {
      ${tw`text-center`}

      &:first-child {
        ${tw`col-span-5 text-xl`}
      }

      &:not(:first-child) {
        ${tw`col-span-3 col-start-2 text-lg`}
      }
    }

    button {
      ${tw`w-6 h-6`}

      &:last-child {
        ${tw`ml-auto`}
      }

      svg {
        ${tw`w-full  h-full`}
      }
    }
  }

  form {
    ${tw`flex w-full`}

    button {
      ${tw`bg-primary-500 text-secondary py-4 fixed bottom-4 left-4 right-4 m-4
        rounded`}

      &:disabled {
        ${tw`border border-primary-500 bg-secondary text-primary-500`}
      }
    }

    ul {
      ${tw`flex w-full`}

      li {
        ${tw`min-w-full flex flex-col justify-between space-y-4 items-center 
          p-8`}
      }
    }
  }

  @media screen and (min-width: 1024px) {
    ${tw`max-w-3xl shadow-2xl flex-none`}

    header {
      ${tw`rounded-t-xl`}
    }

    form {
      ${tw`flex-col border-2 border-primary-500 rounded-b-xl`}

      button {
        ${tw`static mx-8 mb-8 mt-0`}
      }
    }
  }
`

export { MultiStepFormStyle }
