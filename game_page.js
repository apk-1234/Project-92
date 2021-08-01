player1_score=0;
player2_score=0;
q_turn="player1";
ans_turn="player2";

var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML=player1+" : ";
document.getElementById("player2_name").innerHTML=player2+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2;
function send()
{
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    product=parseInt(number1)*parseInt(number2);
    q_no="<center><h4>"+number1+" X "+number2+"</h4>";
    input="<br>Answer :  <input type='text' placeholder='Answer' id='ans'>";
    check_btn="<br><br><button type='button' onclick='check()' class='btn btn-info'>Check</button></center>";
    row=q_no+input+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").innerHTML="";
    document.getElementById("number_2").innerHTML="";
}
function check()
{
    ans=document.getElementById("ans").value;
    if(ans==product)
    {
        if(ans_turn=="player2")
        {
            player2_score+=1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        else
        {
            player1_score+=1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        document.getElementById("output").innerHTML="";
    }
    else
    document.getElementById("output").innerHTML="";
    if(q_turn=="player1")
    {
        q_turn="player2";
        ans_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player2;
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1;
    }
    else
    {
        q_turn="player1";
        ans_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1;
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2;
    }
}