import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>

        <div className='flex flex-grow-1 justify-evenly max-w-2xl my-6'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='HOME' Icon={BadgeCheckIcon} />
            <HeaderItem title='HOME' Icon={CollectionIcon} />
            <HeaderItem title='HOME' Icon={LightningBoltIcon} />
            <HeaderItem title='HOME' Icon={SearchIcon} />
            <HeaderItem title='HOME' Icon={UserIcon} />
        </div>
            <Image
                src="https://links.papareact.com/ua6"
                height={100}
                width={100}
                className='object-contain'
            />
        </header>
    )
}

export default Header
