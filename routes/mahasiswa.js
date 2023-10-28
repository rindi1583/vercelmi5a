// 5 buat route fakultas

const express = require('express')
const router = express.Router()
const Mahasiswa = require('../models/Mahasiswa')


// post fakultas
router.post('/', async(req, res) => {
    const dataMahasiswa = {
        npm: req.body.npm,
        nama: req.body.nama,
        jk: req.body.jk,
        tanggal: req.body.tanggal,
        prodi: req.body.prodi,
        dosenpa: req.body.dosenpa

    }
    try {
        const mahasiswa = await dataMahasiswa.save()
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

//get
router.get('/', async(req, res)=>{
    try {
        const mahasiswa = await Mahasiswa.find()
        // .populate({
        //     path: 'prodi',
        //     select: '_id nama',
        //     populate:{
        //         path:'fakultas',
        //         select: '_id nama'
        //     }
        // }).populate("dosenpa")
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

//Delete Mahasiswa
router.delete('/:ID', async(req, res)=>{
    try{
        //delete 
        const mahasiswa = await Mahasiswa.deleteOne({
            _id: req.params.ID
        })
        res.json(mahasiswa)
    }catch(eror){
        res.json({
            message: error
        })
    }
})

//Update
router.put('/:ID', async(req, res) => {
    const dataMahasiswa = {
        npm: req.body.npm,
        nama: req.body.nama,
        jk: req.body.jk,
        tanggal: req.body.tanggal,
        prodi: req.body.prodi,
        dosenpa: req.body.dosenpa

    }
    try {
        const mahasiswa = await Mahasiswa.updateOne({
        _id: req.params.ID
        }, dataMahasiswa)
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})
module.exports = router