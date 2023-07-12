function fetchData(){

    // const dt=document.getElementById('demo')
    data.forEach(e=>{
        document.write(`<div class="card">
        
        <div class="container">
          <h4><b>${e.winner}</b></h4>
          <p>${e.venue}</p>
        </div>
      </div>`)
        
    })

}
