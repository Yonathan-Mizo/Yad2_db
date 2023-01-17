const asyncHandler = require('express-async-handler')
const { deleteModel } = require('mongoose')

const Car = require('../model/carModel')

// @desc Get Car
// @route GET /api/cars
// @access Private
const getCar = asyncHandler(async (req, res) => {
    const cars = await Car.find()
    res.status(200).json(cars)
})

// @desc Set Car
// @route POST /api/cars
// @access Private
const setCar = asyncHandler(async (req, res) => {
    const body = req.body
    if(!req.body) {
        res.status(400)
        throw new Error('Please add a all the information required')
    }

    const car = await Car.create({
        images: req.body.images,
        name: req.body.name,
        info: req.body.info,
        description: req.body.description,
        price: req.body.price,
        hand: req.body.hand,
        year: req.body.year,
        engineSize: req.body.engineSize,
        user:{
            name: req.body.user.name,
            contact : req.body.user.contact,
            email: req.body.user.email
        },
        salesArea: req.body.salesArea,
  
        mileAge: req.body.mileAge,
        engineType: req.body.engineType,
        gearbox: req.body.gearbox,
        color: req.body.color,
        firstDay: req.body.firstDay,
        lastDay: req.body.lastDay,
        currentOwnership: req.body.currentOwnership,
        previousOwnership: req.body.previousOwnership,
        
        airConditioner: req.body.airConditioner,
        roofWindow: req.body.roofWindow,
        fourIntoTwo: req.body.fourIntoTwo,
        stabilityControl: req.body.stabilityControl,
        tirePressureSensors: req.body.tirePressureSensors,
        identifyTrafficSign: req.body.identifyTrafficSign,
        abs: req.body.abs,
        powerSteering: req.body.powerSteering,
        reverseCamera: req.body.reverseCamera,
        pedestrianDetection: req.body.pedestrianDetection,
        beltSensors: req.body.beltSensors,
        electricWindows: req.body.electricWindows,
        airBags: req.body.airBags,
        magnesiumWheels: req.body.magnesiumWheels,
        auxiliaryBrakeSystem: req.body.auxiliaryBrakeSystem,
        automaticLightning: req.body.automaticLightning,
        contamination: req.body.contamination
    })

    res.status(200).json(car)
})

// @desc Update Car
// @route PUT /api/cars/:id
// @access Private
const updateCar = asyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id)

    if(!car) {
        res.status(400)
        throw new Error('Car not found')
    }

    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCar)
})

// @desc Delete Car
// @route DELETE /api/cars/:id
// @access Private
const deleteCar = asyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id)

    if(!car) {
        res.status(400)
        throw new Error('Car not found')
    }
    await car.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getCar,
    setCar,
    updateCar,
    deleteCar,
}
