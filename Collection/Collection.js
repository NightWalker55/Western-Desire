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
import CollectionSegment from '../Collection-Segment/Collection-Segment'

export default class Collection extends Component {
    constructor(){
        super();
        this.state = {
            collection:[
                {
                    id:1,
                    title:'Vintage Shirts',
                    url:Shirt,
                    linkUrl:"Shirt"
                },
                  {
                    id:2,
                    title:'Vintage Tops',
                    url:Tops,
                    linkUrl:"Tops"
                },
                {
                    id:3,
                    title:'Mom Jeans',
                    url:MomJeans,
                    linkUrl:"MomJeans"
                },
                {
                    id:4,
                    title:'Baggy Jeans',
                    url:BaggyJeans,
                    linkUrl:"BaggyJeans"
                },
                {
                    id:5,
                    title:'Bags',
                    url:Bags,
                    linkUrl:"Bags"
                },
                {
                    id:6,
                    title:'Crop-Tops',
                    url:CropTop,
                    linkUrl:"CropTops"
                },
                {
                    id:7,
                    title:'T-shirts',
                    url:TShirt,
                    linkUrl:"T-shirts"
                },
                {
                    id:8,
                    title:'Watches',
                    url:Watches,
                    linkUrl:"Watches"
                },
                
            ]
        }


    }


    render() {
        return (
            <div className="card-section">
                {
                    this.state.collection.map(item=>{
                        const {id} = item;
                        return (
                          <CollectionSegment key={id} {...item}   />
                        )
                    })
                }
               
            </div>
        )
    }
}


