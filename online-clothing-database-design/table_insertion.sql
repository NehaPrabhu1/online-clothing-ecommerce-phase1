insert into users (user_email,first_name, last_name, user_role)  
values ('dimpalpatil6498@gmail.com','Dimpal','Patil','admin'),
('nehagprabhu1@gmail.com','Neha','Prabhu','user'),
('rachelsumner1999@gmail.com','Rachel','Sumner','user'); 

insert into contact(userid, user_address, mobile_no)  
values(1,'Yogeshwar Nagar, jalgaon, India','7543789342'), 
(2, 'L. T Road, Mumbai, India','2345678545'), 
(3, 'Wellington Street,Leeds,UK' ,'33443565762' ); 

insert into login_details(userid, password) 
values (1, crypt('dimpal', gen_salt('md5'))), 
(2, crypt('neha', gen_salt('md5'))), 
(3, crypt('rachel', gen_salt('md5'))); 

INSERT INTO categories 
VALUES (1, 'Men', 'Topwear', 'Shirt'), 
   (2, 'Men', 'Topwear', 'Tshirt'), 
   (3, 'Men', 'Bottomwear', 'Pants'), 
   (4, 'Men', 'Bottomwear', 'Shorts'), 
   (5, 'Women', 'Topwear', 'Shirt'), 
   (6, 'Women', 'Topwear', 'Tshirt'), 
   (7, 'Women', 'Bottomwear', 'Pants'), 
   (8, 'Women', 'Bottomwear', 'Shorts'); 
    
INSERT INTO brands 
VALUES (1, 'ABC'), 
   (2, 'PQR'), 
   (3, 'XYZ'); 
 
  
INSERT INTO products 
VALUES (1, 2, 1, 'Men blue polo shirt', '{"s":10, "m":20, "l":15, "xl":0}', 500, 'blue', 20, 'assets/images/products/img1.jpg'), 
   (2, 5, 2, 'Women formal shirt', '{"s":10, "m":20, "l":10, "xl":10}', 1000, 'white', 0, 'assets/images/products/img4.jpg'), 
(3, 1, 3, 'Men dress shirt', '{"s":12, "m":18, "l":15, "xl":10}', 1000, 'white', 0, 'assets/images/products/img2.jpg'), 
       (4, 3, 1, 'Men blue jeans', '{"s":15, "m":25, "l":10, "xl":10}', 2500, 'blue', 15, 'assets/images/products/img3.jpg'), 
   (5, 4, 3, 'Men black shorts', '{"s":15, "m":15, "l":20, "xl":6}', 1000, 'black', 10, 'assets/images/products/img5.jpg'), 
   (6, 6, 2, 'Women purple tshirt', '{"s":20, "m":10, "l":10, "xl":15}', 900, 'purple', 0, 'assets/images/products/img6.jpg'), 
   (7, 7, 2, 'Women smart trousers', '{"s":25, "m":10, "l":16, "xl":15}', 2000, 'brown', 0, 'assets/images/products/img7.jpg'), 
   (8, 8, 2, 'Women denim shorts', '{"s":10, "m":15, "l":20, "xl":0}', 1500, 'blue', 0, 'assets/images/products/img8.jpg'), 
   (9, 1, 1, 'Men flannel shirt', '{"s":5, "m":10, "l":20, "xl":25}', 800, 'red', 0, 'assets/images/products/img9.jpg'), 
   (10, 6, 2, 'Women cropped tshirt', '{"s":15, "m":20, "l":15, "xl":10}', 500, 'yellow', 0, 'assets/images/products/img10.jpg'); 

insert into orders(userid,date_of_order, time_of_order,total_payment) 
values (2, DATE'2022-02-16',TIME'12:00:00',2000),
(3, DATE'2022-02-23',TIME'11:00:00',400);

insert into orderline(orderid, productid,size,quantity,price) 
values(1,2,'s',1,1000),
(1,1,'m',1,500),
(1,1,'l',1,500),
(2,1,'s',1,400); 

insert into discount(discount_category,discount_type,start_date,start_time,end_date, end_time,discount_percent,status) 
values('category','Tshirt',DATE'2022-02-23',TIME'10:00:00',DATE'2022-02-24',TIME'9:59:59',20,'live'), 
 ('brand','ABC',DATE'2022-02-15',TIME'08:00:00',DATE'2022-02-15',TIME'22:00:00',15,'expired'), 
('category','Shorts',DATE'2022-02-27',TIME'10:00:00',DATE'2022-02-27',TIME'22:00:00',10,'upcoming');

insert into reviews(userid,orderid,productid,rating,review) 
values(1,1,2,4,'The material is of Good quality. Stitching could be better, overall good fit.'), 
(1,1,1,5,'Good Product'); 
 
insert into deliveryaddress 
values(1,'Room No 40','old mumbai road ','Thane','400500','India'), 
 (2,'Room No 55','Nashik road ','Nashik','425001','India'); 
 


