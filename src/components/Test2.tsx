import React, { useEffect, useState } from 'react'
import InputForm from './InputForm'
import Test from './Test'

const Test2 = () => {
    const [test2, setTest2] = useState<string | null>();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTest2("a");
    }
    useEffect(() => {

    }, [test2])
    return (
        <div>
            {test2 ? <Test /> : <InputForm />}
            <button onClick={(e) => handleClick(e)}>テスト</button>
        </div>
    )
}

export default Test2