import request from 'superagent'

const rootUrl = '/api/v1'

export function getPlants() {
    return request.get(rootUrl + '/plants')
    .then(res => {
        return res.body
    })
}

export function getThePlantById(id){
    return request.get(rootUrl +'/plants/' + id)
    .then(res => {
        return res.body
    })
}

export function addThePlant(plants){
    return request.post(rootUrl + '/plants')
    .send(plants)
    .then(res => {
        return res.body
    })
}