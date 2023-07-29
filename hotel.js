var name = prompt("TELL ME YOUR NAME")
var mobile=prompt("TELL ME YOUR MOBILE NUMBER")
var address=prompt("TELL ME YOUR ADDRESS")
alert("ORDER MENU:- Daal-Bati-Choorma,Pav-Bhaji,Vada-Pav,Juice,Milk,Coffee,Poha,Roti-Daal,Daal-Chawal,Missi-Roti,")
var food=prompt("WHAT'S YOUR ORDER.")
alert("TABLE NUMBER AVALABLE:-      1 TO 50" )
var table=prompt("WITCH TABLE WOULD LIKE TO CHOOSE.")
var pay=prompt("TELL ME YOUR PAYMENT METHOD.")

document.write("COSTUMER NAME:-     " ,     name, "<br>")
document.write("MOBILE NO:-     ",      mobile,"<br>")
document.write("ADDRESS:-       ",      address,"<br>")
document.write("COSTUMER ORDER:-        ",      food,"<br>")
document.write("TABLE NUMBER:-      ",      table,"<br>")
document.write("PAYMENT METHOD:-        ",      pay,"<br>")

switch(food){
    case "Daal-Bati-Choorma":
        document.write("Daal-Bati-Choorma odered","<br>","Cost=₹450","<br>","15% Discount=₹430","<br>",)
        break;

    case "Pav-Bhaji":
        document.write("Pav-Bhaji odered","<br>","Cost=₹90","<br>","15% Discount=₹76","<br>",)
        break;

    case "Vada-Pav":
        document.write("Vada-Pav odered","<br>","Cost=₹80","<br>","15% Discount=₹68","<br>")
        break;

    case "Juice":
        document.write("Juice odered","<br>","Cost=₹40","<br>","0% Discount=₹40","<br>")
        break;

    case "Milk":
        document.write("Milk odered","<br>","Cost=₹36","<br>","0% Discount=₹36","<br>")
        break;

    case "Coffee":
        document.write("Coffee odered","<br>","Cost=₹25","<br>","0% Discount=₹25","<br>")
        break;

    case "Poha":
        document.write("Poha odered","<br>","Cost=₹60","<br>","0% Discount=₹60","<br>")
        break;

    case "Roti-Daal":
        document.write("Roti-Daal odered","<br>","Cost=₹100","<br>","10% Discount=₹90","<br>")
        break;

    case "Daal-Chawal":
        document.write("Daal-Chawal odered","<br>","Cost=₹150","<br>","5% Discount=₹145","<br>")
        break;

    case "Missi-Roti":
        document.write("Missi-Roti odered","<br>","Cost=₹105","<br>","0% Discount=₹105","<br>")
        break;
    
}