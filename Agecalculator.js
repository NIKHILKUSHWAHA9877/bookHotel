const output_year = document.querySelector('.Age_in_year')
const output_month = document.querySelector('.Age_in_month')
const output_day = document.querySelector('.Age_in_days')


const submit =  document.querySelector('.submit_button')

let isValid = false;
const input_year = document.querySelector('#year')
const input_month = document.querySelector('#month')
const input_day = document.querySelector('#day')


const error_year = document.querySelector('.error_year')
const error_month = document.querySelector('.error_month')
const error_day = document.querySelector('.error_day')

submit.addEventListener('click', CalculateDate )
input_day.addEventListener('input', e=>{
if( +input_day.value > 31  ){

    error_day.textContent = 'Enter valid date';
    isValid = false;
    return;
}
else{
    isValid = true;
    error_day.textContent = " "
   
}

if(input_day.value == 0 ){
    isValid = false;
    error_day.textContent = 'Required';
    isValid = false;
    return;
}
else{
    error_day.textContent = " "

}
})



input_month.addEventListener('input', e=>{
    if( +input_month.value > 12 ){
    
        error_month.textContent = 'Enter valid month';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        error_month.textContent = " "
    
    }
    
    if(input_month.value == 0 ){
        error_month.textContent = 'Required';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        error_month.textContent = " "
    
    }
    })


    input_year.addEventListener('input', e=>{
        if( +input_year.value > 2023 ){
        
            error_year.textContent = 'Enter valid year';
            isValid = false;
            return;
        }
        else{
            isValid = true;
            error_year.textContent = " "
        
        }
        
        if(input_year.value == 0 ){
            isValid = false;
            error_year.textContent = 'Required';
            return;
        
        }
        else{
            isValid = true;
            error_year.textContent = " "
        }
        })


        function CalculateDate(){


      if(isValid) {

let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
console.log(birthday);
let birthdayObj = new Date(birthday);
let ageDifference = Date.now() - birthdayObj;
let ageDate = new Date(ageDifference)

let ageYears = ageDate.getUTCFullYear()-1970;
let ageMonth = ageDate.getUTCMonth() ;
let ageDay = ageDate.getUTCDay() -1;

output_day.textContent = ageDay;
output_month.textContent = ageMonth;
output_year.textContent = ageYears;
      }
      else{
        alert("error");
      }


      }   



       