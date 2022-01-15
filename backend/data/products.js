const products = [
    {
      name: "PlayStation 5",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
    },
    {
      name: "Iphone 12",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
    {
      name: "Samsung Galaxy S21 Ultra",
      imageUrl: "https://th.bing.com/th/id/OIP.2cJEPW1CqcTcr1-sMOLO4gHaHa?pid=Api&rs=1",
      description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      price: 717,
      countInStock: 9
    }, {
      name: "Cannon EOS-1D",
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    },{
      name: "iPhone 11",
      imageUrl: "https://th.bing.com/th/id/R8431f7d8bb15321428fa473161fe0685?rik=gtK7t%2fsmybUt9g&riu=http%3a%2f%2fimages.smartphonesi.com%2fl-m%2fiphone-11-64gb-black-a2111-cdma-gsm-oyLttQaCAidY5Q.jpg&ehk=JIvldkQBDjRZ6JAMC1TWwimrUb%2bXFsmBiWlvIiKpnkw%3d&risl=&pid=ImgRaw",
      description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      price: 1239,
      countInStock: 5
    }, {
      name: "iPhone X",
      imageUrl: "https://techyloud.com/wp-content/uploads/2018/08/iphone-x5-51f2555f57df_1024x1024.jpg",
      description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      price: 1440,
      countInStock: 11
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 50,
      countInStock: 25,
    },
    {
      name: "Audio Technica Headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 233,
      countInStock: 4,
    },{
      name: "Samsung Galaxy F41",
      imageUrl: "https://www.sammobile.com/wp-content/uploads/2020/10/Galaxy-F41.jpg",
      description: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      price: 1297,
      countInStock: 1
    }, 
    {
      name: "JBL FLIP 4",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 140,
      countInStock: 10,
    },
     {
      name: "iPhone 9",
      imageUrl: "https://www.valuewalk.com/wp-content/uploads/2017/09/Apple-iPhone-X-Buyers.png",
      description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      price: 1490,
      countInStock: 2
    }, {
      name: "realme X50 Pro",
      imageUrl: "https://th.bing.com/th/id/OIP.oKe1X1b4CAPfN-mSDXYrhwHaFA?pid=Api&rs=1",
      description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      price: 1853,
      countInStock: 18
    }, {
      name: "iPhone 89",
      imageUrl: "https://www.valuewalk.com/wp-content/uploads/2017/09/Apple-iPhone-X-Buyers.png",
      description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      price: 1021,
      countInStock: 17
    }, {
      name: "Wine - White, Ej",
      imageUrl: "https://i.gadgets360cdn.com/large/realme_x2_image_1569302114237.jpg",
      description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      price: 1970,
      countInStock: 14
    }, {
      name: "iPhone 82",
      imageUrl: "https://th.bing.com/th/id/OIP.KBJjYKx35orNg0Xa6YbwpQHaHa?pid=Api&rs=1",
      description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      price: 1868,
      countInStock: 18
    }, {
      name: "iPhone 8",
      imageUrl: "https://d13z1xw8270sfc.cloudfront.net/origin/44494/1525186967319_iphone8-space-grey-back.jpg",
      description: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      price: 1542,
      countInStock: 11
    }, {
      name: "Samsung Galaxy S88",
      imageUrl: "https://www.valuewalk.com/wp-content/uploads/2017/09/Apple-iPhone-X-Buyers.png",
      description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      price: 1672,
      countInStock: 2
    }, {
      name: "Samsung Galaxy S7",
      imageUrl: "https://th.bing.com/th/id/R20a0a1be6dd08332f8a8e0bc2d4d5a35?rik=ErnPWH6DCMO3cw&riu=http%3a%2f%2fi-cdn.phonearena.com%2fimages%2fphones%2f60663-xlarge%2fSamsung-Galaxy-s7-edge-2.jpg&ehk=3fJbcdXg%2bXPkbhWVgQWbjSnEqlazdnXQWf72k%2fQBHeQ%3d&risl=&pid=ImgRaw",
      description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      price: 1611,
      countInStock: 1
    }, {
      name: "realme 6i",
      imageUrl: "https://th.bing.com/th/id/OIP.KBJjYKx35orNg0Xa6YbwpQHaHa?pid=Api&rs=1",
      description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      price: 750,
      countInStock: 3
    }, {
      name: "realme 32",
      imageUrl: "https://static.digit.in/default/46e48f22e0b4aca88989763fdbecb3fd301bc9d6.jpeg",
      description: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      price: 625,
      countInStock: 13
    }, {
      name: "Fashion",
      imageUrl: "https://th.bing.com/th/id/OIP.NHesadwymAzqQu5xlNkebgHaFj?w=248&h=186&c=7&o=5&dpr=1.25&pid=1.7",
      description: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      price: 1644,
      countInStock: 17
    }, {
      name: "Wine - Red, Mouton Cadet",
      imageUrl: "https://www.valuewalk.com/wp-content/uploads/2017/09/Apple-iPhone-X-Buyers.png",
      description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      price: 569,
      countInStock: 16
    }, {
      name: "realme C11",
      imageUrl: "https://i.gadgets360cdn.com/large/realme_c11_lazada_small_1593160697085.jpg?downsize=278:209&output-quality=80",
      description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      price: 1988,
      countInStock: 9
    }, {
      name: "iPhone L",
      imageUrl: "https://th.bing.com/th/id/OIP.oKe1X1b4CAPfN-mSDXYrhwHaFA?pid=Api&rs=1",
      description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      price: 580,
      countInStock: 7
    }, {
      name: "realme XT",
      imageUrl: "https://www.monotain.com/wp-content/uploads/2019/12/realme-xt.jpg",
      description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      price: 1359,
      countInStock: 9
    }, {
      name: "Samsung Galaxy S6",
      imageUrl: "https://th.bing.com/th/id/OIP.y1aMvkPFYoYRDlF4i8JQrwHaKo?pid=Api&rs=1",
      description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      price: 746,
      countInStock: 1
    }
  ];
  

module.exports = products