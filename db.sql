create table profiles(
  id varchar(255) not null primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  picture varchar(255) not null
)

create table vaults(
  id int not null auto_increment primary key,
  image varchar(255) not null,
  category varchar(255) not null,
  title varchar(255) not null,
  description varchar(1020) not null,
  price decimal(8,2) not null,
  rating decimal(3,2) not null,
  creatorId varchar(255)
  foreign key(creatorId)
    references profiles(id)
    on delete cascade,
  index idxCategory (category),
  index idxTitle (title),
  index idxRating (rating),
  index idxCreatorId (creatorId)
)

create table reviews(
  id int not null auto_increment primary key,
  rating tinyint(1) not null,
  text varchar(1020) not null,
  productId int,
  creatorId varchar(255),
  foreign key(productId)
    references products(id)
    on delete cascade,
  foreign key(creatorId)
    references profiles(id),
  index idxId (id),
  index idxCreatorId (creatorId)
)

create table keeps(
  id int not null auto_increment primary key,
  title varchar(255) not null unique,
  creatorId varchar(255),
  foreign key(creatorId)
    references profiles(id)
    on delete cascade,
  index idxCreatorId (creatorId)
)

-- show indexes from wishlists
-- alter table wishlists add unique index (title)
-- delete from wishlists where title like 'kid%'
-- select * from wishlists


create table vaultkeeps(
  id int not null auto_increment primary key,
  wishlistId int,
  productId int,
  creatorId varchar(255),
  foreign key(wishlistId)
    references wishlists(id)
    on delete cascade,
  foreign key(productId)
    references products(id),
  foreign key(creatorId)
    references profiles(id)
    on delete cascade,
  index idxWishlistId (wishlistId),
  index idxProductId (productId),
  index idxCreatorId (creatorId)
)

