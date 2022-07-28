import { NavbarStyle } from './styles'

import { ReactElement } from 'react'

const Navbar = () => (
  <NavbarStyle>
    <div className='logo'>
      <img src='/logo.png' alt='Logo' />
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
