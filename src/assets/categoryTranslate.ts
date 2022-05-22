export const categoryTranslate = (category: string) => {
  switch (category) {
    case "thucung":
    case "thu-cung":
    case "Thú cưng":
      return {
        name: "Thú cưng",
        slugName: "thu-cung",
        dbName: "thucung",
        title: "Thú cưng Sen Shop",
        canonical: "thu-cung",
        description:
          "Toàn bộ thú cưng tại sen shop với các chú pet dễ thương đáng yêu. Rất nhiều loại chó cảnh, mèo cảnh và các loại thú cưng khác tha hồ bạn lựa chọn theo ý muốn. Chúng tôi luôn đảm bảo sức khỏe thú cưng là hoàn toàn khỏe mạnh.",
      };

    case "chocanh":
    case "cho-canh":
    case "Chó cảnh":
      return {
        name: "Chó cảnh",
        slugName: "cho-canh",
        dbName: "chocanh",
        title: "Chó cảnh Sen Shop",
        canonical: "thu-cung/cho-canh",
        description:
          "Chúng tôi đem đến cho các bạn rất nhiều chó cảnh đẹp mắt, ngoan ngoãn, tinh nghịch,...Những chú chó mạnh mẽ như Golden Anh, Alaska,thân thiện như Shiba, hóm hỉnh như Pug u sầu ,...",
      };

    case "meocanh":
    case "meo-canh":
    case "Mèo cảnh":
      return {
        name: "Mèo cảnh",
        slugName: "meo-canh",
        dbName: "meocanh",
        title: "Mèo cảnh Sen Shop",
        canonical: "thu-cung/meo-canh",
        description:
          "Tại sao mèo lại được yêu thích như vậy? Là bởi vì dáng vẻ cute đáng yêu, có thể ôm ấp mỗi ngày.Có một chú mèo bên cạnh sẽ làm bạn trở nên thoải mái sau những giờ làm việc căng thẳng, vui vẻ hơn khi chơi đùa với chúng,...",
      };

    case "thukieng":
    case "thu-kieng":
    case "Thú kiểng":
      return {
        name: "Thú kiểng",
        slugName: "thu-kieng",
        dbName: "thukieng",
        title: "Thú kiểng Sen Shop",
        canonical: "thu-cung/thu-kieng",
        description:
          "Ngoài những thú cưng như chó mèo bạn có biết đến thú kiểng không. Đây cũng là một loại thú cưng vô cùng dễ thương như thỏ kiểng, nhím kiểng,... ",
      };

    case "hamster":
    case "Hamster":
      return {
        name: "Hamster",
        slugName: "hamster",
        dbName: "hamster",
        title: "Hamster Sen Shop",
        canonical: "thu-cung/hamster",
        description:
          "Một loại thú cưng nhỏ nhắn xinh xẵn mà cũng khá nhiều người nuôi làm pet đó là chuột hamster. Bạn có thể ngắm nhìn nó chạy trên vòng quay, hay gặm những mẩu thức ăn,...",
      };

    case "thucungkhac":
    case "thu-cung-khac":
    case "Thú cưng khác":
      return {
        name: "Thú cưng khác",
        slugName: "thu-cung-khac",
        dbName: "thucungkhac",
        title: "Thú cưng khác Sen Shop",
        canonical: "thu-cung/thu-cung-khac",
        description:
          "Ngoài ra, bạn có thể nuôi những chú bọ ú nục nịch, hay những người thích nuôi thú cưng độc lạ như những loài bò sát, sẽ là trải nghiệm tuyệt vời với chúng,...",
      };

    case "thucanthucung":
    case "thuc-an-thu-cung":
    case "Thú cảnh thú cưng":
      return {
        name: "Thức ăn thú cưng",
        slugName: "thuc-an-thu-cung",
        dbName: "thucanthucung",
        title: "Thức ăn thú cưng Sen Shop",
        canonical: "thuc-an-thu-cung",
        description:
          "Thức ăn thú cưng là không thể thiếu với người nuôi thú, nó đảm bảo dinh dưỡng và phát triển tốt cho thú cưng. Chúng tôi mang đến cho bạn rất nhiều loại thức ăn giá cả phù hợp, giao hàng tận nơi,đảm bảo sức khỏe cho thú cưng của bạn.",
      };

    case "tacho":
    case "ta-cho":
    case "Thức ăn cho chó":
      return {
        name: "Thức ăn cho chó",
        slugName: "ta-cho",
        dbName: "tacho",
        title: "Thức ăn cho chó Sen Shop",
        canonical: "thuc-an-thu-cung/ta-cho",
        description:
          "Thức ăn cho chó của sen shop mà bạn có thể biết tới như thức ăn cho chó trưởng thành, súp thường cho chó, thức ăn hạt mềm cho chó con, hay snack cá hồi,... Các sản phẩm đều đạt chuẩn chất lượng, hấp dẫn cho thú cưng,...",
      };

    case "tameo":
    case "ta-meo":
    case "Thức ăn cho mèo":
      return {
        name: "Thức ăn cho mèo",
        slugName: "ta-meo",
        dbName: "tameo",
        title: "Thức ăn cho mèo Sen Shop",
        canonical: "thuc-an-thu-cung/ta-meo",
        description:
          "Thức ăn cho mèo của sen shop mà bạn có thể biết tới như thức ăn cho mèo Me-O, thức ăn mèo con Whiskas, sữa bột cho mèo,...hay cỏ mèo có thể đem lại thư giãn giảm stress.",
      };

    case "takhac":
    case "ta-khac":
    case "Thức ăn khác":
      return {
        name: "Thức ăn khác",
        slugName: "ta-khac",
        dbName: "takhac",
        title: "Thức ăn khác Sen Shop",
        canonical: "thuc-an-thu-cung/ta-khac",
        description:
          "Sen shop vẫn cung cấp các loại thức ăn cho thú cưng khác như bánh mài răng cho hamster, thú gặm nhấm, các loại thức ăn cho bọ, bánh kẹo trái cây,...",
      };

    case "phukienthucung":
    case "phu-kien-thu-cung":
    case "Phụ kiện thú cưng":
      return {
        name: "Phụ kiện thú cưng",
        slugName: "phu-kien-thu-cung",
        dbName: "phukienthucung",
        title: "Phụ kiện thú cưng Sen Shop",
        canonical: "phu-kien-thu-cung",
        description:
          "Bạn đã từng mua phụ kiện cho thú cưng của mình chưa? Phụ kiên thú cưng sẽ làm cho pet của bạn trông đẹp mắt hơn, và dễ dàng chăm sóc trông coi hơn. Sen shop mang đến cho thú cưng của bạn các phụ kiện như quần áo, vòng cổ, dây đeo,...",
      };

    case "vatdungthucung":
    case "vat-dung-thu-cung":
    case "Vật dụng thú cưng":
      return {
        name: "Vật dụng thú cưng",
        slugName: "vat-dung-thu-cung",
        dbName: "vatdungthucung",
        title: "Vật dụng thú cưng Sen Shop",
        canonical: "vat-dung-thu-cung",
        description:
          "Vật dụng thú cưng là thứ không thể thiếu khi bạn nuôi thú cưng. Ở Sen shop bạn sẽ thấy được những vật dụng mà bạn muốn mua như chuồng cho hamser, sữa tắm cho pet, các miếng lót đi vệ sinh hay khăn tắm cho thú cưng,...",
      };

    case "dochoithucung":
    case "do-choi-thu-cung":
    case "Đồ chơi thú cưng":
      return {
        name: "Đồ cho thú cưng",
        slugName: "do-choi-thu-cung",
        dbName: "dochoithucung",
        title: "Đồ chơi thú cưng Sen Shop",
        canonical: "do-choi-thu-cung",
        description:
          "Có vẻ khá ít người mua đồ chơi cho thú cưng của mình. Nhưng nó lại đem lại lợi ích lớn khi bạn có thể cho những chú chó gặm xương cao su, hay những quả bóng đồ chơi, cây lau cho mèo,... Nó làm thú cưng của bạn vui vẻ, thân thiện hơn và giảm căng thẳng.",
      };

    case "sanphamthuy":
    case "san-pham-thu-y":
    case "Sản phẩm thú y":
      return {
        name: "Sản phẩm thú y",
        slugName: "san-pham-thu-y",
        dbName: "sanphamthuy",
        title: "Sản phẩm thú y Sen Shop",
        canonical: "san-pham-thu-cung",
        description:
          "Sản phẩm thú y ở sen shop đều được kiểm định chặt chẽ, bảo quản cẩn thận vì thế bạn có thể yên tâm mua về và sử dụng. Sen shop có những sản phẩm như dung dịch vệ sinh tai, xịt ve rận, hạt giảm mùi chất thải, và các sản phẩm khác liên quan đến sức khỏe cho thú cưng của bạn.",
      };

    default:
      return null;
  }
};
