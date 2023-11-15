
async function fetchExchangeRates() {
    try {
      const response = await fetch("http://localhost:5003/kurlar");
      const jsonData = await response.json();
      createTable(jsonData, [0, 3, 5, 10, 11, 8]); 
      console.log(jsonData);
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  }
  
  function createTable(currencies, targetIndexes) {
    const tableBody = document.getElementById("exchanges");
    
  
    targetIndexes.forEach((index) => {
      const currency = currencies[index];
      if (currency) {
        const row = document.createElement("tr");
  
        const currencyName = document.createElement("td");
        currencyName.textContent = currency.CurrencyName[0];
        row.appendChild(currencyName);
  
        const buyingRate = document.createElement("td");
        buyingRate.textContent = currency.BanknoteBuying[0];
        row.appendChild(buyingRate);
  
        const sellingRate = document.createElement("td");
        sellingRate.textContent = currency.BanknoteSelling[0];
        row.appendChild(sellingRate);
  
        tableBody.appendChild(row);
      }
    });
  }

  fetchExchangeRates();
  
  
  