import React from 'react'

function NavbarProfile() {
    // TODO: Implement toggle functionality to see menu
    // const [toggle, setToggle] = useState(true);

  return (
    <div className='flex space-x-5 items-center md:pr-5'>
        <div className='cursor-pointer'>
            <img src="./assets/imgs/person-placeholder.jpg" alt="A placeholder of a person"  className='w-10 h-10 md:w-10 md:h-10 rounded-full'/>
        </div>
        <div className=' hidden lg:inline'>
            <h3 className='font-bold text-gray-900 dark:text-white text-lg'>John Doe </h3>
            <p className='text-sm text-gray-600 dark:text-gray-300'>Admin Store</p>
        </div>
    </div>
  )
}

export default NavbarProfile