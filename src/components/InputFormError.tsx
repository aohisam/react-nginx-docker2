import React, { useEffect, useState } from 'react'
import ConfirmForm from './ConfirmForm';

const InputFormError = (props: any) => {
    const mailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    const inputCompanyArea: Element | null = document.getElementById("companyName");
    const inputNameArea: Element | null = document.getElementById("name");
    const inputMailArea: Element | null = document.getElementById("mail");
    const inputPhoneNumberArea: Element | null = document.getElementById("phoneNumber");
    const inputInquiryMessageArea: Element | null = document.getElementById("inquiryMessage");
    const inputCompany: HTMLInputElement | null = document.getElementsByName("companyName")[0] as HTMLInputElement;
    const inputName: HTMLInputElement | null = document.getElementsByName("name")[0] as HTMLInputElement;
    const inputMail: HTMLInputElement | null = document.getElementsByName("mail")[0] as HTMLInputElement;
    const inputPhoneNumber: HTMLInputElement | null = document.getElementsByName("phoneNumber")[0] as HTMLInputElement;
    const inputInquiryMessage: HTMLInputElement | null = document.getElementsByName("inquiryMessage")[0] as HTMLInputElement;


    //エラー出力用の文字列定義
    const confirmButton: any | null = document.getElementById("confirmButton");
    const nonInputCompany: string = "会社名";
    const nonInputMail: string = "メールアドレス";
    const nonInputInquiryMessageMessage: string = "お問い合わせ内容";
    const nonInputAny = "が入力されていません。"


    //エラー出力が無い場合の処理用
    const [storageItem, setStorageItem] = useState<boolean>(false);
    const [childRendorItem, setChildRendorItem] = useState<string | null>("");


    if (confirmButton) {
        confirmButton.onclick = () => {  // *->
            const nonInputCompanyMessageElement: Element | null = document.getElementById("nonInputCompanyMessage");
            const nonInputMailMessageElement: Element | null = document.getElementById("nonInputMailMessage");
            const nonInputInquiryMessageElement: Element | null = document.getElementById("nonInputInquiryMessage");

            //会社名欄空白時のエラー処理
            if (inputCompanyArea && inputCompany) {
                if (inputCompany.value === "" && !nonInputCompanyMessageElement) {
                    const nonInputCompanyMessage: Element = document.createElement("p")
                    nonInputCompanyMessage.id = "nonInputCompanyMessage";
                    nonInputCompanyMessage.textContent = `${nonInputCompany}` + `${nonInputAny}`;
                    inputCompanyArea.appendChild(nonInputCompanyMessage);
                } else {
                    if (nonInputCompanyMessageElement && inputCompany.value != "") {
                        nonInputCompanyMessageElement.remove();
                    };
                };
            };

            //メール欄空白時のエラー処理
            if (inputMailArea && inputMail) {
                if (inputMail.value === "" && !nonInputMailMessageElement) {
                    const nonInputMailMessage: Element = document.createElement("p")
                    nonInputMailMessage.id = "nonInputMailMessage";
                    nonInputMailMessage.textContent = `${nonInputMail}` + `${nonInputAny}`;
                    inputMailArea.appendChild(nonInputMailMessage);
                } else {
                    if (nonInputMailMessageElement && inputMail.value != "") {
                        nonInputMailMessageElement.remove();
                    };
                };
            };

            //お問い合わせ欄空白時のエラー処理
            if (inputInquiryMessageArea && inputInquiryMessage) {
                if (inputInquiryMessage.value === "" && !nonInputInquiryMessageElement) {
                    const nonInputInquiryMessage: Element = document.createElement("p")
                    nonInputInquiryMessage.id = "nonInputInquiryMessage";
                    nonInputInquiryMessage.textContent = `${nonInputInquiryMessageMessage}` + `${nonInputAny}`;
                    inputInquiryMessageArea.appendChild(nonInputInquiryMessage);
                } else {
                    if (nonInputInquiryMessageElement && inputInquiryMessage.value != "") {
                        nonInputInquiryMessageElement.remove();
                    };
                };
            };


            //必須項目入力OKの場合の処理
            if (!nonInputCompanyMessageElement && !nonInputMailMessageElement && !nonInputInquiryMessageElement) {
                sessionStorage.setItem("confirm", "a");
                setChildRendorItem(sessionStorage.getItem("confirm"));
            }

        }; // <-*
    }


    return (
        <div>
        </div>
    )
}

export default InputFormError;