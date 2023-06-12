import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import { SidebarComponentProps } from '~/app/components/layout/default-layout/sidebar/sidebar-component.props';
import styles from './sidebar-component.module.scss';
import UtilsCommon from '~/app/utils/utils-common';

const cx = UtilsCommon.cx(styles);

const SidebarComponent = (props: SidebarComponentProps) => {
    return (
        <aside className={cx('wrapper')}>
            <h3>Sidebar</h3>a
        </aside>
    );
};

export default withTranslation(TRANSLATION_NAMESPACES.GENERAL)(SidebarComponent);
