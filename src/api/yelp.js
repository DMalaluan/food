import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1gl6-c6HNcRn1qJf9ICF3NOAThBQCcOW58hGEI32tPX-QwOZXZOY32oGpt2--82_l09szrhueapsmBPsHpiQcoCM3EKjzGBQvYuI8DGSvV-8sBvJtwZQxX-RP3w8Y3Yx'
    }
})
