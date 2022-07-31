// За допомогою switch, вивести(alert). Відносно ролі юзера вивести його права. Admin, user, moderator, superAdmin.

const userRole = prompt("Enter your role?");
switch (userRole) {
    case 'admin':
        alert(`Your rights ${userRole}`);
        break;
    case 'moderator':
        alert(`Your rights ${userRole}`);
        break;
    case 'superAdmin':
        alert(`Your rights ${userRole}`);
        break;
    case 'user':
        alert(`Your rights ${userRole}`);
        break;
    default:
        alert(`Role ${userRole} doesn't have rights`);
}