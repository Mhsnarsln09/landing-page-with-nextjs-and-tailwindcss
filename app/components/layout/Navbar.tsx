'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
    path: string;
    label: string;
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/listings', label: 'Listings' },
    { path: '/services', label: 'Services' },
    { path: '/blogs', label: 'Blogs' },
]

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => (
    <Link
        href={href}
        className={className}
    >
        {children}
    </Link>
)

const Navbar: React.FC = () => {
    const pathname: string = usePathname()

    const isActivePath = (path: string): string => {
        return pathname === path ? 'bg-hover border' : 'hover:text-hover'
    }

    return (
        <nav className="sticky top-0  bg-white z-50 h-[80px] px-[30px] xl:px-3 shadow-xl">
            <div className='max-w-7xl mx-auto h-full flex items-center justify-between'>
                <div className="hidden xl:flex items-center text-textColor2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            href={'/'}
                            className={`rounded-[30px] w-[80px] h-[40px] inline-flex items-center justify-center text-base font-medium ${isActivePath(item.path)}`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primary'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_3)">
                                <path d="M23.715 9.16499L12.465 0.164989C12.332 0.0584866 12.1667 0.000457764 11.9963 0.000457764C11.8258 0.000457764 11.6605 0.0584866 11.5275 0.164989L0.2775 9.16499C0.156135 9.26236 0.0680565 9.39506 0.025468 9.54471C-0.0171205 9.69436 -0.0121105 9.85356 0.0398037 10.0002C0.091718 10.1469 0.187966 10.2738 0.315214 10.3634C0.442461 10.4529 0.594407 10.5006 0.75 10.5H2.25V23.25C2.25 23.4489 2.32902 23.6397 2.46967 23.7803C2.61032 23.921 2.80109 24 3 24H18V22.5H15V15.75C15 15.5511 14.921 15.3603 14.7803 15.2197C14.6397 15.079 14.4489 15 14.25 15H9.75C9.55109 15 9.36032 15.079 9.21967 15.2197C9.07902 15.3603 9 15.5511 9 15.75V22.5H3.75V10.5H16.5V8.99999H2.8875L12 1.70999L21.1125 8.99999H21C20.8011 8.99999 20.6103 9.07901 20.4697 9.21966C20.329 9.36031 20.25 9.55108 20.25 9.74999V14.25H21.75V10.5H23.25C23.405 10.4991 23.5558 10.4502 23.6819 10.3601C23.8079 10.27 23.903 10.143 23.9539 9.9967C24.0049 9.85037 24.0093 9.69184 23.9665 9.54291C23.9237 9.39398 23.8359 9.26195 23.715 9.16499ZM10.5 16.5H13.5V22.5H10.5V16.5Z" fill="white" />
                                <path d="M18.75 19.9425L17.7825 18.975L16.725 20.0325L18.225 21.5325C18.3655 21.6722 18.5556 21.7506 18.7537 21.7506C18.9519 21.7506 19.142 21.6722 19.2825 21.5325L23.7825 17.0325L22.725 15.975L18.75 19.9425Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_3">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className='text-[20px] font-semibold'>
                        Logo
                    </h2>
                </div>
                <div className='hidden xl:flex items-center gap-5'>
                    <button className='flex items-center gap-2'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5" stroke="#2B2B2B" stroke-width="1.6" stroke-linecap="round" />
                            <path d="M9.99999 9.99998C11.4912 9.99998 12.7 8.79119 12.7 7.29998C12.7 5.80881 11.4912 4.59998 9.99999 4.59998C8.50878 4.59998 7.29999 5.80881 7.29999 7.29998C7.29999 8.79119 8.50878 9.99998 9.99999 9.99998Z" stroke="#2B2B2B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#2B2B2B" stroke-width="1.6" />
                        </svg>
                        <span className='text-base font-medium'>
                            Login/Register
                        </span>
                    </button>
                    <button className='h-[50px] w-[170px] rounded-[50px] bg-primary flex items-center justify-center gap-2'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7625 7.63751L10.3875 0.137506C10.2766 0.0487541 10.1389 0.000396729 9.99686 0.000396729C9.85486 0.000396729 9.71709 0.0487541 9.60624 0.137506L0.23124 7.63751C0.130102 7.71865 0.0567036 7.82923 0.0212132 7.95394C-0.0142772 8.07865 -0.0101023 8.21131 0.0331596 8.33354C0.0764215 8.45578 0.156628 8.56153 0.262668 8.63615C0.368707 8.71076 0.495329 8.75056 0.62499 8.75001H1.87499V19.375C1.87499 19.5408 1.94084 19.6997 2.05805 19.8169C2.17526 19.9342 2.33423 20 2.49999 20H15V18.75H12.5V13.125C12.5 12.9592 12.4341 12.8003 12.3169 12.6831C12.1997 12.5659 12.0408 12.5 11.875 12.5H8.12499C7.95923 12.5 7.80026 12.5659 7.68305 12.6831C7.56584 12.8003 7.49999 12.9592 7.49999 13.125V18.75H3.12499V8.75001H13.75V7.50001H2.40624L9.99999 1.42501L17.5937 7.50001H17.5C17.3342 7.50001 17.1753 7.56585 17.058 7.68306C16.9408 7.80027 16.875 7.95925 16.875 8.12501V11.875H18.125V8.75001H19.375C19.5041 8.74926 19.6298 8.70854 19.7349 8.63344C19.8399 8.55834 19.9191 8.45254 19.9616 8.3306C20.0041 8.20866 20.0077 8.07655 19.9721 7.95244C19.9364 7.82833 19.8632 7.71831 19.7625 7.63751ZM8.74999 13.75H11.25V18.75H8.74999V13.75Z" fill="white" />
                            <path d="M15.625 16.6188L14.8187 15.8125L13.9375 16.6937L15.1875 17.9437C15.3046 18.0602 15.463 18.1255 15.6281 18.1255C15.7932 18.1255 15.9516 18.0602 16.0687 17.9437L19.8187 14.1937L18.9375 13.3125L15.625 16.6188Z" fill="white" />
                        </svg>
                        <span className='text-white text-base font-medium mt-0.5'>
                            Add Listing
                        </span>
                    </button>
                </div>
                <div className='block xl:hidden'>
                    <button>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0H0V2.18182H24V0Z" fill="#0B090A" />
                            <path d="M24 9.81818H0V12H24V9.81818Z" fill="#0B090A" />
                            <path d="M24 19.6364H0V21.8182H24V19.6364Z" fill="#0B090A" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar