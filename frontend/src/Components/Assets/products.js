const products = [
  {
    "id": 1,
    "name": "Otter Pops",
    "cost": 5.99,
    "img": "https://i.redd.it/st0i5ese4x251.jpg",
    "description": "On a hot summer day as a kid, these were always the best!",
    "rating": 5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 2,
    "name": "BayBlades",
    "cost": 31.99,
    "img": "https://thetoyinsider.com/wp-content/uploads/2021/07/Beyblade_BurstProSet.jpg",
    "description": "Have epic battles in the bayblade arena with your friends!",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 3,
    "name": "Pokemon Cards",
    "cost": 21.99,
    "img": "https://www.cratejoy.com/cdn/shop/products/A3OtDHBvQisnPpKmuHRm.jpg?v=1698174038",
    "description": "Each pack contains 50 cards. Have epic battles with friends.",
    "rating": 5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 4,
    "name": "The Game Boy",
    "cost": 59.99,
    "img": "https://o.aolcdn.com/images/dims?crop=1600%2C1067%2C0%2C0&quality=85&format=jpg&resize=1600%2C1067&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-04%2F78769f20-62ea-11e9-aead-58faa9222d49&client=a1acac3e1b3290917d92&signature=6aaa3ca599b400be029fbf9798157cc9bcf11003",
    "description": "Tons of fascinating action-packed adventures that fit inside of your pocket.",
    "rating": 4.5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 5,
    "name": "Finger Flashlights",
    "cost": 2.99,
    "img": "https://m.media-amazon.com/images/I/41BPTCE1iOL.jpg",
    "description": "Illuminate your world with the power of the Finger Flashlights.",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 6,
    "name": "Nintendo Wii",
    "cost": 79.99,
    "img": "https://m.media-amazon.com/images/I/71f3Ms9IBrL.jpg",
    "description": "Play your all-time favorite games on this console.",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 7,
    "name": "Lego City Set",
    "cost": 29.99,
    "img": "https://images.stockx.com/images/LEGO-City-Capital-City-Set-60200.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1646429136&q=60",
    "description": "Lego city is in trouble and needs your help! Be the hero and buy this set.",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 8,
    "name": "Little Hugs",
    "cost": 12.99,
    "img": "https://external-preview.redd.it/tc7gK5qfVhoL9_eBDAq5Idj7kOdFya35qKpJ6I-Wq4Q.png?auto=webp&s=d7accdef8a132e1060b86ad0cdf3c16efe107667",
    "description": "These were the best on a nice summer day, go inside te house and have a drink.",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 9,
    "name": "Play Mat",
    "cost": 15.99,
    "img": "https://www.boredpanda.com/blog/wp-content/uploads/2021/10/615ff0e016b7f_l5u5K-a_ED-q4rM0uKxX8AYhPbNNCtcjc_pCqfBIbOc__700.jpg",
    "description": "Remember playing with your hotwheel cars on this mat? Us too.",
    "rating": 5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 10,
    "name": "Kinder Egg",
    "cost": 0.99,
    "img": "https://imgix.ranker.com/list_img_v2/529/2660529/original/all-about-kinder-surprise-eggs?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
    "description": "Best chocolate in the whole world! The toy in the middle was the awesome.",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 11,
    "name": "Playstation PSP",
    "cost": 109.99,
    "img": "https://cdn.mos.cms.futurecdn.net/CenxhvdyExZxFzpxNYQQ3Q-1200-80.jpg",
    "description": "Remember playing games like God Of War on this bad boy? It was the best.",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 12,
    "name": "Silly Bandz",
    "cost": 1.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/6/69/Silly_Bandz_2009.jpg",
    "description": "Every single cool kid had a arm full of these back in the day.",
    "rating": 4.4,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 13,
    "name": "Razor Scooter",
    "cost": 39.99,
    "img": "https://www.twowheelingtots.com/wp-content/uploads/2020/05/Razor-A5-Action.jpg",
    "description": "Riding on a nice summer day with these was so fun. Until it hits your ankle...",
    "rating": 4.5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 14,
    "name": "Floppy Disk",
    "cost": 13.99,
    "img": "https://media.cnn.com/api/v1/images/stellar/prod/160308193141-gbs-floppy-disk.jpg?q=w_1920,h_1080,x_0,y_0,c_fill",
    "description": "Remember watching all of your favorite movies and shows on one of these?",
    "rating": 4.4,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 15,
    "name": "Fruit Rollups",
    "cost": 6.99,
    "img": "https://hips.hearstapps.com/vidthumb/images/delish-watermelon-fruit-roll-ups-still002-1536587662.jpg",
    "description": "One of the best candies! Remember making a fake tongue from this?",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 16,
    "name": "Nokia",
    "cost": 159.99,
    "img": "https://www.smartcompany.com.au/wp-content/uploads/2017/02/Nokia-3310.jpg?fit=680%2C334",
    "description": "Better known as the most indestructable phone out there.. These were cool.",
    "rating": 4.5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 17,
    "name": "Etch-A-Sketch",
    "cost": 15.99,
    "img": "https://i.ytimg.com/vi/HC2dUoMDwMk/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDrKUtmmIZeY3Kcyn6CIjDtuScHFw",
    "description": "Remember using these as a kid and drawing a bunch of stick figures?",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 18,
    "name": "DVD Player",
    "cost": 49.99,
    "img": "https://m.media-amazon.com/images/I/61Mie8CpqsL._AC_SL1200_.jpg",
    "description": "Watching redbox or blockbuster movies on this thing was the best.",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 19,
    "name": "Power Rangers",
    "cost": 21.99,
    "img": "https://i.ytimg.com/vi/2-y2FbcPwvE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0Ecoej19bsoVjuCiqenzA0GRoLQ",
    "description": "Go Go Power Rangers! That song is stuck in my head. These were fun.",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 20,
    "name": "Hot Wheels",
    "cost": 19.99,
    "img": "https://m.media-amazon.com/images/I/717vmR2p1OL.jpg",
    "description": "Remember collecting Hot Wheels and racing with your friends on that mat?",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 21,
    "name": "Nintendo 64",
    "cost": 49.99,
    "img": "https://m.media-amazon.com/images/I/71IQ+4SxFrL.jpg",
    "description": "This was the best console ever! Did you play Super Mario 64 on this?",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 22,
    "name": "Tamagotchi",
    "cost": 17.99,
    "img": "https://thetoyinsider.com/wp-content/uploads/2024/02/TamagotchiOriginal_LotsofLove-1-jpg.webp",
    "description": "Remember the joy of caring for your digital pet? Pure 90s nostalgia!",
    "rating": 4.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 23,
    "name": "Buzz Lightyear",
    "cost": 32.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Buzz_Lightyear_product_image.jpg/1600px-Buzz_Lightyear_product_image.jpg?20240809162649",
    "description": "Buzz Lightyear Ultimate Collector Edition. 'To Infinity and Beyond!'",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 24,
    "name": "Spy Watch",
    "cost": 19.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Spy_Kids_Spy_Watch_Product_Image.jpg/1600px-Spy_Kids_Spy_Watch_Product_Image.jpg?20240809163923",
    "description": "The ultimate gadget for spying on your siblings!",
    "rating": 3.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c4/3_stars.png?20240808184521"
  },
  {
    "id": 25,
    "name": "Chatter Phone",
    "cost": 15.99,
    "img": "https://m.media-amazon.com/images/I/51C2daBuleS.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    "description": "Remember those long phone calls with your imaginary friends?",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 26,
    "name": "Gyro Wheel",
    "cost": 3.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Light_up_gyro_wheel.jpg/1600px-Light_up_gyro_wheel.jpg?20240809162006",
    "description": "Great for learning physics! Perfect for gifts or celebrations.",
    "rating": 4.1,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/9/94/4_stars.png?20240808184524"
  },
  {
    "id": 27,
    "name": "Tin Top Toy",
    "cost": 11.99,
    "img": "https://i.ebayimg.com/images/g/yrwAAOSwmlRhO8vS/s-l400.jpg",
    "description": "Hum a tune as it spins faster. Perfect for all ages!",
    "rating": 4.5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 28,
    "name": "Cymbals Chimp",
    "cost": 24.99,
    "img": "https://media.istockphoto.com/id/147091146/photo/mechanical-chimp.jpg?s=612x612&w=0&k=20&c=8ucs_gKSSnPCxNDvGDNQ3YPuJKRNeA3Wef9_OMAdAXo=",
    "description": "Playful monkey claps cymbals for endless fun and laughter.",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 29,
    "name": "Ring Toss",
    "cost": 4.99,
    "img": "https://dma0ixu6zshxu.cloudfront.net/wp-content/uploads/20160801122115/WaterRingToss.jpg",
    "description": "Stack rings on tiny poles. Surprisingly challenging and fun!",
    "rating": 3.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c4/3_stars.png?20240808184521"
  },
  {
    "id": 30,
    "name": "Origami Book",
    "cost": 19.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Origami_book_product_image.jpg/1600px-Origami_book_product_image.jpg?20240809163628",
    "description": "Full-color, step-by-step guides for oragami. Don't get paper cuts!",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 31,
    "name": "Lite Brite",
    "cost": 15.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lite_Brite_Product_Image.jpg/1600px-Lite_Brite_Product_Image.jpg?20240809163132",
    "description": "Relive childhood with 700 pegs and classic themed sheets. Pure nostalgia.",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 32,
    "name": "Pin Art",
    "cost": 15.99,
    "img": "https://m.media-amazon.com/images/I/51SMPnhkhwL._AC_.jpg",
    "description": "Simply press any shaped item against the pins. Don't poke your eyes!",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 33,
    "name": "Polly Pocket",
    "cost": 14.99,
    "img": "https://i.etsystatic.com/12468921/r/il/c2f859/4003722999/il_fullxfull.4003722999_9qkh.jpg",
    "description": "Pink case, inkpad, and stamps. Classic Polly Pocket fun!",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 34,
    "name": "Spiderman Laptop",
    "cost": 22.99,
    "img": "https://i.ebayimg.com/images/g/CqsAAOSwhNdl8eSf/s-l1600.webp",
    "description": "Learn spelling with SpiderMan. Everything is more fun with SpiderMan!",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 35,
    "name": "Sticky Hands",
    "cost": 5.99,
    "img": "https://m.media-amazon.com/images/I/61u0GbnrixL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "description": "Not easy to tear or break, perfect for smacking your siblings!",
    "rating": 3.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/9/94/4_stars.png?20240808184524"
  },
  {
    "id": 36,
    "name": "Speak & Spell",
    "cost": 14.99,
    "img": "https://m.media-amazon.com/images/I/81zN1fBpgsL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "description": "Includes 5 educational play modes. Except that's not how we ever used it...",
    "rating": 3.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c4/3_stars.png?20240808184521"
  },
  {
    "id": 37,
    "name": "Barrel of Monkeys",
    "cost": 9.99,
    "img": "https://www.thunderbaymuseum.com/wp-content/uploads/116425437_711606846069207_2379917801416017868_n.jpg",
    "description": "Includes 13 monkeys in excellent condition. Classic linking fun!",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 38,
    "name": "Lincoln Logs",
    "cost": 44.99,
    "img": "https://m.media-amazon.com/images/I/81NKZkwsBDL._AC_SX679_.jpg",
    "description": "Real wood parts in a collectible tin for easy storage. Classic building fun!",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 39,
    "name": "Mad Libs",
    "cost": 3.99,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mad_libs_product_image.jpg/1600px-Mad_libs_product_image.jpg?20240809162911",
    "description": "Remember the joy of creating hilarious, nonsensical stories with friends?",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 40,
    "name": "64Pcs Crayons",
    "cost": 9.99,
    "img": "https://i.redd.it/mvebdid7rk741.jpg",
    "description": "Remember the built-in sharpener and vibrant, waterproof colors?",
    "rating": 4.4,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  }
];

export default products;
