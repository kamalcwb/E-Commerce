import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";
import { useLocation } from "react-router-dom"

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("novidades");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Produtos:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Cor</Option>
                        <Option>branco</Option>
                        <Option>preto</Option>
                        <Option>vermelho</Option>
                        <Option>azul</Option>
                        <Option>amarelo</Option>
                        <Option>verde</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Tamanho</Option>
                        <Option>PP</Option>
                        <Option>P</Option>
                        <Option>M</Option>
                        <Option>G</Option>
                        <Option>GG</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar Produtos:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="novidades">Novidades</Option>
                        <Option value="menor">Valor (crescente)</Option>
                        <Option value="maior">Valor (decrescente)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;
