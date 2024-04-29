create table tasks
(
    id          int auto_increment             primary key,
    title       varchar(50)  default ''        null,
    description text                           null,
    color       varchar(100) default '#000000' null
);