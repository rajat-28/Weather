
const  getw=(city)=>{
    cityn.innerHTML=city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(url,options)
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            cloud_pct.innerHTML=response.cloud_pct
            feels_like.innerHTML=response.feels_like
            humidity.innerHTML=response.humidity
            max_temp.innerHTML=response.max_temp
            min_temp.innerHTML=response.min_temp
            sunrise.innerHTML=response.sunrise
            sunset.innerHTML=response.sunset
            temp.innerHTML=response.temp
            wind_degrees.innerHTML=response.wind_degrees
            wind_speed.innerHTML=response.wind_speed
            
    
        
        
        
        
        
        
        })
        .catch(err=>console.error(err))
    
    }
    getw("Barnala")
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getw(city.value)
    })


    const  dgetw=(city)=>{
        // cityn.innerHTML=city
        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
        const options = {
    
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        fetch(url,options)
            .then(response=>response.json())
            .then(response=>{
                console.log(response)
                dcloud_pct.innerHTML=response.cloud_pct
                dfeels_like.innerHTML=response.feels_like
                dhumidity.innerHTML=response.humidity
                dmax_temp.innerHTML=response.max_temp
                dmin_temp.innerHTML=response.min_temp
                dtemp.innerHTML=response.temp
                dwind_degrees.innerHTML=response.wind_degrees
                dwind_speed.innerHTML=response.wind_speed
                
        
            
            
            
            
            
            
            })
            .catch(err=>console.error(err))
        
        }
        dgetw("Delhi")
    


        const  mgetw=(city)=>{
            // cityn.innerHTML=city
            const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
            const options = {
        
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };
            
            fetch(url,options)
                .then(response=>response.json())
                .then(response=>{
                    console.log(response)
                    mcloud_pct.innerHTML=response.cloud_pct
                    mfeels_like.innerHTML=response.feels_like
                    mhumidity.innerHTML=response.humidity
                    mmax_temp.innerHTML=response.max_temp
                    mmin_temp.innerHTML=response.min_temp
                    mtemp.innerHTML=response.temp
                    mwind_degrees.innerHTML=response.wind_degrees
                    mwind_speed.innerHTML=response.wind_speed
                    
            
                
                
                
                
                
                
                })
                .catch(err=>console.error(err))
            
            }
            mgetw("Mumbai")
    


            const  ngetw=(city)=>{
                // cityn.innerHTML=city
                const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
                const options = {
            
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
                        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                    }
                };
                
                fetch(url,options)
                    .then(response=>response.json())
                    .then(response=>{
                        console.log(response)
                        ncloud_pct.innerHTML=response.cloud_pct
                        nfeels_like.innerHTML=response.feels_like
                        nhumidity.innerHTML=response.humidity
                        nmax_temp.innerHTML=response.max_temp
                        nmin_temp.innerHTML=response.min_temp
                        ntemp.innerHTML=response.temp
                        nwind_degrees.innerHTML=response.wind_degrees
                        nwind_speed.innerHTML=response.wind_speed
                        
                
                    
                    
                    
                    
                    
                    
                    })
                    .catch(err=>console.error(err))
                
                }
                ngetw("New York")




                const  lgetw=(city)=>{
                    // cityn.innerHTML=city
                    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
                    const options = {
                
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
                            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                        }
                    };
                    
                    fetch(url,options)
                        .then(response=>response.json())
                        .then(response=>{
                            console.log(response)
                            lcloud_pct.innerHTML=response.cloud_pct
                            lfeels_like.innerHTML=response.feels_like
                            lhumidity.innerHTML=response.humidity
                            lmax_temp.innerHTML=response.max_temp
                            lmin_temp.innerHTML=response.min_temp
                            ltemp.innerHTML=response.temp
                            lwind_degrees.innerHTML=response.wind_degrees
                            lwind_speed.innerHTML=response.wind_speed
                            
                    
                        
                        
                        
                        
                        
                        
                        })
                        .catch(err=>console.error(err))
                    
                    }
                    lgetw("London")



                    const  sgetw=(city)=>{
                        // cityn.innerHTML=city
                        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
                        const options = {
                    
                            method: 'GET',
                            headers: {
                                'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
                                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                            }
                        };
                        
                        fetch(url,options)
                            .then(response=>response.json())
                            .then(response=>{
                                console.log(response)
                                scloud_pct.innerHTML=response.cloud_pct
                                sfeels_like.innerHTML=response.feels_like
                                shumidity.innerHTML=response.humidity
                                smax_temp.innerHTML=response.max_temp
                                smin_temp.innerHTML=response.min_temp
                                stemp.innerHTML=response.temp
                                swind_degrees.innerHTML=response.wind_degrees
                                swind_speed.innerHTML=response.wind_speed
                                
                        
                            
                            
                            
                            
                            
                            
                            })
                            .catch(err=>console.error(err))
                        
                        }
                        sgetw("London")
    
    

           

            