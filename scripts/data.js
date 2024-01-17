const products = [
    {
        name: "Áo Sơ Mi Nam Tay Dài Flannel Túi Đắp Kẻ Caro Form Regular",
        cost: 589,
        description: `Áo Sơ Mi Nam Tay Dài Flannel Túi Đắp Kẻ Caro Form Regular là một kiểu áo sành điệu, cùng nhiều tone màu trung tính dễ mix&match cùng nhiều item khác nhau:

        Với chất liệu cotton cào 2 mặt của vải, mềm mịn và thoáng mát cho người mặc
        Ngoài ra, vải còn có khả năng đúng form và giữ ấm cho cơ thể rất tốt 
        Dáng áo được may suông, vừa vặn với cơ thể thích hợp với nhiều dáng người và còn mang lại cảm giác thoải mái cho người mặc
        Thiết kế sọc caro mang phong cách hiện đại và trẻ trung cho mọi outfit
        Họa tiết nhãn dán bé xinh, kết hợp túi đắp tiện dụng Là một chiếc áo đa năng sử dụng để đi học, đi làm, đi chơi đều được.
        Một kiểu áo mang phong cách hiện đại kết hợp retro đầy mới lạ cho bạn diện đi học, đi làm hay đi chơi đều được.`,

        stars: 5,
        image: "../assets/a1.png",
        categories: "shirts",
        id: 0,
        sold: 1175,
    },
    {
        name: "Áo Sơ Mi Nam Tay Dài Flannel Kẻ Caro Nhãn Trang Trí Form Loose",
        cost: 589,
        description: `Áo Sơ Mi Nam Tay Dài Flannel Kẻ Caro Nhãn Trang Trí Form Loose được thiết kế theo phong cách hiện đại, trẻ trung nhưng cũng pha thêm vẻ đẹp xưa cũ độc đáo, phù hợp với mọi đối tượng:

        Chất vải cotton cào bông 2 mặt, vải có độ mềm mịn và tạo được cảm giác thoáng mát
        Kết hợp chất liệu với tỷ lệ chuẩn giúp áo được đứng form, giữ nhiệt tốt
        Dáng áo suông, rộng giúp người mặc cảm thoải mái, đặc biệt phù hợp với mọi dáng người
        Thiết kế sọc caro trẻ trung, mang vẻ đẹp hiện đại kết hợp màu sắc sành điệu
        Họa tiết nhãn trang trí với dòng chữ” TO GIVE LIFE MEANING” đầy ý nghĩa, tạo điểm nhấn.
        Là item thích hợp để phối với nhiều phong cách từ thanh lịch, năng động đến cá tính đầy chất đường phố.`,

        stars: 5,
        image: "../assets/a2.png",
        categories: "shirts",
        id: 1,
        sold: 1290,
    },
    {
        name: "Áo Len Nam Dệt Kim Modal Rayon Họa Tiết Form Fitted",
        cost: 785,
        description: `Áo Len Nam Dệt Kim Modal Rayon Họa Tiết Form Fitted là kiểu áo thanh lịch, điển trai dành cho các chàng:

        Chất len dệt kim mềm mại, giữ nhiệt cơ thể
        Form áo fitted phố biến, phù hợp vóc dáng người Việt, vừa vặn cơ thể giúp tôn dáng
        Dáng áo polo mang phong cách thanh lịch, chỉn chu cho các chàng
        Thiết kế họa tiết phối màu tươi tắn, phá cách giúp chiếc áo phá bỏ sự đơn điệu nhàm chán
        Một mẫu áo phù hợp đi làm, đi chơi, hẹn hò,... và dễ dàng mix cùng nhiều item khác nhau để giúp chàng đa dạng phong cách.`,

        stars: 5,
        image: "../assets/a3.png",
        categories: "sweater",
        id: 2,
        sold: 1924,
    },
    {
        name: "Áo Khoác Chần Bông Nam Cổ Trụ Phối Rib Form Regular",
        cost: 1374,
        description: `Áo Khoác Chần Bông Nam Cổ Trụ Phối Rib Form Regular - 10F23JAC007 được thiết kế dành cho chàng trai năng động. Mang xu hướng thời trang mới nhất, và là mẫu áo khoác ưa chuộng vì:

        Chất liệu Polyester có nhiều ưu điểm nổi trội như chống nhăn, chống thấm tốt và độ bền cao. 
        Form regular là kiểu áo cân mọi vóc dáng, thiết kế phù hợp với đa số cơ thể nam giới, cung cấp đủ loại size cho người mặc
        Cổ trụ cao, được may dặm gấp khúc, tạo lớp đứng cho cổ áo vững hơn. 
        Tay dài, kết hợp 2 túi hộp có nắp thuận tiện, tăng thêm sự trẻ trung, tạo điểm nhấn cho áo
        3 màu trung tính dễ dàng phối hợp với nhiều trang phục và phong cách khác nhau.
        Là kiểu áo khoác vô cùng phù hợp cho mùa thu và mùa đông, đặc biệt khi thời tiết thay đổi.`,

        stars: 5,
        image: "../assets/a4.png",
        categories: "jacket",
        id: 3,
        sold: 2394,
    },
];

// const currentUser = [{
//     name: "Vu",
//     avatar: `https://i.pinimg.com/1200x/63/f8/fb/63f8fbab7ef0b960dff3913c0c27a9e1.jpg`,
// }];
const users = [
    {
        name: "Vu",
        gmail: "vun9guy3n09@gmail.com",
        password: "nothinghere",
        avatar: `https://i.pinimg.com/1200x/63/f8/fb/63f8fbab7ef0b960dff3913c0c27a9e1.jpg`,
        role: "admin",
    },
    {
        name: "Ai",
        gmail: "ai@gmail.com",
        password: "ai",
        avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuLEcucKM6ry4WmnqHTaBwnKTAZkGxpn3wyJoTqumhQ&s`,
        role: "none",
    },
];

let soldProducts = 0;

let oPro = 1;

const cart = [];

localStorage.setItem("products", JSON.stringify(products));
localStorage.setItem("soldProducts", JSON.stringify(soldProducts));
localStorage.setItem("user", JSON.stringify(users));
localStorage.setItem("opening", JSON.stringify(oPro));
localStorage.setItem("cUser", JSON.stringify(currentUser));

localStorage.setItem("cart", JSON.stringify(cart));