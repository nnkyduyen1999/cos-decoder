import React from "react";
import ProductItem from "../../components/ProductItem/product-item";

const Home = (props) => {
  const topProducts = [
    {
      id: "1",
      image: "/images/Organic Flowers Cleansing Water.jpg",
      name: "Organic Flowers Cleansing Water",
      brand: "Whamisa",
    },
    {
      id: "2",
      image: "",
      name: "Jeju Cherry Blossom Tone-up Cream",
      brand: "Innisfree",
    },
    {
      id: "3",
      image: "",
      name: "Tone up No Sebum Sunscreen",
      brand: "Innisfree",
    },
    {
      id: "4",
      image: "",
      name: "Jeju Cherry Blossom Skin",
      brand: "Innisfree",
    },
  ];

  const topIngredients = [
    {
      id: "1",
      image: "",
      name: "Urea",
      usage: "Phục hồi",
    },
    {
      id: "2",
      image: "",
      name: "BHA",
      usage: "Tẩy tế bào chết",
    },
    {
      id: "3",
      image: "",
      name: "Glycolic acid",
      usage: "Tẩy tế bào chết",
    },
    {
      id: "4",
      image: "",
      name: "Panthenol",
      usage: "Phục hồi",
    },
  ];

  const topRoutines = [
    {
      id: "1",
      image: "",
      name: "Routine trị mụn",
      username: "Trần Quỳnh Như",
    },
    {
      id: "2",
      image: "",
      name: "Routine sáng da",
      username: "Nguyễn Ngọc Trân",
    },
    {
      id: "3",
      image: "",
      name: "Routine chống lão hoá",
      username: "Mã Tú Trinh",
    },
    {
      id: "4",
      image: "",
      name: "Routine cơ bản",
      username: "Lý Thuý Kieeuf",
    },
  ];

  const topCompareProducts = [
    {
      id: "1",
      first: {
        image: "",
        name: "Low-pH Good Morning Cleanser",
        brand: "CosRX",
      },
      second: {
        image: "",
        name: "Salicylic Acid Exfoliating Cleanser",
        brand: "CosRX",
      },
    },
    {
      id: "2",
      first: {
        image: "",
        name: "Skin Perfecting 2% BHA Liquid Exfoliant",
        brand: "Paula's Choice",
      },
      second: {
        image: "",
        name: "BHA Blackhead Power Liquid",
        brand: "CosRX",
      },
    },
  ];

  return (
    <div>
      hello
      <ProductItem item={topProducts[0]}/>
    </div>
  );
};

export default Home;
