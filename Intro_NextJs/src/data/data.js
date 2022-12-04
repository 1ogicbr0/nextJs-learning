const notes = new Array(15)
    .fill(1)
    .map((_, i) => ({
        id: Date.now() + i,
        title: `Note ${i}` ,
        key: Math.random()*100+i
    }))

    console.log(notes)

module.exports = notes