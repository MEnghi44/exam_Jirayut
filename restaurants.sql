-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2021 at 12:53 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurants`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imageurl`) VALUES
(1, 'บุงกี่ เป็ดย่างฮ่องกง - บางลำพู', 'ทานเล่น/ขนมขบเคี้ยว', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CY4CJ2WAKAAZFE/hero/eac950d310ee457685bb98acf537d7ac_1576573337301905327.jpeg'),
(2, 'ก๋วยเตี๋ยวลูกชิ้นน้ำใส - วังบูรพ', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TUHGBYCPUBTE/hero/368d9ee9cd7c4eadb14834a9c1de412a_1626485289632828597.jpeg'),
(3, 'ปาท่องโก๋ซอยร่วม - จรัญสนิทวงศ์65', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2CVLGLDJTCCCN/hero/e4c8cc4868f3448cbc688a2aa210865f_1605604871971311597.jpeg'),
(4, 'หมูทอด By Lambretta Thailand Shop&amp;Cafe - บวรนิเวศ', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2MTTBDEFBA1N6/hero/7280aa88eafd43b8808748a32a8a0d45_1618032459218374221.jpeg'),
(5, 'วังบูรพาก๋วยเตี๋ยวน้ำใส - ซอยพีรพงษ์', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C22HWBMEKAMGNJ/hero/800132211919455691e7c7b6ad8a40df_1631271202561743477.jpeg'),
(6, 'ราดหน้ายอดผัก สูตร 40 ปี - ศาลเจ้าพ่อเสือ', 'อาหารเส้น/ข้าวหน้า', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/THGFIST000001z8/hero/6927e7be2ce34eeea71c32cc3d1082bf_1599733571867285014.jpeg'),
(7, 'นายอ้วนเย็นตาโฟเสาชิงช้า - ถ.ตะนาว', 'สตรีทฟู้ต/อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2L3AX3CA3CACX/hero/b82106eef455455487d5cf573b92c63b_1616068089798895472.jpeg'),
(8, 'ข้าวหมูทอด krit - ถนนศิริพงษ์', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZKZN8MVEUTJEA/hero/c3ab80aeebac42f59d41d3cf14a50504_1594112097107461277.jpeg'),
(9, 'TASTE OF INDIA - ถนนข้าวสาร', 'อาหารตามสั่ง', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2LHLGAWEZNWJ6/hero/1f0d5bec874d4356b2705615a9b4b1a6_1615258147281179555.jpeg'),
(10, 'ผัดไทยกระทงทอง by ama - ถนนมหาราช', 'อาหารตามสั่ง', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZEUUA53KE5YDE/hero/d1609464e3b341a39cfb052aab5fac78_1602148028520290592.jpeg'),
(11, 'หมูทอด By Lambretta Thailand Shop', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TUHGBYCPUBTE/hero/368d9ee9cd7c4eadb14834a9c1de412a_1626485289632828597.jpeg'),
(13, 'หมูทอด By Lambretta Thailand Shop', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TUHGBYCPUBTE/hero/368d9ee9cd7c4eadb14834a9c1de412a_1626485289632828597.jpeg'),
(15, 'หมูทอด By Lambretta Thailand Shop', 'อาหารเส้น', 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TUHGBYCPUBTE/hero/368d9ee9cd7c4eadb14834a9c1de412a_1626485289632828597.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `profile` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `profile`, `firstName`, `lastName`, `gender`, `tel`, `address`) VALUES
(3, 'https://media.discordapp.net/attachments/898136704488210443/898136737988091934/profile.jpg', 'จิรายุส', 'สหพรอุดมการ', 'ชาย', '0949627105', '18/1 ม9 ต.หนองสองห้อง อ.บ้านแพ้ว จ.สมุทรสาคร 74120');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
