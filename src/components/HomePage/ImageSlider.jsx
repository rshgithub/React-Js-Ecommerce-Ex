import React from "react";
import { Carousel} from 'antd';
import Sdata from '../../Sdata'

const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      appendDots: (dots) => {
        return <ul style={{ margin: 0 }}>{dots}</ul>
      },
    }

  return (

    <>
    <Carousel {...settings}>
      {Sdata.map((value, index) => {
        return (
          <>
            <div className='box d_flex top' key={index}>
              <div className='left'>
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <a className='btn-primary'>MORE</a>
              </div>
              <div className='right'>
                <img src={value.cover} alt='' />
              </div>
            </div>
          </>
        )
      })}
    </Carousel>
  </>
  );
        }
        
 export default ImageSlider;