export const categoryTranslate = (category: string) => {
    switch (category) {
        case 'thucung':
        case 'thu-cung':
        case 'Thú cưng':
            return { name: 'Thú cưng', slugName: 'thu-cung', dbName: 'thucung' };

        case 'chocanh':
        case 'cho-canh':
        case 'Chó cảnh':
            return { name: 'Chó cảnh', slugName: 'cho-canh', dbName: 'chocanh' };

        case 'meocanh':
        case 'meo-canh':
        case 'Mèo cảnh':
            return { name: 'Mèo cảnh', slugName: 'meo-canh', dbName: 'meocanh' };


        case 'thukieng':
        case 'thu-kieng':
        case 'Thú kiếng':
            return { name: 'Thú kiểng', slugName: 'thu-kieng', dbName: 'thukieng' };

        case 'hamster':
            case 'Hamster':
            return { name: 'Hamster', slugName: 'hamster', dbName: 'hamster' };


        case 'thucungkhac':
        case 'thu-cung-khac':
        case 'Thú cưng khác':
            return { name: 'Thú cưng khác', slugName: 'thu-cung-khac', dbName: 'thucungkhac' };

        case 'thucanthucung':
        case 'thuc-an-thu-cung':
        case 'Thú cảnh thú cưng':
            return { name: 'Thức ăn thú cưng', slugName: 'thuc-an-thu-cung', dbName: 'thucanthucung' };

        case 'tacho':
        case 'ta-cho':
        case 'Thức ăn cho chó':
            return { name: 'Thức ăn cho chó', slugName: 'ta-cho', dbName: 'tacho' };

        case 'tameo':
        case 'ta-meo':
        case 'Thức ăn cho mèo':
            return { name: 'Thức ăn cho mèo', slugName: 'ta-meo', dbName: 'tameo' };

        case 'takhac':
        case 'ta-khac':
        case 'Thức ăn khác':
            return { name: 'Thức ăn khác', slugName: 'ta-khac', dbName: 'takhac' };

        case 'phukienthucung':
        case 'phu-kien-thu-cung':
        case 'Phụ kiện thú cưng':
            return { name: 'Phụ kiện thú cưng', slugName: 'phu-kien-thu-cung', dbName: 'phukienthucung' };

        case 'vatdungthucung':
        case 'vat-dung-thu-cung':
        case 'Vật dụng thú cưng':
            return { name: 'Vật dụng thú cưng', slugName: 'vat-dung-thu-cung', dbName: 'vatdungthucung' };

        case 'dochoithucung':
        case 'do-choi-thu-cung':
        case 'Đồ chơi thú cưng':
            return { name: 'Đồ cho thú cưng', slugName: 'do-choi-thu-cung', dbName: 'dochoithucung' };
        
        case 'sanphamthuy':
        case 'san-pham-thu-y':
        case 'Sản phẩm thú y':
            return { name: 'Sản phẩm thú y', slugName: 'san-pham-thu-y', dbName: 'sanphamthuy' };


        default:

            return null;
    }
}