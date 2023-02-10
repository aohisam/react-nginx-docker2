import React from 'react'

const Test = () => {


    const returnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        sessionStorage.removeItem("confirm");
    }
    return (
        <div>
            Test
            <button onClick={(e) => returnClick(e)}>戻る</button>
        </div>
    )
}

export default Test