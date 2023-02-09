import React from 'react'

const InputFormError = () => {
    const mailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    const inputCompanyArea: Element | null = document.getElementById("companyName");
    const inputNameArea: Element | null = document.getElementById("name");
    const inputMailArea: Element | null = document.getElementById("mail");
    const inputPhoneNumber: Element | null = document.getElementById("phoneNumber");
    const inputInquiryMessage: Element | null = document.getElementById("inquiryMessage");

    
    return (
        <div>
        </div>
    )
}

export default InputFormError