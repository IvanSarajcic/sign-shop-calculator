document.addEventListener("DOMContentLoaded", function () {
    const materials = {
      "materials": [
        {
          "type": "Forex",
          "unit": "m2",
          "properties": [
            {
              "subtype": "Bela X-Foam",
              "thickness": "3mm",
              "price": 5.5,
              "largest-size": "2050x3050",
              "color": "white"
            }
          ]
        }
      ]
    };
  
    const services = {
      "services": [
        {
          "type": "Cutting",
          "unit": "m2"
        }
      ]
    };
  
    const jsonString = JSON.stringify(materials) + JSON.stringify(services);
    console.log(jsonString);
    document.getElementById("app").innerHTML = jsonString;
  });
  