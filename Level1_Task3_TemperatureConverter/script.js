//@ts-check
const calculatetemp = () => {
    const numbertemp = document.getElementById('temp').value;
    console.log(numbertemp);
    const tempselected = document.getElementById('temp_diff');
    const valuetemp = tempselected.value;

    const celtofah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) +32);
        return fahrenheit;
    }

    const fahtocel = (fah) => {
        let celsius = Math.round((fah-32)*5/9);
        return celsius;
    }

    let result;

    if(valuetemp== 'cel') {
        result = celtofah(numbertemp);
        document.getElementById('resultcontainer').innerHTML =`= ${result}°fahrenheit`;
    }
    else (valuetemp== 'fah') 
    {
        result = fahtocel(numbertemp);
        document.getElementById('resultcontainer').innerHTML = `= ${result}°celsius`;
    }
}