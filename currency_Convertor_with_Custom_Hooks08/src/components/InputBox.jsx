import React, { useId } from "react";

// now creating an input box
function InputBox({
    label,    // label to show to and from
    amount,   // amount that needs to be converted into an differnct currency's amount.
    onAmountChange,  // function when amounts get changed
    onCurrencyChange,  // function for currency changing
    currencyOptions = [],  // currency option to be put in the selectCurrency
    selectCurrency="inr",  // type of currency
    amountDisable =false,  // the feature for disabling the input to take ammount is "false"
    currencyDisable = false, //  the feature for disabling the input to take type of currency is "false"
    className = "",  // any custom classes that an user wants to put
}) {
   
   // Now after all , use useId() hook 
   // useId() hook is used to generate unique ids for related components.
   // note that it shouldnot be used for the generation for keys

   const inputeId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={inputeId} className="text-black/40 mb-2 inline-block">
                    {label}  // label like from or to
                </label>
                <input
                    
                    id={inputeId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number" // the data would be a number
                    placeholder="Amount"
                    disabled={amountDisable}  // The feature to not disable (false)
                    value={amount}     // amount
                    onChange={(e) =>{
                        // returning both the function(existance) and execution of the function(  for extra optimization.)
                        return onAmountChange && onAmountChange(Number(e.target.value)) // the value wil be converted into a number.
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}  // selecting currency type from the options
                    onChange={(e)=>{
                         // returning both the function(existance) and execution of the function(  for extra optimization.)
                        return onCurrencyChange && onCurrencyChange(e.target.value) // the currency type will be a string.
                    }}  
                    disabled ={currencyDisable}// feature to not disabling the curreny(false)
                >
                      
                      {/* to loop through the options to select currency type using the map()*/}
                       {currencyOptions.map((c)=>{
                           // key for being more particular about the selected currency type.
                           <option key={c} value={c}>
                            {c}
                           </option> 
                       })}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
