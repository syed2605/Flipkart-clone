let edit = document.getElementsByClassName('edit');
    
let save=document.getElementsByClassName("save");
let input=document.getElementsByTagName('input');
for(let i=0; i<edit.length; i++){
    // console.log(edit[i]);
    edit[i].addEventListener('click', function(){
       if(edit[i].textContent=='Edit'){
        edit[i].textContent ='View';
        save[i].style.display='block';
        if(i==0){
            input[0].style.cursor ="auto"
            input[1].style.cursor ="auto"
            input[2].style.cursor ="pointer"
            input[3].style.cursor ="auto"
            input[4].style.cursor ="auto"
        }
        else if(i==1){
            input[5].style.cursor ="auto"
            input[6].style.cursor ="pointer"
        }
        else if(i==2){
            input[7].style.cursor ="auto"
            input[8].style.cursor ="pointer"
        }
       }
       else{
        edit[i].textContent ='Edit';
        save[i].style.display='none';
        if(i==0){
            input[0].style.cursor ="not-allowed"
            input[1].style.cursor ="not-allowed"
            input[2].style.cursor ="not-allowed"
            input[3].style.cursor ="not-allowed"
            input[4].style.cursor ="not-allowed"
        }
        else if(i==1){
            input[5].style.cursor ="not-allowed"
            input[6].style.cursor ="not-allowed"
        }
        else if(i==2){
            input[7].style.cursor ="not-allowed"
            input[8].style.cursor ="not-allowed"
        }
       }
    })
}



// let userInfo = JSON.parse(localStorage.getItem('logininfo')) || [];

// let saveName = document.getElementById('saveName');
// saveName.addEventListener('click', storeUserData)
//     function storeUserData(){
//         userInfo.forEach(element => {
//             document.getElementById('F_name').value = element.name;
//             document.getElementById('L_name').value = element.name;
//         });
//         console.log("Edit")
//     }
