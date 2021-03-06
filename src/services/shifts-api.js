const BASE_URL = '/api/shifts';


export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}


export function create(shift) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(shift)
    }).then(res => res.json());
}


export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

export function update(shift) {
    return fetch(`${BASE_URL}/${shift._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(shift)
    }).then(res => res.json());
  }