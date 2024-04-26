import { useState } from "react";
import { BtnOpen, FaqAnswer, FaqDiv, FaqDropdown, FaqQuesion, FaqSection, High, SubTitle, Title } from "./style";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

type FAQProps = {
    question: string;
    answer: string;
};

const faqData: FAQProps[] = [
    {
        question: "A Rubbank é um banco digital?",
        answer: "Sim, a Rubbank é um banco digital líder em inovação e tecnologia."
    },
    {
        question: "Como faço para me tornar um cliente?",
        answer: "Para se tornar um cliente, basta baixar o App e criar sua conta."
    },
    {
        question: "Posso ter mais de uma conta?",
        answer: "Sim, você pode ter quantas contas desejar, cada conta do tipo que desejar."
    },
    {
        question: "Posso agendar transferências através do App?",
        answer: "Sim, você pode agendar transferências para qualquer data futura através do App."
    },
    {
        question: "Preciso comprovar renda para abrir uma conta?",
        answer: "Não, você não precisa comprovar renda para abrir uma conta na Rubbank, basta baixar o App e criar sua conta."
    },
    {
        question: "Quais tarifas são cobradas?",
        answer: "A Rubbank é um banco digital completamente livre de tarifas ou taxas."
    }
];

function FAQ() {
    const [showAnswer, setShowAnswer] = useState<boolean[]>(faqData.map(() => false));

    const toggleAnswer = (index: number) => {
        setShowAnswer(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <FaqSection>
            <Title>Dúvidas Frequentes</Title>
            <SubTitle>Se sua dúvida não está aqui, <High>fale conosco</High>.</SubTitle>
            {faqData.map((faq, index) => (
                <FaqDropdown key={index}>
                    <FaqDiv>
                        <FaqQuesion>{faq.question}</FaqQuesion>
                        <BtnOpen onClick={() => toggleAnswer(index)}>
                            {showAnswer[index] ? <MinusIcon /> : <PlusIcon />}
                        </BtnOpen>
                    </FaqDiv>
                    {showAnswer[index] && <FaqAnswer>{faq.answer}</FaqAnswer>}
                </FaqDropdown>
            ))}
        </FaqSection>
    );
}

export default FAQ;
