/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployees(arrayOfEmployeesArrays) {

    return arrayOfEmployeesArrays.map(function (a) {
        return createEmployeeRecord.call(this, a);
    })
}
function createEmployeeRecord([firstName, familyName, title, payRatePerHour]) {
    return {
        firstName: firstName
        , familyName: familyName
        , title: title
        , payPerHour: payRatePerHour
        , timeInEvents: []
        , timeOutEvents: []
    }
}

function createTimeInEvent(dateStamp) {
   let date = dateStamp.split(" ")
   let timeObj = {
        type: "TimeIn"
        , date: date[0]
        , hour: parseInt(date[1]) 
    }
    this.timeInEvents.push(timeObj)
    return this
}

function createTimeOutEvent(dateStamp) {
   let date = dateStamp.split(" ")
   let timeObj = {
        type: "TimeOut"
        , date: date[0]
        , hour: parseInt(date[1]) 
    }
    this.timeOutEvents.push(timeObj)
    return this
}

function hoursWorkedOnDate(date) {
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if (this.timeInEvents[i].date == date && this.timeOutEvents[i].date == date) {
            return (this.timeOutEvents[i].hour- this.timeInEvents[i].hour)/100
        }
    }
}
function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

function createEmployeeRecords(arrayOfArray) {
    let arrayOfObj = []
    arrayOfObj=arrayOfArray.map(function (e) {
        return createEmployeeRecord(e)
    }) 
    return arrayOfObj
}

function findEmployeebyFirstName(srcArray, firstName) {

   return srcArray.reduce(function (e) {
        if (e.firstName === firstName) return e
    })
}

function calculatePayroll(arrayOfEmployee) {

    let payroll = arrayOfEmployee.reduce(function (s, obj) {

        let eligibleDates = obj.timeInEvents.map(function (e) {
            return e.date
        })

        let payable = eligibleDates.reduce(function (memo, d) {
            return memo + wagesEarnedOnDate.call(obj, d)
        }.bind(obj), 0)
        return s + payable
    }, 0)
    return payroll
}

