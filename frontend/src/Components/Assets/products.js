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
    "cost": 32,
    "img": "https://thetoyinsider.com/wp-content/uploads/2021/07/Beyblade_BurstProSet.jpg",
    "description": "Have epic battles in the bayblade arena with your friends!",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 3,
    "name": "Pokemon Cards",
    "cost": 1,
    "img": "https://www.cratejoy.com/cdn/shop/products/A3OtDHBvQisnPpKmuHRm.jpg?v=1698174038",
    "description": "Each pack contains 50 cards. Have epic battles with friends.",
    "rating": 5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 4,
    "name": "The Game Boy",
    "cost": 60,
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
    "cost": 180,
    "img": "https://m.media-amazon.com/images/I/71f3Ms9IBrL.jpg",
    "description": "Play your all-time favorite games on this console.",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 7,
    "name": "Lego City Set",
    "cost": 45,
    "img": "https://images.stockx.com/images/LEGO-City-Capital-City-Set-60200.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1646429136&q=60",
    "description": "Lego city is in trouble and needs your help! Be the hero and buy this set.",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 8,
    "name": "Little Hugs",
    "cost": 13,
    "img": "https://external-preview.redd.it/tc7gK5qfVhoL9_eBDAq5Idj7kOdFya35qKpJ6I-Wq4Q.png?auto=webp&s=d7accdef8a132e1060b86ad0cdf3c16efe107667",
    "description": "These were the best on a nice summer day, go inside te house and have a drink.",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 9,
    "name": "Play Mat",
    "cost": 30,
    "img": "https://www.boredpanda.com/blog/wp-content/uploads/2021/10/615ff0e016b7f_l5u5K-a_ED-q4rM0uKxX8AYhPbNNCtcjc_pCqfBIbOc__700.jpg",
    "description": "Remember playing with your hotwheel cars on this mat? Us too.",
    "rating": 5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 10,
    "name": "Kinder Egg",
    "cost": 2,
    "img": "https://imgix.ranker.com/list_img_v2/529/2660529/original/all-about-kinder-surprise-eggs?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
    "description": "Best chocolate in the whole world! The toy in the middle was the awesome.",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 11,
    "name": "Playstation PSP",
    "cost": 110,
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
    "cost": 40,
    "img": "https://www.twowheelingtots.com/wp-content/uploads/2020/05/Razor-A5-Action.jpg",
    "description": "Riding outside on a nice summer day on one of these was so fun. Until it hits your ankle...",
    "rating": 4.5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 14,
    "name": "Floppy Disk",
    "cost": 3,
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
    "description": "One of the best childhood candies! Remember making a fake tongue from this?",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 16,
    "name": "Nokia",
    "cost": 25,
    "img": "https://www.smartcompany.com.au/wp-content/uploads/2017/02/Nokia-3310.jpg?fit=680%2C334",
    "description": "Better known as the most indestructable phone out there.. These were cool.",
    "rating": 4.5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 17,
    "name": "Etch-A-Sketch",
    "cost": 16,
    "img": "https://i.ytimg.com/vi/HC2dUoMDwMk/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDrKUtmmIZeY3Kcyn6CIjDtuScHFw",
    "description": "Remember using these as a kid and drawing a bunch of stick figures?",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 18,
    "name": "DVD Player",
    "cost": 30,
    "img": "https://m.media-amazon.com/images/I/61Mie8CpqsL._AC_SL1200_.jpg",
    "description": "Watching redbox or blockbuster movies on this thing was the best.",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 19,
    "name": "Power Rangers",
    "cost": 22,
    "img": "https://i.ytimg.com/vi/2-y2FbcPwvE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0Ecoej19bsoVjuCiqenzA0GRoLQ",
    "description": "Go Go Power Rangers! That song is stuck in my head. These were fun.",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 20,
    "name": "Hot Wheels",
    "cost": 20,
    "img": "https://m.media-amazon.com/images/I/717vmR2p1OL.jpg",
    "description": "Remember collecting Hot Wheels and racing with your friends on that mat? ",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 21,
    "name": "Nintendo 64",
    "cost": 50,
    "img": "https://m.media-amazon.com/images/I/71IQ+4SxFrL.jpg",
    "description": "This was the best console out there! Remember playing Super Mario 64 on this?",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 22,
    "name": "Tamagotchi",
    "cost": 17.99,
    "img": "https://m.media-amazon.com/images/I/819ZUKGJraS.jpg",
    "description": "Remember the joy of caring for your digital pet? Pure 90s nostalgia!",
    "rating": 4.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 23,
    "name": "Buzz Lightyear",
    "cost": 32.99,
    "img": "https://i.ebayimg.com/images/g/pGwAAOSw8HBZKiUF/s-l1600.jpg",
    "description": "Buzz Lightyear Ultimate Edition: Classic collectible with movie phrases. 'To Infinity and Beyond!'",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 24,
    "name": "SPY GEAR Spy Watch",
    "cost": 19.99,
    "img": "https://i.ebayimg.com/images/g/OVYAAOSwAaVfst5P/s-l1200.webp",
    "description": "The ultimate gadget for young secret agents. Remember spying on you siblings?",
    "rating": 3.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c4/3_stars.png?20240808184521"
  },
  {
    "id": 25,
    "name": "Chatter Phone",
    "cost": 15.99,
    "img": "https://m.media-amazon.com/images/I/51C2daBuleS.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    "description": "Rolling eyes, chattering mouth, and ringing dial. Remember those long phone calls with your imaginary friends?",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 26,
    "name": "Light Up Gyro Wheel",
    "cost": 3.99,
    "img": "https://m.media-amazon.com/images/I/71c8tBTM6IL._AC_SX679_.jpg",
    "description": "Retro Light Gyroscope: Great for learning and fun! Perfect for gifts or celebrations.",
    "rating": 4.1,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/9/94/4_stars.png?20240808184524"
  },
  {
    "id": 27,
    "name": "Humming Tin Top Toy",
    "cost": 11.99,
    "img": "https://m.media-amazon.com/images/I/71bVOQxWcIL._AC_SX679_.jpg",
    "description": "Bolz Multi Color Spinning Top: Hum a tune as it spins faster. Perfect for all ages!",
    "rating": 4.5,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 28,
    "name": "Cymbals Chimp",
    "cost": 24.99,
    "img": "https://i.ebayimg.com/images/g/RjYAAOSwD6hfgH~6/s-l1600.webp",
    "description": "Naughtiness Cymbals Chimp: Playful monkey claps cymbals for endless fun and laughter.",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 29,
    "name": "Waterfall Ring Toss",
    "cost": 4.99,
    "img": "https://sensmagazine.com/rw/wp-content/uploads/sites/3/2024/05/RING-TOSS.png",
    "description": "Water Ring Toss Game: Stack colorful rings on tiny poles. Surprisingly challenging and fun!",
    "rating": 3.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c4/3_stars.png?20240808184521"
  },
  {
    "id": 30,
    "name": "Origami Collection",
    "cost": 19.99,
    "img": "https://m.media-amazon.com/images/I/51FGB7D6M2L._AC_UF1000,1000_QL80_.jpg",
    "description": "Full-color, step-by-step guides for oragami. Don't get paper cuts!",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 31,
    "name": "Lite Brite 700+Pcs",
    "cost": 15.99,
    "img": "https://i.ebayimg.com/images/g/opMAAOSwwo5kA8d7/s-l400.jpg",
    "description": "Relive childhood with 700 pegs and classic themed sheets. Pure nostalgia.",
    "rating": 4.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 32,
    "name": "Pin Art 3D Impressions",
    "cost": 15.99,
    "img": "https://m.media-amazon.com/images/I/51SMPnhkhwL._AC_.jpg",
    "description": "Simply press any shaped item against the pins. Don't poke your eyes!",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 33,
    "name": "Polly Pocket Playset",
    "cost": 14.99,
    "img": "https://i.etsystatic.com/12468921/r/il/c2f859/4003722999/il_fullxfull.4003722999_9qkh.jpg",
    "description": "Pink case, inkpad, and stamps. Classic Polly Pocket fun!",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 34,
    "name": "Spiderman Educational Laptop",
    "cost": 22.99,
    "img": "https://i.ebayimg.com/images/g/CqsAAOSwhNdl8eSf/s-l1600.webp",
    "description": "Learn spelling with SpiderMan. Everything is more fun with SpiderMan!",
    "rating": 4.7,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 35,
    "name": "48PCS Sticky Hands",
    "cost": 5.99,
    "img": "https://m.media-amazon.com/images/I/61u0GbnrixL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "description": "Not easy to tear or break, perfect for smacking your siblings!",
    "rating": 3.8,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/9/94/4_stars.png?20240808184524"
  },
  {
    "id": 36,
    "name": "Speak & Spell Game",
    "cost": 14.99,
    "img": "https://m.media-amazon.com/images/I/81zN1fBpgsL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "description": "Includes 5 educational play modes. Except that's not how we ever used it...",
    "rating": 3.2,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c4/3_stars.png?20240808184521"
  },
  {
    "id": 37,
    "name": "Vintage Barrel of Monkeys",
    "cost": 9.99,
    "img": "https://i.etsystatic.com/22471386/r/il/d63c69/5975199781/il_1588xN.5975199781_i6fq.jpg",
    "description": "Includes 13 monkeys in excellent condition. Classic linking fun!",
    "rating": 4.9,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521"
  },
  {
    "id": 38,
    "name": "Lincoln Logs Meetinghouse",
    "cost": 44.99,
    "img": "https://m.media-amazon.com/images/I/81NKZkwsBDL._AC_SX679_.jpg",
    "description": "Real wood parts in a collectible tin for easy storage. Classic building fun!",
    "rating": 4.6,
    "rating_img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/4.5_stars.png?20240808184526"
  },
  {
    "id": 39,
    "name": "Classic Mad Libs",
    "cost": 3.99,
    "img": "https://i.etsystatic.com/18735340/r/il/9c52ae/2471942908/il_1588xN.2471942908_s6h5.jpg",
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
