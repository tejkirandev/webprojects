async function getQuote(){
    try {
        console.log("function is called");
       let h1=document.querySelector("h1");
       let btn=document.querySelector("button")
        const resp=await fetch("https://type.fit/api/quotes")
        
        if (!resp.ok) {
        throw new Error("Error not found");
        }
        const data=await resp.json();
        h1.innerText=`"${data[Math.floor(Math.random() * 16)].text}"`;
        

    } catch (error) {
        console.log(error)
    }
}