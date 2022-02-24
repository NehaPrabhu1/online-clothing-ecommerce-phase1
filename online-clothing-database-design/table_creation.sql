create table users(userid serial primary key, user_email varchar(30),first_name varchar(20 ),last_name varchar(20), user_role varchar(10) ); 
create table contact(userid int, user_address varchar(100), mobile_no varchar(20),foreign key (userid)references users(userid)); 
CREATE EXTENSION pgcrypto; 
  
create table login_details(userid int, password varchar(300),foreign key (userid) references users(userid));  
 
create table categories( categoryid serial primary key,category_gender varchar(10),  
 
category_type varchar(10), category_name varchar(20) ); 
create table brands(brandid serial primary key, brand_name varchar(20)); 
 
create table products(productid serial primary key, categoryid int, brandid int, product_name varchar (30), size_quantity json, price int, color varchar (10), discount int default 0, product_image varchar(100), foreign key (categoryid) references  categories(categoryid),foreign key (brandid) references brands(brandid) ); 
 
create table discount( discountid serial primary key, discount_category varchar(10),discount_type varchar(10), start_date date, start_time time, end_date date, end_time time, discount_percent int, status varchar(10)); 
 
create table orders( orderid serial primary key, userid int, date_of_order date, time_of_order time, total_payment int , foreign key (userid)references users (userid)); 
    
create table orderline(orderlineid serial primary key, orderid int, productid int, size char(1),quantity int, price int, foreign key(orderid)references orders (orderid), foreign key (productid)references products(productid)); 
create table deliveryaddress(orderid int, addressline varchar(50), street varchar(20),city varchar(20),pincode varchar(10), country varchar(30), foreign key(orderid) references orders(orderid)); 
 
create table reviews(reviewid serial primary key, userid int, orderid int, productid int, rating int, review varchar(300), foreign key (userid)references users (userid),foreign key(orderid)references orders (orderid), foreign key (productid)references products(productid)); 
