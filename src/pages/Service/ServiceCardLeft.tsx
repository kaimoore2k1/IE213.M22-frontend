import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCardLeft() {
    return (
        <Link to="cattia">
            <div className="main-service-imgLeft">
                <div className="circle"></div>
                <div className="main-content">
                    <h2>Cắt móng, tỉa lông, tạo kiểu</h2>
                    <p>Dịch vụ cắt tỉa lông tạo kiểu cho chó mèo Sen Shop chúng tôi
                        “cân đo đong đếm” xem kiểu tóc nào đẹp và phù hợp nhất các
                        bé nhất. Đảm bảo sau khi được tỉa lông tạo kiểu, các bé sẽ
                        vô cùng xinh xắn
                        <br />Với các dịch vụ như: cắt móng, vệ sinh tai mắt, tỉa lông,tạo kiểu,...</p>
                    <span>Bấm vào xem chi tiết</span>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCardLeft