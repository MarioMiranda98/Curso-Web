var amigos = ['Mario', 'Cesar', 'Manuel', 'Alejandro'];

for(amigo in amigos) {
    if(amigos[amigo] === 'Alejandro')
        continue;    
    else 
        document.write(amigos[amigo] + '<br />');
        
    // if(amigos[amigo] === 'Mario')
    //     break
}