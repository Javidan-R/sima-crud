import commonStyles from './base/common';
import {createUseStyles} from 'react-jss';
import typography from './base/typography';

const useGlobalStyles = createUseStyles({
    ...typography,
    ...commonStyles,
});

export default useGlobalStyles;
