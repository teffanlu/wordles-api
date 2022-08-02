module.exports = {
    //Querys user
    getGamers: 'SELECT * FROM "gamer" order by "totalPoints" desc',  //Organizar por totalpoint en orden decendente
    getGamer: 'SELECT * FROM "gamer" WHERE "userName" = $1',
    getForPhone: 'SELECT * FROM "gamer" WHERE "phoneNumber" = $1',
    getForGmail: 'SELECT * FROM "gamer" WHERE "gmail" = $1',

    createGamer: 'INSERT INTO "gamer" ("name", "userName", "phoneNumber", "gmail", "password") VALUES ($1, $2, $3, $4, $5) RETURNING *',

    deleteGamer: 'DELETE FROM "gamer" WHERE "id" = $1',

    updateGamer: 'UPDATE "gamer" SET "name" = $1, "userName" = $2, "phoneNumber" = $3, "gmail" = $4, "password" = $5 WHERE "id" = $6 RETURNING *',
    updateStatisticsGamer: 'UPDATE "gamer" SET "totalPoints" = $1, "currentStreak" = $2, "winStreak" = $3 WHERE "id" = $4 RETURNING *',

    createCodigo: 'INSERT INTO "clave" ("gmail", "clave") VALUES ($1, $2) RETURNING *',
    confirmCodigo: 'SELECT * FROM "clave" WHERE "clave" = $1',

    //Querys rooms, statistics ...

    getRooms: 'SELECT * FROM "word"',
    getRoomsGamer: 'SELECT * FROM "word" WHERE "gamer_id" = $1',
    getRoom: 'SELECT * FROM "word" WHERE "id" = $1',
    createRoom: 'INSERT INTO "word" ("word", "turns", "limitTime", "gamer_id") VALUES ($1, $2, $3, $4) RETURNING *',
    deleteRoom: 'DELETE FROM "word" WHERE "id" = $1',
    updateRoom: 'UPDATE "word" SET "word" = $1, "turns" = $2, "limitTime" = $3 WHERE "id" = $4 RETURNING *',

    getStacts: 'SELECT * FROM "statistic" WHERE "gamer_id" = $1',
    getStact: 'SELECT * FROM "statistic" WHERE "gamer_id" = $1 AND "word_id" = $2',
    createStacts: 'INSERT INTO "statistic" ("totalPoints", "totalTime", "totalTurns", "word_id", "gamer_id") VALUES ($1, $2, $3, $4, $5) RETURNING *',

}