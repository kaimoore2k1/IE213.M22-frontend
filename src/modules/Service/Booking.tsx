
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { useState } from 'react';

interface informationForm {
    name?: string;
    number?: number[];
    pet?: string;
    service?: string;
    time?: string;
    dateTime?: string;
    content?: string
}

function Booking() {

    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [pet, setPet] = useState<string>("");
    const [service, setService] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [dateTime, setDateTime] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const handleSubmit: () => void = () => {
        console.log(`${name}, ${number}, ${pet}, ${service}, ${time}, ${dateTime}, ${content}`);
    }
    return (
        <div className="booking">
            <h2 className="header-form">
                Thông tin đặt hẹn trước
            </h2>
            <div className="booking-form-img"></div>
            <Form name="booking-form"
                wrapperCol={{ span: 24 }}
                autoComplete="off"
                className="booking-form">
                <Row justify="space-between">
                    <Col span={11}>
                        <Form.Item style={{ width: '100%' }} label="Họ tên" name='tên' rules={[{ required: true, message: 'Chưa nhập Tên' }]}>
                            <Input onChange={(e) => setName(e.target.value)} placeholder="Nhập..." />
                        </Form.Item>
                    </Col>
                    <Col span={11}>
                        <Form.Item className='sdt' label="Số điện thoại" name="sdt" rules={[{ required: true, message: 'Chưa nhập SĐT' }]}>
                            <Input onChange={(e) => setNumber(e.target.value)} placeholder="Nhập..." />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item style={{ width: '60%' }} name="thucung" label="Thú cưng của bạn" rules={[{ required: true, message: 'Chưa nhập thú cưng' }]}>
                    <Input onChange={(e) => setPet(e.target.value)} placeholder="Tên thú cưng..." />
                </Form.Item>
                <Form.Item style={{ width: '70%' }} name="service" label="Chọn dịch vụ" rules={[{ required: true, message: 'Vui lòng chọn dịch vụ' }]}>
                    <Select onChange={(e) => setService(e)} placeholder="Chọn dịch vụ bạn muốn đặt hẹn trước">
                        <Select.Option value="Cắt móng, tỉa lông, tạo kiểu">Cắt móng, tỉa lông, tạo kiểu</Select.Option>
                        <Select.Option value="Trông giữ thú cưng">Trông giữ thú cưng</Select.Option>
                        <Select.Option value="Spa, massage">Spa, massage</Select.Option>
                        <Select.Option value="Đặt hẹn khám bệnh">Đặt hẹn khám bệnh</Select.Option>
                    </Select>
                </Form.Item>
                <Row justify="space-between">
                    <Col span={11}>
                        <Form.Item className='date_picker' name='time' label="Thời gian hẹn" rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}>
                            <Select onChange={(e) => setTime(e)} placeholder="Chọn thời gian" >
                                <Select.Option value="Sáng (7h30-11h)">Sáng (7h30-11h)</Select.Option>
                                <Select.Option value="Chiều (13h30-17h)">Chiều (13h30-17h)</Select.Option>
                                <Select.Option value="Tối (19h30 -22h)">Tối (19h30 -22h)</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={11}>
                        <Form.Item className='date_picker' name='date' label="Chọn ngày" rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}>
                            <Input type="date" onChange={(e) => setDateTime(e.target.value)} />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name='noidung' label="Nội dung(Nếu có)">
                    <Input.TextArea onChange={(e) => setContent(e.target.value)} />
                </Form.Item>
                <Form.Item name='submit'>
                    <Button onClick={handleSubmit} className='button-booking' type="primary" htmlType="submit">
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Booking