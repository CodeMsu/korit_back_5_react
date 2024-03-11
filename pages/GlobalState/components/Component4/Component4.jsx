import React from 'react';
import { useRecoilState } from 'recoil';
import { inputState } from '../../atoms/inputState';

function Component4() {
    const [value, setValue] = useRecoilState(inputState);

    return (
        <div>
            <input value={value} type="text" onChange={(e) => setValue(() => e.target.value)}/>
        </div>
    );
}

export default Component4;