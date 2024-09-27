
"use client"

import {useRecoilState, useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";

import {useEffect, useState} from "react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import "bootstrap/dist/css/bootstrap.css"
import "../../singleProduct.css"


export default function Products ({params}){

    const [isMounted, setIsMounted] = useState(false);
    const [comics, setComics] = useRecoilState(ComicsState);



    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return <h5>loading..</h5>
    }

    const { slug } = params;
    const exists = comics.some(item => item.id === parseInt(slug));

    if(!exists) {
        return <div>
            <Navbar/>
            <h1>page doesnt exist</h1>
        </div>
    }
    ;


    return <>

        <Navbar/>

            {comics.map((comic)=>{

                return (comic.id===parseInt(slug))?
                    (

                        <div className="MainContainer productContainer">
                            <div className="singleProductWrapper d-flex justify-content-between " key={comic.id}>

                                <div className="singleProductImg">
                                    <img src={comic.imgURL}/>
                                </div>
                                <div className="singleProductTitle">
                                    <h1>{comic.title}</h1>
                                    <p>author:{comic.author}</p>
                                    <hr/>
                                    <h5>Descripton</h5>
                                    <i>{comic.description}</i>
                                    <p>{comic.format}</p>
                                </div>


                            </div>
                        </div>

                    )
                    :
                    ("")

            })}


        <Footer/>
    </>


};

