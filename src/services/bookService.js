const baseUrl = 'http://localhost:3030/data'

async function getAll() {
    const res = await fetch(`${baseUrl}/books`);
    return res.json();
}

async function getById(id) {
    const res = await fetch(`${baseUrl}/books/${id}`);
    return res.json();
}

async function create(data, token) {
    await fetch(`${baseUrl}/books`, {
        method : 'post',
        headers : {
            'content-type' : 'application/json',
            'X-Authorization' : token
        },
        body : JSON.stringify({...data, likes: 0})
    });
}

async function deletePet(id, token) {
    await fetch(`${baseUrl}/books/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization' : token
        }
    });


}

export {
    getAll,
    create,
    getById,
    deletePet
}
