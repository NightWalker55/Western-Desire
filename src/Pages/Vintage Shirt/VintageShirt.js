import React, { Component } from 'react'
import './Vintage.css'

export default class VintageShirt extends Component {

    constructor(){
        super();

        this.state = {
            collection : [
                {
                    id:1,
                    imgUrl:'https://cdn.shopify.com/s/files/1/0245/5152/2356/products/Women-Vintage-Shirt-Long-Sleeve-Loose-Flower-Print-Woman-2019-Spring-Loose-Blouses_061c4a74-121a-4048-8427-ba0ec851eb50_2000x.jpg?v=1569462617'
                },
                {
                    id:2,
                    imgUrl:'https://us03-imgcdn.ymcart.com/63559/2021/06/04/1/a/1aaac66fbc4a7572.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_650,h_975/format,webp'
                },
                 {
                    id:3,
                    imgUrl:'https://i.pinimg.com/564x/6c/14/58/6c1458ff54077a0747c51cb773bf0edd.jpg'
                },
                 {
                    id:4,
                    imgUrl:'https://i.pinimg.com/564x/3b/fc/ce/3bfcceda12cc2285a5a49089f27e30ac.jpg'
                },
                 {
                    id:5,
                    imgUrl:'https://i.pinimg.com/236x/5e/7a/86/5e7a86fd63933b41d300036b32152427.jpg'
                },
                 {
                    id:6,
                    imgUrl:'https://ae01.alicdn.com/kf/H2fd687c60a5944d2b39c2433c2469c4cW/2019-OL-Style-Office-Ladies-Chain-Print-Blouses-Autumn-Long-Sleeve-Chiffon-Blouse-Women-Lace-Up.jpg_q50.jpg'
                },
                 {
                    id:7,
                    imgUrl:'https://ae01.alicdn.com/kf/H8033505c44354ebb96c74bc9640e846fT/Autumn-Blouses-Women-Long-Sleeve-Print-Shirts-Blouse-Designer-Runway-Tops-2021-Women-High-Quality-Fashion.jpg'
                },
                 {
                    id:8,
                    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAKyhbNcMBJSrG0MtW_D1VWIaNUEM9-vLnQ&usqp=CAU'
                }
            ]
        }

    }

    render() {
        return (
            <div className="vintage">
               {
                   this.state.collection.map(item=>{
                       const {id,imgUrl} = item;
                       return (
                <div className="card" key={id}>
                <div className="image" style={{  
                backgroundImage: `url(${imgUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
                       )
                   })
               }
            </div>
        )
    }
}
