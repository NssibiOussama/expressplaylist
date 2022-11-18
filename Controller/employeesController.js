const Joi = require('joi')
const employees = [
    { empID: 1, fullname: 'oussama nssibi', salary: 3000 },
    { empID: 2, fullname: 'Amir nssibi', salary: 4000 },
    { empID: 3, fullname: 'daly nssibi', salary: 5000 },
    { empID: 4, fullname: 'mahdi nssibi', salary: 6000 }

]

const getAllEmployees = async (req, res) => {
    res.send(employees)

}
const getEmployeeById = async (req, res) => {
    let id = req.params.id
    const findEmploye = employees.find(Element => Element.empID == id)
    if (!findEmploye) {
        res.send("Employee not found")
    }
    else {
        res.send(findEmploye)
    }


}
const addEmployee = async (req, res) => {
    // const schema = Joi.object({
    //     id: Joi.number().integer().max(4).required(),
    //     fullname: Joi.string().min(3).required(),
    //     salary: Joi.number().integer().max(4).required()
    // });

    //const validation = schema.validate(req.body);
    // console.log(validation)
    const { error } = employeeValidation(req.body)
    if (error) {
        return res.send(error.details[0].message)
    }
    const employee = {
        id: req.body.id,
        fullname: req.body.fullname,
        salary: req.body.salary,
    }
    employees.push(employee)
    res.send(employee)
}

const updateEmployee = async (req, res) => {
    let id = req.params.id
    const findEmploye = employees.find(Element => Element.empID == id)
    if (!findEmploye) {
        return res.send("Employee not found")
    }
    const { error } = employeePutValidation(req.body)
    if (error) {
        return res.send(error.details[0].message)
    }
    findEmploye.fullname = req.body.fullname
    findEmploye.salary = req.body.salary
    return res.send(findEmploye)




}
const deleteEmployee = async (req, res) => {
    let id = req.params.id
    const findEmploye = employees.find(Element => Element.empID == id)
    if (!findEmploye) {
        return res.send("Employee not found")
    }
    const empIndex = employees.indexOf(findEmploye)
    employees.splice(empIndex, 1)
    res.send(findEmploye)

}

function employeeValidation(employee) {
    const schema = Joi.object({
        id: Joi.number().integer().max(4).required(),
        fullname: Joi.string().min(3).required(),
        salary: Joi.number().integer().max(4).required()
    });

    return schema.validate(employee);

}
function employeePutValidation(employee) {
    const schema = Joi.object({
        fullname: Joi.string().min(3).required(),
        salary: Joi.number().integer().max(4).required()
    });

    return schema.validate(employee);



}



module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
} 