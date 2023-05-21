const update = async () => {
    let a = await fetch("https://news-wcvr.onrender.com/", {
        method: "GET"
    })
    console.log(a)
}

update()