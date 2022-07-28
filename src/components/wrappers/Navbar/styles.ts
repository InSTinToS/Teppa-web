import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const NavbarContent = css`
  ${tw`pt-26 w-full min-w-80 font-family['Plus Jakarta Sans']`}
`

const NavbarStyle = styled.nav`
  ${tw`flex flex-row items-center z-10 fixed w-full p-8 bg-secondary shadow-2xl
    `}

  .logo {
    ${tw`relative w-10 h-10`}

    img {
      width: 100%;
      height: 100%;
    }
  }

  span {
    ${tw`text-2xl text-primary-500 font-family['Plus Jakarta Sans'] ml-4`}
  }
`

export { NavbarStyle, NavbarContent }
