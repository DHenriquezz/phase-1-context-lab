/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(array){
const employeeRecord = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
}
return employeeRecord;
}
function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(employeeArray => createEmployeeRecord(employeeArray))
}
function createTimeInEvent(date) {
const newTimeObj = createTimeEvent(date,'TimeIn');
this.timeInEvents.push(newTimeObj)
return this
}
function createTimeEvent(date, type){
    return {
        type,
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    }
}
function createTimeOutEvent(date) {
    const newTimeObj = createTimeEvent(date,'TimeOut');
    this.timeOutEvents.push(newTimeObj)
    return this
}
function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(record => record.date === date)
    const timeOut = this.timeOutEvents.find(record => record.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDate(date){
    const numHours = hoursWorkedOnDate.call(this, date)
    return (numHours * this.payPerHour)
}
function findEmployeeByFirstName(records, firstName){
 const employeeName = records.find(record => record.firstName === firstName)
 return employeeName
}
function calculatePayroll(records){
return records.reduce((acc, record) =>{
    return allWagesFor.call(record) + acc
}, 0)
}