const express = require('express')
const pool = require('./db_connection')
const cors = require('cors')
 
const app = express()
app.use(express.json())
app.use(cors())
 
app.get('/animals', (req, res) => {
 
    pool.getConnection((err, connection) => {
        if (err) throw err
 
        connection.query('SELECT * from animals', (err, rows) => {
            connection.release()
 
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
 
})
 
app.get('/animals/:id/', (req, res) => {
 
    const { id } = req.params
 
    pool.getConnection((err, connection) => {
        if (err) throw err
 
        connection.query('select * from animals where id=?', [id], (err, rows) => {
            connection.release()
 
            if (!err) {
                res.json({
                    data: rows[0]
                })
            } else {
                console.log(err)
            }
        })
    })
})
 
app.post('/animals', (req, res) => {
 
    const { type, age, color, name } = req.body
 
    pool.getConnection((err, connection) => {
        if (err) throw err
 
        connection.query('insert into animals (type, age, color, name) values (?, ?, ?, ?)', [type, age, color, name], (err, rows) => {
            connection.release()
 
            if (!err) {
                res.send({ ...req.body, id: rows.insertId })
            } else {
                console.log(err)
            }
        })
    })
 
})
 
app.put('/animals/:id', (req, res) => {
 
    const { id } = req.params
    const tmp = req.body
 
    pool.getConnection((err, connection) => {
        if (err) throw err
 
        connection.query('update animals set ? where id=?', [tmp, id], (err, rows) => { })
        connection.query('select * from animals where id=?', [id], (err, rows) => {
            connection.release()
 
            if (!err) {
                res.json({
                    data: rows[0]
                })
            } else {
                console.log(err)
            }
        })
    })
})
 
app.delete('/animals/:id', (req, res) => {
 
    const { id } = req.params
 
    pool.getConnection((err, connection) => {
        if (err) throw err
 
        connection.query('delete from animals where id=?', [id], (err, rows) => {
            connection.release()
 
            if (!err) {
                res.send("usunięto rekord")
            } else {
                console.log(err)
            }
        })
    })
 
})
 
app.listen(4000, () => console.log('serwer działa'))