import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";


export default function AllProduct({heading}) {
    const productData = useSelector((state) => state.product.productList);
    const categoryList = [...new Set(productData.map((el) => el.category))];

    //filter data display
    const [filterby, setFilterBy] = useState("");
    const [dataFilter, setDataFilter] = useState([]);

    useEffect(() => {
        setDataFilter(productData);
    }, [productData]);

    const handleFilterProduct = (category) => {
        setFilterBy(category)
        const filter = productData.filter(
            (el) => el.category.toLowerCase() === category.toLowerCase()
        );
        setDataFilter(() => {
            return [...filter];
        });
    };
    return (
        <div>
            <div className="my-5">
                <h2 className='font-bold text-2xl text-slate-100 '>{heading}</h2>

                <div className="flex gap-4 mt-6 justify-center overflow-scroll scrollbar-none">
                    {
                        categoryList[0] && categoryList.map(el => {
                            return (<FilterProduct category={el} isActive={el.toLowerCase() === filterby.toLowerCase()} key={el} onClick={() => handleFilterProduct(el)} />)
                        })
                    }
                </div>

                <div className="flex flex-wrap gap-4 mt-5 justify-center">
                    {
                        dataFilter.map(el => {
                            return (
                                <CardFeature
                                    key={el._id}
                                    id={el._id}
                                    image={el.image}
                                    name={el.name}
                                    category={el.category}
                                    price={el.price} //change
                                />
                            )
                        })
                    }
                </div>
            </div>
           

        </div>
    )
}
