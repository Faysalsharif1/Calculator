import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Kindly enter your first No:"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Kindly enter your second No:"
    },
    {
        type: "list",
        choices: ["*", "+", "-", "/"],
        name: "Operator",
        message: "Select Operator:"
    }
]);
const { numberone, numbertwo, Operator } = answer;
if (numberone && numbertwo && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = numberone + numbertwo;
    }
    else if (Operator === "-") {
        result = numberone - numbertwo;
    }
    else if (Operator === "*") {
        result = numberone * numbertwo;
    }
    else if (Operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("Your result is : ", result);
}
else {
    console.log("Kindly enter valid input");
}
