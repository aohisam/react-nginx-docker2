import React, { useEffect, useState } from "react";
import InputFormError from "./InputFormError";

const InputForm = () => {

    const [companyName, setCompanyName] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<number>();
    const [inquiryMessage, setInquiryMessage] = useState<string>("");

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

    useEffect(() => {
        console.log(companyName);
        console.log(name);
        console.log(mail);
        console.log(phoneNumber);
        console.log(inquiryMessage);
    }, [companyName, name, mail, phoneNumber, inquiryMessage]);


    return (
        <div>
            <div id="companyName" className="companyName">
                <label>会社名</label>
                <input type="text" name="companyName" onChange={(e) => handleText(e)}></input>
            </div>
            <div id="name" className="name">
                <label>名前</label>
                <input type="text" name="name" onChange={(e) => handleText(e)}></input>
            </div>
            <div id="mail" className="mail">
                <label>メールアドレス</label>
                <input type="text" name="mail" onChange={(e) => handleText(e)}></input>
            </div>
            <div id="phoneNumber" className="phoneNumber">
                <label>電話番号</label>
                <input type="number" name="phoneNumber" onChange={(e) => handleText(e)}></input>
            </div>
            <div id="inquiryMessage" className="inquiryMessage">
                <label>お問い合わせ</label>
                <input type="text" name="inquiryMessage" onChange={(e) => handleText(e)}></input>
            </div>
            <button id="confirm" className="confirm">確認</button>
            <InputFormError></InputFormError>
        </div>
    )
}

export default InputForm;