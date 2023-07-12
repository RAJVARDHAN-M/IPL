var data=[]
function updateMap(){
    const stadium=new Set()
    fetch("./data.json")
  .then(response => response.json())
    .then(rsp => {
        //console.log(rsp)
        rsp.forEach(element => {
        const   lt=Number(element.longitude)
        const  llt=Number(element.latitude)
        stadium.add(element.venue)
        
        //         if(lt!=NaN && llt!=NaN){
            
            //             console.log(lt,llt)
            //             const marker1 = new mapboxgl.Marker({color:"red"})
            // .setLngLat([llt, lt])
            // .addTo(map)
            // marker1.getElement().addEventListener('click', () => {
                //     alert(JSON.stringify(element));
                //     const d=document.getElementById('datawrite').innerHTML=JSON.stringify(element)
                //     // document.write(JSON.stringify(element))
                //   });
                //         }
                
                // Create a default Marker and add it to the map.
                
                
                // Create a default Marker, colored black, rotated 45 degrees.
                // const marker2 = new mapboxgl.Marker({ color: 'blue', rotation: 45 })
                // .setLngLat([12.65147, 55.608166])
                // .addTo(map);
            });
        
            
            //console.log(stadium)
            fetch("./map.json") .then(response => response.json())
            .then(rsp => {
                stadium.forEach(key => {
                
                let s=rsp[key] 
                //console.log([rsp[key].longitude, rsp[key].latitude])
                if(rsp[key].latitude!=NaN && rsp[key].longitude!=NaN){
                s  = new mapboxgl.Marker({ color: 'blue', rotation: 45 })
.setLngLat([rsp[key].longitude, rsp[key].latitude])
.addTo(map);
//console.log(key)
s.getElement().addEventListener('click', () => {
       fetch("./data.json")
       .then(response => response.json())
       .then(res=>{
        const temp = []
        res.map(m=>{
            if(m.venue===key)
            {
                temp.push(m)
                data.push(m)
            }
        })

       // console.log(temp)
       fetchData()
        // const print = document.getElementById('datawrite')
        // print.attributes.disabled.value = "not"
        // console.log(print.attributes.disabled)
        // var tab = window.open("http://127.0.0.1:5500/view.html", '_blank');
        // tab.document.write(temp); // where 'html' is a variable containing your HTML
        // tab.document.close();
       })
      });

}
               // obj[key]={latitude:"",longitude:""}
              })
        })
        

        // console.log(JSON.stringify(obj))

    })
}
updateMap();