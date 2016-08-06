function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
  

   

    if (charCode > 31 && (charCode < 48 || charCode > 57))
    {
         document.activeElement.style.backgroundColor = 'red';

    setTimeout(function(){  document.activeElement.style.backgroundColor = 'white';  }, 3000);
    return false;
    }    

    return true;
}