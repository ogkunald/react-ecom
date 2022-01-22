import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';



const Navbar = () => {
  return (
        <div className='h-16'>
            <div className='flex justify-between py-2.5 px-5 items-center'>
                <div className='flex flex-row items-center flex-1'>
                <span className='cursor-pointer flex text-base'>EN</span>
                <div className='border-gray-700 border-2 m-2'>
                <input placeholder="Search" className='outline-none'/>
                <Search className='text-gray-500'/>
                </div>
                </div>
                <div className='flex-1 text-center'>
                <h1 className='font-extrabold text-4xl '>NZSHOP.</h1>
                </div>
                <div className='flex flex-1 items-center justify-end'>
                    <div className='text-xl cursor-pointer m-2'>
                        Register
                    </div>
                    <div className='text-xl cursor-pointer m-2'>
                        Sign In
                    </div>
                    <div className='text-xl cursor-pointer m-2'>
                        <Badge badgeContent={0} color='primary'>
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;


