import nunitoBold from '../../fonts/Nunito/NunitoSans-Bold.ttf';
import nunitoLight from '../../fonts/Nunito/NunitoSans-Light.ttf';
import nunitoSemiBold from '../../fonts/Nunito/NunitoSans-SemiBold.ttf';
import nunitoRegular from '../../fonts/Nunito/NunitoSans-Regular.ttf';
import nunitoThin from '../../fonts/Nunito/NunitoSans-ExtraLight.ttf';
import nunitoXBlack from '../../fonts/Nunito/NunitoSans-ExtraBold.ttf';
const typography = {
  '@font-face': [
    {
      fontFamily: 'Nunito Bold',
      src: `url("${nunitoBold}")`,
    },
    {
      fontFamily: 'Nunito Light',
      src: `url("${nunitoLight}")`,
    },
    {
      fontFamily: 'Nunito Medium',
      src: `url("${nunitoSemiBold}")`,
    },
    {
      fontFamily: 'Nunito Regular',
      src: `url("${nunitoRegular}")`,
    },
    {
      fontFamily: 'Nunito Thin',
      src: `url("${nunitoThin}")`,
    },
    {
      fontFamily: 'Nunito XBlack',
      src: `url("${nunitoXBlack}")`,
    }
  ],
};

export default typography;
