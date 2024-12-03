import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlay,
    faRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, MessageIcon2, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Truong',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faPlay} />,
            title: 'Creator tools',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightToBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routers.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon width="2.5rem" height="2.5rem" />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon2 width="2.9rem" height="2.9rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://sconten.fhan2-3.fna.fbcdn.net/v/t39.30808-6/452062225_1208553763660643_401970793568623400_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGmHzK3fmdUcZ5g2VzvzFIqZSBx0jFe3Q1lIHHSMV7dDTjXM46R_aC-23lc68AYMNZvmOz0nOiMF4UmhP_oyxEq&_nc_ohc=qLiHe52ggVMQ7kNvgGZ7gNZ&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=APvUHqY47O8X4eL-KCD9wqg&oh=00_AYAS8crXVRXMJjiD83cFoBtDZD9MsK74XgYnuqaZeY-Qfw&oe=674A0C78"
                                className={cx('user-avatar')}
                                alt="Nguyễn Văn Trường"
                                fallBack="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/292811142_468439335283069_2463653578059021674_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGts28t4o3rL3lALU-ivI1xw1eky--bmaLDV6TL75uZokJOoSYrY4kSeQtFrq3tXcy7IK8QVKVnUswd9-7UPSEk&_nc_ohc=MrqngnkiFj0Q7kNvgGQzm1t&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AA4buT5aBlBzLoDa9F_Q4z-&oh=00_AYBkHN_mIWwd_qthHJoQTcROiNCL35wCl7eVSAHvMx3bBw&oe=674E7075"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
