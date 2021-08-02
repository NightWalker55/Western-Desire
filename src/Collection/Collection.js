import React, { Component } from 'react'
import './Collection.css'
import Shirt from '../Images/1.jpg'
import Tops from '../Images/2.jpg'
import MomJeans from '../Images/3.jpg'
import BaggyJeans from '../Images/4.jpg'
import Bags from '../Images/5.jpg'
import CropTop from '../Images/6.jpg'
import TShirt from '../Images/7.jpg'
import Watches from '../Images/8.jpg'

export default class Collection extends Component {

    constructor(){
        super();

        this.state = {
            collection:[
                {
                    id:1,
                    title:'Vintage Shirts',
                    url:Shirt
                },
                  {
                    id:2,
                    title:'Vintage Tops',
                    url:Tops
                },
                {
                    id:3,
                    title:'Mom Jeans',
                    url:MomJeans
                },
                {
                    id:4,
                    title:'Baggy Jeans',
                    url:BaggyJeans
                },
                {
                    id:5,
                    title:'Bags',
                    url:Bags
                },
                {
                    id:6,
                    title:'Crop-Tops',
                    url:CropTop
                },
                {
                    id:7,
                    title:'T-shirts',
                    url:TShirt
                },
                {
                    id:8,
                    title:'Watches',
                    url:Watches
                },
                
            ]
        }


    }


    render() {
        return (
            <div className="card-section">
                {
                    this.state.collection.map(item=>{
                        const {id,title,url} = item;
                        return (
                            <div>
                                <h1>{title}</h1>
                                <div className="card" key={id}>
                                    <div className="image" style={{  
                                    backgroundImage: `url(${url})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                    }}></div>
                                <button className="card-button">Shop Now</button>
                            </div>
                            </div>
                        )
                    })
                }
               
            </div>
        )
    }
}
