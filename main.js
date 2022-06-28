function add(){
  let   drop=document.getElementById('dropdown').value;
  
  console.log(drop)
  if(drop=='open')
  {
     document.getElementById('txt').innerHTML='We are open';
  } 
  else{
     document.getElementById('txt').innerHTML='We are closed';
  }
     
 }
 let button=document.getElementById('submit')
 button.addEventListener('click',add)