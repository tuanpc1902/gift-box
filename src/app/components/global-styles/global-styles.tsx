import './global-styles.scss';
import { GlobalStylesProps } from '~/app/components/global-styles/global-styles.props';
const GlobalStyles = ({ children, ...props }: GlobalStylesProps) => {
    return children;
};

export default GlobalStyles;
