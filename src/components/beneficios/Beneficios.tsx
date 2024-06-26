import AccountsIcon from "./icons/AccountsIcon";
import InfoIcon from "./icons/InfoIcon";
import LockIcon from "./icons/LockIcon";
import MapPinIcon from "./icons/MapPinIcon";
import {
  BeneficiosSection,
  Title,
  Card,
  CardTitle,
  CardIcon,
  CardDiv,
} from "./style";

type CardProps = {
  title: string;
  icon: JSX.Element | null;
};

const cards: CardProps[] = [
  {
    title: "SEGURANÇA GARANTIDA A CADA TOQUE",
    icon: <LockIcon />,
  },
  {
    title: "TRANSFERÊNCIAS EM QUALQUER LUGAR",
    icon: <MapPinIcon />,
  },
  {
    title: "ACESSO A MÚLTIPLAS CONTAS",
    icon: <AccountsIcon />,
  },
  {
    title: "EXTRATO DETALHADO DA CONTA",
    icon: <InfoIcon />,
  },
];

function Beneficios({ id }: { readonly id: string }) {
  return (
    <BeneficiosSection id={id}>
      <Title>Benefícios</Title>
      <CardDiv>
        {cards.map((card) => (
          <Card key={card.title}>
            <CardTitle>{card.title}</CardTitle>
            <CardIcon>{card.icon}</CardIcon>
          </Card>
        ))}
      </CardDiv>
    </BeneficiosSection>
  );
}

export default Beneficios;
