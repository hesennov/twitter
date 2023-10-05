import React from 'react'
import Logo from '@/layout/main/sidebar/logo/index'
import Menu from '@/layout/main/sidebar/menu/index'
const index = () => {
  return (
    <aside className='w-[275px] min-h-screen'>
        <Logo/>
        <Menu/>
    </aside>
  )
}

export default index