import HeaderComponent from '~/app/components/layout/components/header/header-component';
import { HeaderOnlyProps } from '~/app/components/layout/header-only/header-only.props';
import { Fragment } from 'react';

const HeaderOnlyComponent = ({ children }: HeaderOnlyProps) => {
    return (
        <Fragment>
            <HeaderComponent />
            <div className={`container`}>
                <div className={`content`}>{children}</div>
            </div>
        </Fragment>
    );
};

export default HeaderOnlyComponent;
