import {renderToStaticMarkup} from 'react-dom/server';
import {az} from './az';
import {en} from './en';
import {ru} from './ru';
import {useStore} from 'store/store.config';

const useLocalization = () => {
    const languages = useStore('locale');

    return (key: keyof typeof az | keyof typeof en | keyof typeof ru, dynamicValues: any = {}) => {

        let formattedText = languages[key] || '';
        Object.keys(dynamicValues).forEach((dynamicKey: string) => {
            const dynamicValue = dynamicValues[dynamicKey];
            if (typeof dynamicValue === 'string') {
                formattedText = formattedText.replace(`{${dynamicKey}}`, dynamicValue);
            } else {
                const jsxString = renderToStaticMarkup(dynamicValue);
                formattedText =
                    <div dangerouslySetInnerHTML={{__html: formattedText.replace(`{${dynamicKey}}`, jsxString),}}></div>;
            }
        });

        return formattedText;
    };
};

export default useLocalization;
