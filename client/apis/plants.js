import request from 'superagent'

const rootUrl = '/api/v1'

export function getPlants() {
    return request.get(rootUrl + '/plants')
    .then(res => {
        return res.body
    })
}

export function getThePlantById(){
    
}