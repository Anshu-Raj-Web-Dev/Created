const products = [
    {
        id: 1,
        name: "Classic Leather Tote",
        price: parseFloat("400.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_47c995fa95724f998485903107f14308~mv2_d_2487_3298_s_4_2.jpg",
        imageUrl: "product-1.jpg",
        description: "A timeless design crafted from premium leather, perfect for both work and leisure.",
        sku: "CLT001"
    },
    {
        id: 2,
        name: "Elegant Shopper Bag",
        price: parseFloat("400.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg",
        imageUrl: "product-2.jpg",
        description: "This chic shopper bag offers style and functionality with spacious interiors and elegant details.",
        sku: "ESB002",
        isBestSeller: true
    },
    {
        id: 3,
        name: "Chic Everyday Satchel",
        price: parseFloat("400.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_7a7a685b6efe4d4ab57bd5f16ea1e4fa~mv2_d_2487_3298_s_4_2.jpg",
        imageUrl: "product-3.jpg",
        description: "Designed for daily use, this satchel combines practicality and elegance with high-quality materials.",
        sku: "CESS003"
    },
    {
        id: 4,
        name: "Modern Crossbody Bag",
        price: parseFloat("400.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_80836aa923e34b34b4f1df8b47eb2197~mv2_d_2487_3298_s_4_2.jpg",
        imageUrl: "product-4.jpg",
        description: "A sleek and stylish crossbody bag that is both comfortable and trendy, ideal for any occasion.",
        sku: "MCB004"
    },
    {
        id: 5,
        name: "Vintage Shoulder Bag",
        price: parseFloat("300.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_0c099c6223b949b789ec35c279acd873~mv2_d_3444_4568_s_4_2.jpg",
        imageUrl: "product-5.jpg",
        description: "This vintage-inspired shoulder bag is perfect for those who appreciate classic designs with modern durability.",
        sku: "VSB005"
    },
    {
        id: 6,
        name: "Luxury Leather Clutch",
        price: parseFloat("300.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_63af2b0b5b0644f286581a4cf2f35c2c~mv2_d_3444_4568_s_4_2.jpg",
        imageUrl: "product-6.jpg",
        description: "An exquisite leather clutch that adds a touch of sophistication to any outfit, perfect for evening events.",
        sku: "LLC006"
    },
    {
        id: 7,
        name: "Casual City Bag",
        price: parseFloat("300.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg",
        imageUrl: "product-7.jpg",
        description: "This casual city bag is designed for comfort and versatility, making it a must-have for urban lifestyles.",
        sku: "CCB007",
        isBestSeller: true
    },
    {
        id: 8,
        name: "Compact Travel Bag",
        price: parseFloat("300.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_83f0d2bab3eb41d1b735a26bd6836a8d~mv2_d_3444_4568_s_4_2.jpg",
        imageUrl: "product-8.jpg",
        description: "A lightweight and compact travel bag, crafted to keep your essentials organized while on the go.",
        sku: "CTB008"
    },
    {
        id: 9,
        name: "Sleek Messenger Bag",
        price: parseFloat("250.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_c35f68f9e8a64f5498a99d107d899ee2~mv2_d_2629_3487_s_4_2.jpg",
        imageUrl: "product-9.jpg",
        description: "Combining style and function, this messenger bag is perfect for work or school, with plenty of space for your gear.",
        sku: "SMB009"
    },
    {
        id: 10,
        name: "Minimalist Shoulder Bag",
        price: parseFloat("250.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg",
        imageUrl: "product-10.jpg",
        description: "This minimalist shoulder bag offers a sleek design while providing ample storage for everyday essentials.",
        sku: "MSB010"
    },
    {
        id: 11,
        name: "Textured Handbag",
        price: parseFloat("250.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_1a8563a684334d27b0734f87b6f7c998~mv2_d_2629_3487_s_4_2.jpg",
        imageUrl: "product-11.jpg",
        description: "Featuring unique textures, this handbag adds a stylish twist to your wardrobe, suitable for any occasion.",
        sku: "THB011"
    },
    {
        id: 12,
        name: "Trendy Handheld Bag",
        price: parseFloat("250.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg",
        imageUrl: "product-12.jpg",
        description: "This trendy handheld bag is designed for those who want to stand out with its chic look and practical use.",
        sku: "THB012",
        isBestSeller: true
    },
    {
        id: 13,
        name: "Urban Satchel",
        price: parseFloat("150.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg",
        imageUrl: "product-13.jpg",
        description: "A modern urban satchel that combines style and utility, perfect for busy city life.",
        sku: "US013",
        isBestSeller: true
    },
    {
        id: 14,
        name: "Quilted Mini Bag",
        price: parseFloat("150.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_92ce1b162b474c978b9afe376cc3b892~mv2_d_2487_3298_s_4_2.jpg",
        imageUrl: "product-14.jpg",
        description: "This quilted mini bag offers a luxurious feel in a compact size, ideal for carrying essentials on special occasions.",
        sku: "QMB014"
    },
    {
        id: 15,
        name: "Stylish Evening Bag",
        price: parseFloat("150.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_73a2095ecc00461bbd42a7e9394935e9~mv2_d_2487_3298_s_4_2.jpg",
        imageUrl: "product-15.jpg",
        description: "Add a touch of elegance to your evening look with this stylish bag that complements any outfit.",
        sku: "SEB015"
    },
    {
        id: 16,
        name: "Small Leather Clutch",
        price: parseFloat("100.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_3fd7c4402f1a4290bd274c4afd283163~mv2_d_3078_4139_s_4_2.jpg",
        imageUrl: "product-16.jpg",
        description: "A small leather clutch that offers sophisticated style for a night out, crafted from high-quality materials.",
        sku: "SLC016"
    },
    {
        id: 17,
        name: "Elegant Mini Bag",
        price: parseFloat("100.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_3061929daf1f4dfd9093dd86ba8f0ce9~mv2_d_3078_4139_s_4_2.jpg",
        imageUrl: "product-17.jpg",
        description: "This elegant mini bag is the perfect accessory for any outfit, designed for the modern woman on the go.",
        sku: "EMB017"
    },
    {
        id: 18,
        name: "Compact Handbag",
        price: parseFloat("100.00"),
        // imageUrl: "https://static.wixstatic.com/media/ea71bb_4dcf4698147a479c912875bb4ad67d1a~mv2_d_3078_4139_s_4_2.jpg",
        imageUrl: "product-18.jpg",
        description: "A versatile compact handbag that combines functionality and style, perfect for everyday use.",
        sku: "CHB018"
    }
];

export default products;
