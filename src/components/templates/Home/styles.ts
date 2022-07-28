import { NavbarContent } from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const HomeStyle = styled.main`
  ${NavbarContent}
  ${tw`h-screen flex-col`};

  section {
    ${tw`flex items-center w-full mx-auto`}
  }

  section + section {
    ${tw`min-h-screen w-full px-4`}

    ul {
      ${tw`space-y-8`}

      &,
      li {
        ${tw`flex flex-col items-center w-full overflow-hidden`}
      }

      li {
        ${tw`space-y-2 text-xl`}

        b {
          ${tw`text-primary-500`}
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    section {
      ${tw`justify-center min-h-full`}
    }

    section + section {
      ${tw`px-8`}

      ul  li {
        ${tw`grid grid-cols-2 px-4 py-8 w-full text-xl space-y-0`}

        span, b {
          ${tw`border-b-2 border-b-primary-800 pb-4 h-full`}
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    section + section {
      ul li {
        ${tw`grid-cols-5`}

        b {
          ${tw`col-span-4`}
        }
      }
    }
  }
`

export { HomeStyle }
