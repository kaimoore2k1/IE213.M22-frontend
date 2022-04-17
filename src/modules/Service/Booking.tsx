
import { Form, Input, Button, Select, DatePicker } from 'antd';


function Booking() {
    return (
        <div className="booking">
            <h2 className="header-form">
                Thông tin đặt hẹn trước
            </h2>
            <div className="booking-form-img"></div>
            <div className="booking-form">
                <Form
                    layout='inline'
                    name='booking'
                >
                    <Form.Item label="Họ tên" name='tên' rules={[{ required: true, message: 'Chưa nhập Tên' }]}>
                        <Input placeholder="Nhập..." />
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="sdt" rules={[{ required: true, message: 'Chưa nhập SĐT' }]}>
                        <Input placeholder="Nhập..." />
                    </Form.Item>
                </Form>
                <Form.Item name="thucung" label="Thú cưng của bạn">
                    <Input placeholder="Tên thú cưng..." />
                </Form.Item>
                <Form.Item label="Chọn dịch vụ" rules={[{ required: true, message: 'Vui lòng chọn dịch vụ' }]}>
                    <Select
                        placeholder="Chọn dịch vụ bạn muốn đặt hẹn trước"
                    >
                        <Select.Option value="cattia">Cắt móng, tỉa lông, tạo kiểu</Select.Option>
                        <Select.Option value="tronggiu">Trông giữ thú cưng</Select.Option>
                        <Select.Option value="spa">Spa, massage</Select.Option>
                        <Select.Option value="khambenh">Đặt hẹn khám bệnh</Select.Option>
                    </Select>
                </Form.Item>
                <Form
                    layout='inline'
                    name='booking'
                >
                    <Form.Item label="Thời gian hẹn" rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}>
                        <Select
                            placeholder="Chọn thời gian"
                        >
                            <Select.Option value="sang">Sáng (7h30-11h)</Select.Option>
                            <Select.Option value="chieu">Chiều (13h30-17h)</Select.Option>
                            <Select.Option value="toi">Tối (19h30 -22h)</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Chọn ngày" rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}>
                        <DatePicker />
                    </Form.Item>
                </Form>
                <Form.Item name='noidung' label="Nội dung">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name='submit'>
                    <Button type="primary" htmlType="submit">
                        Gửi
                    </Button>
                </Form.Item>
            </div>
        </div>
    )
}

export default Booking