import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(true)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' }
    ];
    return (
        <nav className='bg-yellow-300'>
            <div onClick={() => setOpen(!open)} className='p-4 text-xl font-semibold '>
                <div className='lg:hidden'>
                    {
                        open ? <HiOutlineMenuAlt1></HiOutlineMenuAlt1> : <GrClose></GrClose>
                    } 
                </div>
                <ul className={`lg:flex gap-10 absolute lg:static bg-yellow-300 duration-1000 p-4 ${open ? '-top-32': 'top-12'}`}>
                        {
                            routes.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                        }
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;