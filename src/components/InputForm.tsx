import React, { useEffect, useState } from "react";
import InputFormError from "./InputFormError";
import ConfirmForm from "./ConfirmForm";

const InputForm = () => {

    const [companyName, setCompanyName] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<number>();
    const [inquiryMessage, setInquiryMessage] = useState<string>("");
    

    //テスト用
    const [test, setTest] = useState<string | null>();

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = e.target.value;
        const inputName: string = e.target.name;

        if (inputName === "companyName") {
            setCompanyName(inputValue);
        } else if (inputName === "name") {
            setName(inputValue);
        } else if (inputName === "mail") {
            setMail(inputValue);
        } else if (inputName === "phoneNumber") {
            const inputNumber: number = Number(inputValue);
            setPhoneNumber(inputNumber);
        }
        else if (inputName === "inquiryMessage") {
            setInquiryMessage(inputValue);
        };
    }

    const confirmButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTest("a");
    }
    
    return (
        <div>
            <div id="companyName" className="companyName">
                <label>会社名</label>
                <input type="text" name="companyName" onChange={(e) => handleText(e)}></input>
                <ConfirmForm inputCompanyName={companyName} />
            </div>
            <div id="name" className="name">
                <label>名前</label>
                <input type="text" name="name" onChange={(e) => handleText(e)}></input>
                <ConfirmForm inputName={name} />
            </div>
            <div id="mail" className="mail">
                <label>メールアドレス</label>
                <input type="text" name="mail" onChange={(e) => handleText(e)}></input>
                <ConfirmForm inputMail={mail} />
            </div>
            <div id="phoneNumber" className="phoneNumber">
                <label>電話番号</label>
                <input type="number" name="phoneNumber" onChange={(e) => handleText(e)}></input>
                <ConfirmForm inputPhoneNumber={phoneNumber} />
            </div>
            <div id="inquiryMessage" className="inquiryMessage">
                <label>お問い合わせ</label>
                <input type="text" name="inquiryMessage" onChange={(e) => handleText(e)}></input>
                <ConfirmForm inputInquiryMessage={inquiryMessage} />
            </div>
            <button id="confirmButton" className="confirmButton" onClick={(e) => confirmButtonClick(e)}>確認
            </button>
            <InputFormError />
        </div>
    )
}

export default InputForm;