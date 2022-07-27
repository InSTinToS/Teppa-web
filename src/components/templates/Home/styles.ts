import { NavbarContent } from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const HomeStyle = styled.main.attrs({ className: '' })`
  ${NavbarContent}
  ${tw`flex items-center justify-center flex-col h-screen w-full`};
`
export { HomeStyle }
