//Check which team wins with switch
let teamJohn = (89+120+103)/3, teamMike = (116+94+123)/3, teamMary=(97+134+105)/3;
// teamMike=teamJohn=112; //check the equality case

switch(true){
    case teamJohn > teamMike && teamJohn > teamMary:
        console.log(`John's team is the winner with an average score of ${teamJohn}`);
        break;
    case teamMike > teamJohn && teamMike > teamMary:
        console.log(`Mike's team is the winner with an average score of ${teamMike}`);
        break;
    case teamMary > teamMike && teamMary > teamJohn:
        console.log(`Mary's team is the winner with an average score of ${teamMary}`);
        break; 
    case teamMary === teamMike && teamMary === teamJohn:
        console.log(`All teams have an equal average score of ${teamMary}`);
        break;   
    default:
        console.log('None of the above cases')

}