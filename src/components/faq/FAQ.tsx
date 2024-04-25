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
        question: "Como faço para me tornar um cliente?",
        answer: "Para se tornar um cliente, basta preencher o formulário de cadastro em nosso site."
    },
    {
        question: "Qual o valor do frete?",
        answer: "O valor do frete é calculado de acordo com a distância e o peso do produto."
    },
    {
        question: "Qual o prazo de entrega?",
        answer: "O prazo de entrega varia de acordo com a localidade e a disponibilidade do produto."
    },
    {
        question: "Como faço para rastrear meu pedido?",
        answer: "Para rastrear seu pedido, basta acessar a área do cliente em nosso site."
    },
    {
        question: "Posso trocar um produto?",
        answer: "Sim, você pode trocar um produto em até 7 dias após o recebimento."
    },
    {
        question: "Como faço para cancelar um pedido?",
        answer: "Para cancelar um pedido, basta acessar a área do cliente em nosso site."
    },
    {
        question: "Qual o horário de atendimento?",
        answer: "Nosso horário de atendimento é de segunda a sexta, das 8h às 18h."
    },
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
