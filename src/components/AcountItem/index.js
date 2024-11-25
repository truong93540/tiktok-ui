import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/b75e943a437979a29baec73d1c398f75.jpeg?lk3s=a5d48078&nonce=15617&refresh_token=ab5d4813bd2c0edf43fd67522c92c1c1&x-expires=1728273600&x-signature=HBCqETvZHpDSuEMyg%2Bf3VNCEox0%3D&shp=a5d48078&shcp=81f88b70"
                alt="linnhhh"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Mai Thảo Linh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>maithaolinh</span>
            </div>
        </div>
    );
}

export default AcountItem;
