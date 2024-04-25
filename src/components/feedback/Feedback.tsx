import QuoteLeft from "./icons/QuoteLeft";
import QuoteRight from "./icons/QuoteRight";
import { Card, CardColumnLeft, CardColumnRight, CardContent, CardDiv, CardImg, CardName, CardRole, Column, Columns, FeedbackSection, Quote, Title } from "./style";

type cardProps = {
    name: string;
    role: string;
    content: string;
    imagePath: string;
};

const cards: cardProps[] = [
    {
        name: "Felipe Wunder",
        role: "Diretor de Finanças",
        content: "Superou minhas expectativas. As funcionalidades oferecidas pelo app facilitaram muito o meu dia a dia, migrei definitvamente para a Rubbank. Recomendo.",
        imagePath: "/src/assets/felipe-wunder.jpg"
    },
    {
        name: "Leonardo Cenedes",
        role: "Diretor de Marketing",
        content: "O app é muito prático, pois gerencio todas as minhas contas em um só lugar. Seu design arrojado e funcionalidades inovadoras foram um diferencial na hora de optar pela Rubbank.",
        imagePath: "/src/assets/leonardo-cenedes.jpg"
    },
    {
        name: "Igor Miras",
        role: "Investidor",
        content: "Superou minhas expectativas. As funcionalidades oferecidas pelo app facilitaram muito o meu dia a dia, migrei definitvamente para a Rubbank. Recomendo.",
        imagePath: "/src/assets/igor-miras.jpg"
    },
];

function Feedback() {
    return (
        <FeedbackSection>
            <Title>Feedback</Title>
            <CardDiv>
                {cards.map((card) => (
                    <Card key={card.name}>
                        <Columns>
                            <CardColumnLeft>
                                <CardImg src={card.imagePath} alt={card.name} />
                                <CardName>{card.name}</CardName>
                                <CardRole><em>{card.role}</em></CardRole>
                            </CardColumnLeft>
                            <CardColumnRight>
                                <Column align="flex-start">
                                    <Quote>
                                        <QuoteLeft />
                                    </Quote>
                                    <CardContent>{card.content}</CardContent>
                                </Column>
                                <Column align="flex-end">
                                    <Quote>
                                        <QuoteRight />
                                    </Quote>
                                </Column>
                            </CardColumnRight>
                        </Columns>
                    </Card>
                ))}
            </CardDiv>
        </FeedbackSection >
    );
}

export default Feedback;