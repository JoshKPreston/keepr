create table profiles(
  id varchar(255) not null primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  picture varchar(255) not null
)

create table keeps(
  id int not null auto_increment primary key,
  name varchar(255) not null,
  description varchar(1020) not null,
  img varchar(255) not null,
  shares int not null default 0,
  views int not null default 0,
  keeps int not null default 0,
  creatorId varchar(255) not null,
  foreign key(creatorId)
    references profiles(id)
    on delete cascade,
  index idxName (name),
  index idxDescription (description)
)

create table vaults(
  id int not null auto_increment primary key,
  name varchar(255) not null,
  description varchar(255) not null,
  isPrivate boolean not null default 0,
  creatorId varchar(255) not null,
  foreign key(creatorId)
    references profiles(id)
    on delete cascade,
  index idxName (name)
)

create table vaultkeeps(
  id int not null auto_increment primary key,
  vaultId int,
  keepId int,
  creatorId varchar(255) not null,
  foreign key(vaultId)
    references vaults(id)
    on delete cascade,
  foreign key(keepId)
    references keeps(id)
    on delete cascade,
  foreign key(creatorId)
    references profiles(id)
    on delete cascade,
  index idxVaultId (vaultId),
  index idxKeepId (keepId),
  index idxCreatorId (creatorId)
)

-- alter table keeps alter shares set default 0;
-- alter table keeps alter views set default 0;
-- alter table keeps alter keeps set default 0;

-- select * from keeps

-- show columns from keeps
-- show columns from vaults
