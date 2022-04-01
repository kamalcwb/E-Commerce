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

const Container = styled.div`
    display: flex;
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

const Right = styled.div`
    flex: 1;
    padding: 20px;
  
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
                <Logo>BdN</Logo>
                <Desc>
                    Fundada em 2018, a Branca de Neve é uma loja de design de moda.
                    Sob a Direção de Ana Laura Menegueti desde sua fundação, a BdN  distribui produtos de moda e lifestyle,
                    incluindo alta costura, pronto-a-vestir feminino e masculino, joias, relógios, acessórios e fragrâncias.

                    A marca Branca de Neve representa a moda brasileira, inovação na moda, design icônico e dedicação ao luxo excepcional.
                    A BdN acredita no empoderamento, motivação e crescimento de todos os funcionários.
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
                <Title>Links Úteis</Title>
                <List>
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
            <Right>
                <Title>Contato</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Avenida Presidente Vargas, 2022
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +55 16 3025-3567
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contato@brancadeneve.com.br
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
