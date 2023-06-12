import { HeaderComponentProps } from '~/app/components/layout/components/header/header-component.props';
import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import styles from './header-component.module.scss';
import utilsCommon from '~/app/utils/utils-common';
import { Fragment } from 'react';

const cx = utilsCommon.cx(styles);
// https://youtu.be/7dKTNAFw9C0, https://youtu.be/zPIkyluosVs
const HeaderComponent = (props: HeaderComponentProps) => {
    return (
        <Fragment>
            <header className={cx('wrapper')}>
                <div className={cx('content')}></div>
            </header>
        </Fragment>
    );
};

export default withTranslation(TRANSLATION_NAMESPACES.GENERAL)(HeaderComponent);
