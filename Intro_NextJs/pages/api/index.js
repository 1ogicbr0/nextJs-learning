import nc from 'next-connect'

const handler = nc()
    .get((req,res) => {
        res.json({message:"GET A REQUEST"})
    })
    .post((req,res) => {
        res.json({message:"POST A REQUEST"})
    })

export default handler;