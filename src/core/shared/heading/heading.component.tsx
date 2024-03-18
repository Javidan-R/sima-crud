import './heading.style';
import {IHeadingType} from './heading.types';
import {Button} from 'antd';

const HeadingComponent = ({title, add, buttonText, noSpace,}: IHeadingType) => {
    return (
        <div className={`heading mb-40 ${noSpace && 'px-0'}`}>
            <div className='row align-center'>
                <div className='col-md-6'>
                    <h4 className='heading__title'>
                        {title}
                    </h4>
                </div>
                {
                    add &&
                    <div className='col-md-6 text-right'>
                        <Button onClick={add}>
                            {
                                buttonText ?
                                    buttonText
                                    :
                                    'Əlavə et'
                            }
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
};

export default HeadingComponent;
