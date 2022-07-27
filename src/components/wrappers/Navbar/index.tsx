import { NavbarStyle } from './styles'

import Image from 'next/image'
import { ReactElement } from 'react'

const Navbar = () => (
  <NavbarStyle>
    <div className='logo'>
      <Image src='/logo.png' layout='fill' alt='Logo' objectFit='contain' />
    </div>

    <span>Teppa</span>
  </NavbarStyle>
)

const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export { getNavbarLayout }

export default Navbar
