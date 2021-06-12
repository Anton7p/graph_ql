import React, {useEffect, useState} from 'react';
import {icons} from './icons'
import {IData} from "./types/types";
import {GET_DATA} from "./query/data";
import {useQuery} from "@apollo/client";
import {useWindowDimensions} from "./hook/useWindowDimensions";

function filterWindowWidth(arr: IData): IData {
    if (window.innerWidth > 1020) return arr;
    return arr.filter(el => !el.exclude)
        .sort((a, b) => a.id - b.id)
}


function App() {
    const {width} = useWindowDimensions()


    const {data, loading} = useQuery(GET_DATA)
    const [menuItems, setMenuItems] = useState<IData>([])

    useEffect(() => {
        if (!loading) {
            setMenuItems(filterWindowWidth([...data.getData]))
        }
    }, [data, loading, width])
    return (
        <div className="wrapper">
            <div className="menu ">
                {menuItems.map(el => {
                    return (<div className="menu_item  " key={el.id}>
                            <div className="menu_item__img ">
                                <img src={icons[el.img]} alt=""/>
                            </div>
                            <div className="menu_item__title  ">
                                <span>{el.title}</span>
                                <small>{el.by}</small>
                            </div>
                            <div className="menu_corner"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;