import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBack } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';

export const RegenerateButton = () => (
    <>
        <a
        className='
        group
        bg-transparent 
        flex items-center justify-center
        hover:bg-green-500 
        text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>
            <FontAwesomeIcon icon={faArrowRotateBack} className="w-4 mr-2 text-green-500 group-hover:text-white"></FontAwesomeIcon>
            Regenerate Content
        </a>
    </>
)