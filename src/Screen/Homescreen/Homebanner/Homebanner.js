import React from 'react'
import './Homebanner.css'
import homeBannerItemProduct from '../../../Homeproduvt.json';
const Homebanner = () => {
    return (
        <div className="homeBanner">
            <img className='homeBannerimg' src='https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg' />
            <div className="grayBackgroundHomeBanner"></div>

            <div className="homeBannerItemDiv">

                {
                    homeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard " key={ind}>
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((it, index )=> {
                                            return (
                                                <div className="imgBannerHomeDiv" key={index}>
                                                    <img className='imgBannerHomeDivImg' src={it} />
                                                    <div className="imgBannerImgName">boAt Stone 1800 Bluet</div>
                                                </div>
                                            );

                                        })
                                    }




                                </div>
                           
                                <div className="seeMoreHomeBanner">See More</div>
                              

                               
                            </div>
                        );
                    })
                }






            </div>

        </div>
    )
}

export default Homebanner