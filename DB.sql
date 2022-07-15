
DROP table clave;
DROP table statistic;
DROP table word;
DROP table gamer;

CREATE TABLE "gamer" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "userName" varchar,
  "phoneNumber" varchar,
  "totalPoints" varchar,
  "currentStreak" varchar,
  "winStreak" varchar,
  "gmail" varchar,
  "password" varchar
);

CREATE TABLE "statistic" (
  "id" serial PRIMARY KEY,
  "totalPoints" varchar,
  "totalTime" varchar,
  "totalTurns" varchar,
  "word_id" int,
  "gamer_id" int
);

CREATE TABLE "word" (
  "id" serial PRIMARY KEY,
  "word" varchar,
  "turns" varchar,
  "limitTime" varchar,
  "gamer_id" int
);

CREATE TABLE "clave" (
  "gmail" varchar,
  "clave" varchar
);

ALTER TABLE "statistic" ADD FOREIGN KEY ("word_id") REFERENCES "word" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "statistic" ADD FOREIGN KEY ("gamer_id") REFERENCES "gamer" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "word" ADD FOREIGN KEY ("gamer_id") REFERENCES "gamer" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
