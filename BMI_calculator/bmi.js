const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give valid Height ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give valid Weight ${weight}`;
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        if (bmi < 18.6){
            result.innerHTML = `Your BMI is ${bmi}: You are in the Underweight range.`;
        } else if ( 18.6 < bmi < 24.9){
            result.innerHTML = `Your BMI is ${bmi}: You are in the Normal BMI range.`;
        } else{
            result.innerHTML = `Your BMI is ${bmi}: You are Overwight`;
        }
        // result.innerHTML = `<span>${bmi}</span>`;
    }
        
})