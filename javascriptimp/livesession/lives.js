/*bank Transaction

Create an object to specify data of customers in a bank.The data to be stored is: Account Number, Name, Balance.Assume a maximum of 200 customers in the bank

create a method called as transaction which takes 2 args amount and code(1 for deposit, 0 for withdraw )
Create a method the display the current balance for the customer
If the withdraw amount is more than the balance then display "The balance is insufficient for the specified withdrawal"
*/

 const customer = {
    accNumber: 'SBI123',
    name: 'Sam',
    balance: 500, 
    transaction: function(amount, code){
        if(code == 1) {
            this.balance += amount 
            return this.currentBalance()
        } else if(code == 0) {
            if(amount > this.balance) {
                return 'The balance is insufficient for the specified withdrawal'
            } else {
                this.balance -= amount 
                return this.currentBalance()
            }
        }
    },
    currentBalance: function(){
        return `Current Balance - INR ${this.balance}`
    }
}

console.log(customer.name)
console.log(customer.currentBalance())

// deposit 
console.log(customer.transaction(1000, 1))


// withdrawal
console.log(customer.transaction(2500, 0))
console.log(customer.transaction(500, 0))