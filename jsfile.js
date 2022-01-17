function validate(params) {
    var x=document.getElementById("inputEmail").value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  return false;  
  } 
}
    


const userDetail={
    name:'',
    email:'',
    website:'',
    image:'',
    gender:'',
    skil:'',

  }
  const userDetailsInfo = [];



function variables() {
  event.preventDefault();
  

userDetail.name= document.getElementById("inputName").value;
userDetail.email = document.getElementById("inputEmail").value;
userDetail.website= document.getElementById("inputWebsite").value;
userDetail.image= document.getElementById("inputImageURL").value;
var x="";
  if(document.getElementById("gridMale").checked){
    x=document.getElementById("gridMale").value; 
  }
  else if(document.getElementById("gridFemale").checked){
    x=document.getElementById("gridFemale").value;
  }
    userDetail.gender = x;

    var items=document.getElementsByName("inputSkills");
          var selectedItems = "";
                for (var i = 0; i < items.length; i++) 
                {
                  if (items[i].type == "checkbox" && items[i].checked == true) 
                  {
                    selectedItems += items[i].value+"," + "\n";
                  }
                } 



  //var items=document.getElementsByName("inputSkills").value;
  //var selectedItems = "Java ";
  var name= document.getElementById("inputName");
    var email = document.getElementById("inputEmail").value;
    var website= document.getElementById("inputWebsite").value;
    var image= document.getElementById("inputImageURL").value;
    
    if(name.value.trim() ==""){
      alert("Please Enter your Name"); 
    }
    else if(email.trim()==""){
        alert("Please Enter your Email"); 
    }
    else if(website.trim()==""){
        alert("Please Enter your Website"); 
    }
    else if(image.trim()==""){
        alert("Please Enter your Image"); 
    }
    else if(selectedItems=="")
{
    alert("At least one skill required")
}
else if(userDetail.gender.trim() == ""){
  alert("Please Enter your Gender");
}
    else if(validate()==false){
        alert("Wrong email");
    }
   else
    {

    userDetail.skil = selectedItems;
    userDetailsInfo.push(userDetail);
    console.log(userDetailsInfo);
    var tr = document.createElement('tr');

  

var td1 = tr.appendChild(document.createElement('tr'));

var td2 = tr.appendChild(document.createElement('tr'));
var td3 = tr.appendChild(document.createElement('tr'));
var td4 = tr.appendChild(document.createElement('tr'));
var td5 = tr.appendChild(document.createElement('tr'));
var td7 = tr.appendChild(document.createElement('tr'));
var td6 = tr.appendChild(document.createElement('td'));




td1.innerHTML=userDetail.name;
td2.innerHTML=userDetail.email; 
td3.innerHTML=`<a href=`+userDetail.website+`>`+userDetail.website+`</a>`;

td4.innerHTML=userDetail.gender;
td5.innerHTML=userDetail.skil;
td6.innerHTML=`<img src=`+userDetail.image+` width="200" height="100"></img>`;
document.getElementById("resultView").appendChild(tr);          
    
}
}

  
  
 
