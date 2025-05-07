"use strict"

async function getRecipes(url, limit=1) {
    const decoder = new TextDecoder("utf-8")
    let response
    try {
        response = await fetch(url)
        if (!response.ok) {
            console.log(`HTTP error: ${response.status}`);
        }
        for await (const chunk of response.body) 
        {
            console.log(decoder.decode(chunk, {stream: true}));
        }
    } catch (err) {
        console.error("Error")
    }
}

let url = "https://dummyjson.com/recipes"
getRecipes(url)