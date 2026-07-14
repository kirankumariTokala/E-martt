const products = [
  // Mobiles (row1-3, row2-2)
  {id:1, name:"iPhone 14", price:70000, img:"Images/mobile.jpg", category:"Mobiles", desc:"Apple iPhone"},
  {id:2, name:"Samsung S23", price:65000, img:"Images/mobile2.jpg", category:"Mobiles", desc:"Samsung Galaxy"},
  {id:3, name:"OnePlus 11", price:50000, img:"Images/mobile3.jpg", category:"Mobiles", desc:"OnePlus Flagship"},
  {id:4, name:"Redmi Note 12", price:15000, img:"Images/mobile4.jpg", category:"Mobiles", desc:"Redmi Note"},
  {id:5, name:"Realme 10", price:12000, img:"Images/mobile5.jpg", category:"Mobiles", desc:"Realme Phone"},

  // Laptops (row1-3, row2-3)
  {id:6, name:"MacBook Pro", price:150000, img:"Images/laptop1.jpg", category:"Laptops", desc:"Apple Laptop"},
  {id:7, name:"Dell XPS", price:120000, img:"Images/laptop2.jpg", category:"Laptops", desc:"Dell Laptop"},
  {id:8, name:"HP Pavilion", price:80000, img:"Images/laptop3.jpg", category:"Laptops", desc:"HP Laptop"},
  {id:9, name:"Lenovo ThinkPad", price:90000, img:"Images/laptop4.jpg", category:"Laptops", desc:"Lenovo Laptop"},
  {id:10, name:"Asus ZenBook", price:95000, img:"Images/laptop5.jpg", category:"Laptops", desc:"Asus Laptop"},
  {id:11, name:"Acer Swift", price:85000, img:"Images/laptop6.jpg", category:"Laptops", desc:"Acer Laptop"},

  // Smart Watches (row1-3, row2-3)
  {id:12, name:"Apple Watch", price:40000, img:"Images/watch.jpg", category:"Smart Watches", desc:"Apple Smartwatch"},
  {id:13, name:"Samsung Galaxy Watch", price:25000, img:"Images/watch2.jpg", category:"Smart Watches", desc:"Samsung Watch"},
  {id:14, name:"Fossil Gen6", price:20000, img:"Images/watch3.jpg", category:"Smart Watches", desc:"Fossil Watch"},
  {id:15, name:"Noise ColorFit", price:5000, img:"Images/watch4.jpg", category:"Smart Watches", desc:"Noise Watch"},
  {id:16, name:"Boat Watch", price:3000, img:"Images/watch5.jpg", category:"Smart Watches", desc:"Boat Smartwatch"},
  {id:17, name:"Amazfit GTS", price:8000, img:"Images/watch6.jpg", category:"Smart Watches", desc:"Amazfit Watch"},

  // AC (row1-3, row2-2)
  {id:18, name:"LG AC", price:35000, img:"Images/ac2.jpg", category:"AC", desc:"LG Air Conditioner"},
  {id:19, name:"Samsung AC", price:30000, img:"Images/ac3.jpg", category:"AC", desc:"Samsung AC"},
  {id:20, name:"Voltas AC", price:25000, img:"Images/ac4.jpg", category:"AC", desc:"Voltas AC"},
  {id:21, name:"Hitachi AC", price:40000, img:"Images/ac5.jpg", category:"AC", desc:"Hitachi AC"},
  {id:22, name:"Blue Star AC", price:32000, img:"Images/ac6.jpg", category:"AC", desc:"Blue Star AC"},

  // Earbuds (row1-3, row2-3)
  {id:23, name:"Apple AirPods", price:15000, img:"Images/buds.jpg", category:"Earbuds", desc:"Apple Earbuds"},
  {id:24, name:"Boat Airdopes", price:2000, img:"Images/buds2.jpg", category:"Earbuds", desc:"Boat Earbuds"},
  {id:25, name:"OnePlus Buds", price:3000, img:"Images/buds3.jpg", category:"Earbuds", desc:"OnePlus Earbuds"},
  {id:26, name:"Sony WF", price:10000, img:"Images/buds4.jpg", category:"Earbuds", desc:"Sony Earbuds"},
  {id:27, name:"Samsung Galaxy Buds", price:8000, img:"Images/buds5.jpg", category:"Earbuds", desc:"Samsung Earbuds"},
  {id:28, name:"JBL TWS", price:5000, img:"Images/buds6.jpg", category:"Earbuds", desc:"JBL Earbuds"},

  // Television (row1-3, row2-3)
  {id:29, name:"Samsung TV", price:50000, img:"Images/tv.jpg", category:"Television", desc:"Samsung LED TV"},
  {id:30, name:"LG TV", price:45000, img:"Images/tv2.jpg", category:"Television", desc:"LG TV"},
  {id:31, name:"Sony TV", price:60000, img:"Images/tv3.jpg", category:"Television", desc:"Sony LED TV"},
  {id:32, name:"TCL TV", price:40000, img:"Images/tv4.jpg", category:"Television", desc:"TCL TV"},
  {id:33, name:"Mi TV", price:35000, img:"Images/tv5.jpg", category:"Television", desc:"Mi TV"},
  {id:34, name:"Panasonic TV", price:42000, img:"Images/tv6.jpg", category:"Television", desc:"Panasonic TV"},

  // Refrigerator (row1-3, row2-3)
  {id:35, name:"LG Fridge", price:35000, img:"Images/refrigerator", category:"Refrigerator", desc:"LG Fridge"},
  {id:36, name:"Samsung Fridge", price:40000, img:"Images/refrigerator2.jpg", category:"Refrigerator", desc:"Samsung Fridge"},
  {id:37, name:"Whirlpool Fridge", price:32000, img:"Images/refrigerator3.jpg", category:"Refrigerator", desc:"Whirlpool Fridge"},
  {id:38, name:"Godrej Fridge", price:30000, img:"Images/refrigerator4.jpg", category:"Refrigerator", desc:"Godrej Fridge"},
  {id:39, name:"Haier Fridge", price:28000, img:"Images/refrigerator5.jpg", category:"Refrigerator", desc:"Haier Fridge"},
  {id:40, name:"Panasonic Fridge", price:36000, img:"Images/refrigerator6.jpg", category:"Refrigerator", desc:"Panasonic Fridge"},
];
