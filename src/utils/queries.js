module.exports = {
    //Querys user
    getGamer: 'SELECT * FROM "gamer" WHERE "userName" = $1',

    createGamer: 'INSERT INTO "gamer" ("name", "userName", "phoneNumber", "gmail", "password") VALUES ($1, $2, $3, $4, $5) RETURNING *',

    deleteGamer: 'DELETE FROM "gamer" WHERE "id" = $1',

    updateGamer: 'UPDATE "gamer" SET "name" = $1, "userName" = $2, "phoneNumber" = $3, "gmail" = $4, "password" = $5 WHERE "id" = $6 RETURNING *',
    updateStatisticsGamer: 'UPDATE "gamer" SET "totalPoints" = $1, "currentStreak" = $2, "winStreak" = $3 WHERE "id" = $4 RETURNING *',

    confirmCodigo: 'SELECT * FROM "clave" WHERE "clave" = $1',

    //Querys rooms, statistics ...

    getRooms: 'SELECT * FROM "word"',
    getRoom: 'SELECT * FROM "word" WHERE "id" = $1',
    createRoom: 'INSERT INTO "word" ("word", "turns", "limitTime", "gamer_id") VALUES ($1, $2, $3, $4) RETURNING *',
    deleteRoom: 'DELETE FROM "word" WHERE "id" = $1',
    updateRoom: 'UPDATE "word" SET "word" = $1, "turns" = $2, "limitTime" = $3 WHERE "id" = $4 RETURNING *',

    getStacts: 'SELECT * FROM "statistic"',
    getStact: 'SELECT * FROM "statistic" WHERE "id" = $1',
    createStacts: 'INSERT INTO "statistic" ("totalPoints", "totalTime", "totalTurns", "word_id", "gamer_id") VALUES ($1, $2, $3, $4, $5) RETURNING *',

}