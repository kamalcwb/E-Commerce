import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost5000/api/produtos=${cat}` : "http://localhost5000/api/produtos");

                setProducts(res.data)
            } catch (err) { }
        };
        getProducts();
    }, [cat])

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            )
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "novidades") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "menor") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.preco - b.preco)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.preco - a.preco)
            );
        }
    }, [sort]);

    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product item={item} key={item.id} />)}
        </Container>
    );
};

export default Products;