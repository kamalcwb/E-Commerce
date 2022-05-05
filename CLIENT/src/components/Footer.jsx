import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
// import { Link } from "react-router-dom";
import LogoIMG from "../img/logo.png"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 80px;
  margin-bottom: 0px;
  margin-left: 15px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Image src={LogoIMG} />
        <Logo style={{ fontFamily: "Kings", fontSize: 26, marginTop: "5px" }}>K i n n g s</Logo>
        <Desc>
          Fundada em 2018, a Kinngs é uma loja de design de moda.
          Sob a Direção de "" desde sua fundação, a Kings  distribui produtos de moda e lifestyle,
          incluindo alta costura, pronto-a-vestir feminino e masculino, joias, relógios, acessórios e fragrâncias.

          A marca Kinngs representa a moda brasileira, inovação na moda, design icônico e dedicação ao luxo excepcional.
          A Kinngs acredita no empoderamento, motivação e crescimento de todos os funcionários.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title style={{ color: "gray" }}>Links Úteis</Title>
        <List style={{ color: "gray" }}>
          <ListItem>Home</ListItem>
          <ListItem>Carrinho de compras</ListItem>
          <ListItem>Moda Masculina</ListItem>
          <ListItem>Moda Feminina</ListItem>
          <ListItem>Cultura Jeans</ListItem>
          <ListItem>Acessórios</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Acompanhamento de Pedidos</ListItem>
          <ListItem>Lista de Desejos</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right style={{ color: "gray" }}>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Avenida Presidente Vargas, 2022
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +55 16 3025-3567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contato@kinngs.com.br
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
