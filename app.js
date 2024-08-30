function rollDice(){
    const numOfDices = document.getElementById("display").value;
    const dicesResult = document.getElementById("dicesResult");
    const dicesImages = document.getElementById("dicesImages");
    const values = [];
    const images = [];

    for(let i=0;i<numOfDices;i++){
        const value = Math.ceil(Math.random()*6);
        values.push(value);
        images.push(`<img src="images/${value}.png">`);
    }

    dicesResult.innerHTML = `dices: ${values.join(", ")}`;
    dicesImages.innerHTML = images.join("");
}