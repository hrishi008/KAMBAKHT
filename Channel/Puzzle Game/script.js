document.getElementById('gameTab').style.display='none'
var pieces=[];
let sizeOfbox=0;
let stated=false;
let moves=1000000;
let time=100000;
let interval;
function startGame(){
    if(!stated){
        moves=parseInt(document.getElementById('moves').value);
        time=parseInt(document.getElementById('time').value);
        stated=true;
      interval=  setInterval(()=>{
            time--;
            if(time<=0){
                showError();
                clearInterval(interval);
                
            }
            document.getElementById('timeShow').innerHTML='Time : '+time;

            },1000)
    }
    pieces=[];
sizeOfbox=    parseInt(document.getElementById('size').value)*parseInt(document.getElementById('size').value)

    console.log('OUTPUT : ',1);
    document.getElementById('configTab').style.display='none'
    document.getElementById('gameTab').style.display='block'
    for(let i=1;i<sizeOfbox;i++){
        pieces.push({
            number:i,
            state:0,
        });
    }
    pieces.push({
        number:'',
        state:1
    });
    shuffle(pieces);
    displayPieces();
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;


  while (currentIndex != 0) {


    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;


    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function displayPieces(){
    for (let i = 0; i < pieces.length; i++) {
        if(pieces[i].number==''){
            pieces[i].state=1;
            if(pieces[i-Math.sqrt(sizeOfbox)]!=undefined)pieces[i-Math.sqrt(sizeOfbox)].state=2;
            if(!(i%Math.sqrt(sizeOfbox)==0)&&pieces[i-1]!=undefined)pieces[i-1].state=2;
            if(!(i%Math.sqrt(sizeOfbox)==Math.sqrt(sizeOfbox)-1)&&pieces[i+1]!=undefined)pieces[i+1].state=2;
            if(pieces[i+Math.sqrt(sizeOfbox)]!=undefined)pieces[i+Math.sqrt(sizeOfbox)].state=2;
        }
        
    }
    console.log('OUTPUT : ',pieces);
    document.getElementById("pieceHolder").innerHTML='';
    for (let i = 0; i < pieces.length; i++) {
        
    document.getElementById("pieceHolder").innerHTML+=`
    <div title='${pieces[i].state}' class="${colorSetter(pieces[i].state)} piece d-inline-block align-items-center btn mb-1" style="font-size: 60px;" onclick="slipPiece(event)">
                   ${pieces[i].number}
                </div>
    
    `;
    if((i+1)%Math.sqrt(sizeOfbox)==0){
        
    document.getElementById("pieceHolder").innerHTML+='<br>';
    }
        
    }
    document.getElementById('movesShow').innerHTML='Moves : '+moves;
    if(checkOrder()){
        document.getElementById("pieceHolder").innerHTML='';
        for (let i = 0; i < pieces.length; i++) {
            
        document.getElementById("pieceHolder").innerHTML+=`
        <div title='${pieces[i].state}' class="silver piece d-inline-block align-items-center btn mb-1" style="font-size: 60px;" onclick="slipPiece(event)">
                       ${pieces[i].number}
                    </div>
        
        `;
  
            
        }
        setTimeout(()=>{
            document.getElementById("pieceHolder").innerHTML='<p class="gold" style="font-size:200px">Victory<p/>'
        },5000)
    }
}
function colorSetter(a){
    switch (a) {
        case 0:
            return 'gold';
            break;
        case 1:
            return 'silver'
            break;
        case 2:
            return 'black'
            break; 
        default:
            break;
    }
}

function slipPiece(e){
   if(e.currentTarget.title=='2'){
    console.log('OUTPUT : ',e.currentTarget.innerText);
       for(let i=0;i<pieces.length;i++){

        if(pieces[i].state==1){
            pieces[i].number=parseInt(e.currentTarget.innerText);
            pieces[i].state=0;
        }else if(pieces[i].number==e.currentTarget.innerHTML){
            pieces[i].state=1;
            pieces[i].number='';
        }else{
            pieces[i].state=0;
        }
    }
    moves--;
    if(moves<=0){
        showError();
    }else{
        displayPieces();
    }
   }
}
function checkOrder(){
    let victory =true;
    for (let i = 0; i < sizeOfbox-1; i++) {
       if(pieces[i].number!=i+1){
            victory=false;
       }
        
    }
    console.log('OUTPUT : ',victory);
    return victory;
}
function reset(){

    startGame();
    console.log('solvable',main());
    if(!main()){
        reset();
    }    
}

function getInvCount(arr) {
let inv_count = 0;
for (let i = 0; i < Math.sqrt(sizeOfbox) * Math.sqrt(sizeOfbox) - 1; i++)
{
	for (let j = i + 1; j < Math.sqrt(sizeOfbox) * Math.sqrt(sizeOfbox); j++)
	{
	


	if (arr[j] && arr[i] && arr[i] > arr[j])
		inv_count++;
	}
}
return inv_count;
}

function findXPosition(puzzle)
{

for (let i = Math.sqrt(sizeOfbox) - 1; i >= 0; i--)
	for (let j = Math.sqrt(sizeOfbox) - 1; j >= 0; j--)
	if (puzzle[i][j] == 0)
		return Math.sqrt(sizeOfbox) - i;
}

function isSolvable(puzzle)
{

let invCount = getInvCount(puzzle);

if (Math.sqrt(sizeOfbox) & 1)
	return !(invCount & 1);

else {	
	let pos = findXPosition(puzzle);
	if (pos & 1)
	return !(invCount & 1);
	else
	return invCount & 1;
}
}

/* Driver program to test above functions */
function main() {
let puzzle = [
];
let temp=[];
for (let i = 0; i < pieces.length; i++) {
        temp.push(pieces[i].number);
   
    if((i+1)%Math.sqrt(sizeOfbox)==0){
        puzzle.push(temp);
        temp=[];
    }
        
    }
let ret;
(isSolvable(puzzle)) ? ret=true :
	ret=false;
return ret;
}
function showError(){
    console.log(6465654);
    document.getElementById("pieceHolder").innerHTML='';
    for (let i = 0; i < pieces.length; i++) {
        
    document.getElementById("pieceHolder").innerHTML+=`
    <div class="black piece d-inline-block align-items-center btn mb-1" style="font-size: 60px;">
                   ${pieces[i].number}
                </div>
    
    `;
    document.getElementById('movesShow').innerHTML='Moves : '+moves;

        
        
    }
    setTimeout(()=>{
        document.getElementById("pieceHolder").innerHTML='<p class="text-danger" style="font-size:200px">Lost<p/>'
    },5000)
}



