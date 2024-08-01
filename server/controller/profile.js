const Profile = require('../models/profile');

const createProfile = async (req, res) => {
    try {
        console.log('req',req.body)
        const { title, description } = req.body;
        // const {image, video, title, description} = req.file;

        // if (!title || !description || !image || !video) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'all fields required' 
        //     })
        // } 

        const profile = await Profile.create({title, description })

        res.status(200).json({
            success: true,
            message: 'Profile created successfully',
            data: profile
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error in creating profile'
        });
    }
}


const getProfile = async (req, res) => {
    try{
        const profile = await Profile.find({})

        if(!profile){
            return res.status(404).json({
                success: false,
                message: 'Profile not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Profile fetched successfully',
            data: profile
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: 'Error in fetching profile details'
        })
    }
}

module.exports = {getProfile, createProfile}