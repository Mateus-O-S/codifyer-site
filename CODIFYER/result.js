document.getElementById('result').innerHTML = localStorage.getItem("text")
document.getElementById('turnBack').addEventListener('click', ()=>{
    window.location = 'index.html'
    main.innerHTML = ``
})