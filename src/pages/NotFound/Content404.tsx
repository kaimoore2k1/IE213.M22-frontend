
import { UndoOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import img404 from "../../assets/images/le.png";

function Content404() {
    return (
        <div className="error">
            <div className="img1"></div>
            <div className="content-error">
                <div className="e404">
                    <span>4</span>
                    <img src={img404} alt="Error" />
                    <span>4</span>
                </div>
                <h2>Xin lỗi trang bạn tìm hiện không có!<br />
                    Vui lòng quay lại trang chủ!
                </h2>
                <Link to={'/'}>
                    <UndoOutlined className='undo' />
                </Link>
                <p>Quay lại</p>
            </div>
            <div className="img2"></div>
        </div>
    )
}

export default Content404
