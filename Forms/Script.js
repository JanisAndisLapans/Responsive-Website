function onSubmit(){
    let yearFrom = document.getElementById("yearFrom");
    let yearTo = document.getElementById("yearTo");
    let form = document.getElementById("searchForm");
    yearFrom.type = "text";
    yearTo.type = "text";
    let origValFrom = yearFrom.value, origValTo = yearTo.value;
    let bothFiled = true;
    if(yearFrom.value!="")
    {
        yearFrom.value = "after:"+origValFrom;
    }
    else bothFiled=false;
    if(yearTo.value!="")
    {
        yearTo.value = "before:"+origValTo;
    }
    else bothFiled = false;
    if(bothFiled && parseInt(origValTo)<parseInt(origValFrom))
    {
        alert("Gadam no jābūt mazākam par gadu līdz, ja abi ir aizpildīti");
    }
    else{   
         form.submit();
    }
    yearFrom.value = origValFrom;
    yearTo.value = origValTo;
    yearFrom.type = "number";
    yearTo.type = "number";
}