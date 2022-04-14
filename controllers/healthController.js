const createHealthPost = async (req, res) => {
    res.send('create health')
}
const deleteHealthPost = async (req, res) => {
    res.send('delete Health')
}
const getAllHealthPosts = async (req, res) => {
    res.send('get all HealthPosts')
}
const updateHealthPost = async (req, res) => {
    res.send('update HealthPost')
}

export {createHealthPost, deleteHealthPost, getAllHealthPosts, updateHealthPost}