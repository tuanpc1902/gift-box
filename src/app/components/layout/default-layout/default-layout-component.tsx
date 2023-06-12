import HeaderComponent from '~/app/components/layout/components/header/header-component';
import SidebarComponent from '~/app/components/layout/default-layout/sidebar/sidebar-component';
import { DefaultLayoutProps } from '~/app/components/layout/default-layout/default-layout.props';
import styles from './dafault-layout.module.scss';
import UtilsCommon from '~/app/utils/utils-common';

const cx = UtilsCommon.cx(styles);
const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
    return (
        <div className={cx('wrapper')}>
            <HeaderComponent />
            <div className={cx('container')}>
                <SidebarComponent />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayoutComponent;
