import React from 'react'
import moment from "moment";

const RenderItem = ({item}) => {
  return (
    <>
                <div className="wrapper__item--img">
                  <img src={item.node.field_photo_image_section} alt="images" />
                </div>
                <div className="wrapper__item--text">
                  <h1 className="wrapper__item--text--main">
                    {item.node.title ? item.node.title : ""}
                  </h1>
                  <p className="wrapper__item--text--time">
                    {moment(item.node.last_update).format("ll, h:mm A")} IST
                  </p>
                </div>  
    </>

                )
}

export default RenderItem