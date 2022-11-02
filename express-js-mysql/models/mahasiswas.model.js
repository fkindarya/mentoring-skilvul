const db = require("./db")

class Mahasiswa {
    constructor(name, age, phone_number) {
        this.name = name
        this.age = age
        this.phone_number = phone_number
    }

    static async getMahasiswas() {
        const [rows] = await db.promise().query("SELECT * FROM mahasiswas")

        return rows
    }

    static async getMahasiswaDetail(id) {
        const [rows] = await db
            .promise()
            .query("SELECT * FROM mahasiswas WHERE id = ?", [id])

        if (rows.length > 0){
            return rows[0]
        } else {
            return null
        }
    }

    async createMahasiswa() {
        return db
            .promise()
            .execute(
                "INSERT INTO mahasiswas (name, age, phone_number) VALUES (?, ?, ?)",
                [
                    this.name,
                    this.age,
                    this.phone_number
                ]
            )
    }

    static async deleteMahasiswa(id) {
        return db
            .promise()
            .execute(
                "DELETE FROM mahasiswas WHERE id = ?", [id]
            )
    }

    async updateMahasiswa(id) {
        return db
            .promise()
            .execute(
                "UPDATE mahasiswas SET name = ?, age = ?, phone_number = ? WHERE id = ?",
                [
                    this.name,
                    this.age,
                    this.phone_number,
                    id
                ]
            )
    }
}

module.exports = Mahasiswa