export const getTaskApi = async () => {
    return [{ "id": 1, "name": "ペン", category: "ううう" },
    { "id": 2, "name": "筆箱", category: "あああ" },
    { "id": 3, "name": "消しゴム", category: "いいい" },
    { "id": 4, "name": "ネームペン", category: "えええ" },
    ]
}
export const postTaskApi = async (name, category) => {
    if (name && category) {
        return [{ "success": true }]
    } else {
        return [{ "success": false }]
    }
}
export const deleteTaskApi = async () => {
    return [{ "success": true }]
}
