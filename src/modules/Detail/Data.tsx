export interface Product {
    name: string,
    price: string,
    id: string,
    state: string,
    information: any
}


export interface Comment {
    owner: string,
    content: string
}

export interface RelatedProduct{
    name: string,
    id: string,
    price: string,
    imagePath: string;
}

export const initial_products: Product = {
    name: "PHỐC SÓC TRẮNG SIÊU ĐÁNG YÊU",
    price: "5.000.000đ",
    id: "1",
    state: "còn hàng",
    information: 
        <div>
            <strong>1. Đặc điểm nổi bật</strong>
            <br />
            <p>Hamster robo là một chủng loại hamster hội tụ nhiều ưu điểm nổi bât. Hiền lành còn hơn hamster bear,
            nhanh nhẹn hơn cả hamster campel và đặc biệt có ngoại hình rất nhỏ nhắn và xinh xắn. Hơn thế nữa, hamster robo
            thường ăn rất ít chất thải vệ sinh không nhiều nên thường rất sạch sẽ. Các bạn không có thời gian có thể đỡ lo 
            lắng hơn về việc thay dọn chuồng trại.
            <br /><br />
            Hamster robo nổi tiếng với sự nhanh nhẹn đáng yêu. Gương mặt vuông độc đáo với ria mép dài. Khi mới du nhập 
            vào Việt Nam từ Thái Lan. Hamster robo có khá ít màu. Nguyên thủy chỉ có màu nâu xám với mặt trắng và mặt nâu. 
            Tuy nhiên hiện nay, chúng đã được lai ghép ra nhiều màu khác nhau. Từ màu bạch tạng trắng tinh còn gọi là robo 
            platinum. Cho tới màu bò sữa, màu trắng đốm đen (hay còn gọi là hamster pied) khá xinh xắn.</p>
            <br /><br />
            <strong>2. Thông tin liên hệ </strong>
            <br />
            <p>PETSAIGON.VN - HỆ THỐNG CỬA HÀNG CHO THÚ CƯNG TPHCM <br />
            ĐỊA CHỈ SHOP Q10 : 285/55 Cách Mạng Tháng 8, P.12, Q.10 - HOTLINE: 0979.793.593 <br />
            Facebook: https://www.fb.com/Petsaigon.vn
            </p>     
        </div>
    
};

export const comment: Comment[] = [
    {
        owner: "Nikola Tesla",
        content: "This is a great dog"
    },
    {
        owner: "Newton",
        content: "Hello world"
    }
]


export const related_products:RelatedProduct[] = [
    {
        name: "POODLE SIÊU YÊU SIÊU Ú",
        id: "1",
        price: "15.000.000đ",
        imagePath: require("./images/large_images/dog_1.png")
    },
    {
        name: "ALASKA XÁM GIANT",
        id: "2",
        price: "60.000.000đ",
        imagePath: require("./images/large_images/dog_1.png")
    },
    {
        name: "BULL PHÁP BÒ SỮA",
        id: "3",
        price: "20.000.000đ",
        imagePath: require("./images/large_images/dog_1.png")
    }
]

