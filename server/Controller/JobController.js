import Axios from 'axios'

const getAllJob = async (req, res) => {
    try {
        const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json`)
        //console.log(result.data)
        return res.send(result.data)
    }
    catch (err) {
        console.error(err)
        return res.status(500).send('Something Went Wrong')
    }
}

const findJob = async (req, res) => {
    try {
        const { location, desc, full_time } = req.query
        if (location && desc && full_time) {
            const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?location=${location}&description=${desc}&full_time=${full_time}`)
            if (result.data.length > 0) {
                return res.send(result.data)
            }
            else {
                return res.status(404).send('No Job Found')
            }
        }
        else if ( location && desc ) {
            const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?location=${location}&description=${desc}`)
            if (result.data.length > 0) {
                return res.send(result.data)
            }
            else {
                return res.status(404).send('No Job Found')
            }
        }
        else if (location && full_time) {
            const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?location=${location}&full_time=${full_time}`)
            if (result.data.length > 0) {
                return res.send(result.data)
            }
            else {
                return res.status(404).send('No Job Found')
            }
        }
        else if (desc && full_time) {
            const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${desc}&full_time=${full_time}`)
            if (result.data.length > 0) {
                return res.send(result.data)
            }
            else {
                return res.status(404).send('No Job Found')
            }
        }
        else if (desc) {
            const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${desc}`)
            if (result.data.length > 0) {
                return res.send(result.data)
            }
            else {
                return res.status(404).send('No Job Found')
            }
        }
        else if (location) {
            const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?location=${location}`)
            if (result.data.length > 0) {
                return res.send(result.data)
            }
            else {
                return res.status(404).send('No Job Found')
            }
        }
        else if (full_time) {
            const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?full_time=${full_time}`)
            if (result.data.length > 0) {
                return res.send(result.data)
            }
            else {
                return res.status(404).send('No Job Found')
            }
        }

        //return res.send('find job sampe')
    }
    catch (err) {
        console.error(err)
        return res.status(500).send('Something Went Wrong')
    }
}

const getJobById = async (req, res) => {
    try {
        const result = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${req.params.jobId}`)
        if (result.data) {
            return res.send(result.data)
        }
        else {
            return res.status(404).send('Job Not Found')
        }
    }
    catch (err) {
        console.error(err)
        return res.status(500).send('Something Went Wrong')
    }
}



export default {
    getAllJob,
    findJob,
    getJobById
}