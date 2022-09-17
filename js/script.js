const Read = document.getElementById("read");

const Mark = document.getElementById("mark");
const Angle = document.getElementById("angle");
const Jacob = document.getElementById("jacob");

const Click = {
    Mark_name : Mark.children[1].children[0].children[0],
    Mark_game : Mark.children[1].children[0].children[2],
    Angle_name : Angle.children[1].children[0].children[0],
    Jacob_name : Jacob.children[1].children[0].children[0],
    Jacob_club : Jacob.children[1].children[0].children[2]
}

Click.Mark_name.addEventListener('click',()=>{
    Setread(Mark);
    Setnum();
})

Click.Mark_game.addEventListener('click',()=>{
    Setread(Mark);
    Setnum();
})

Click.Angle_name.addEventListener('click',()=>{
    Setread(Angle);
    Setnum();
})

Click.Jacob_name.addEventListener('click',()=>{
    Setread(Jacob);
    Setnum();
})

Click.Jacob_club.addEventListener('click',()=>{
    Setread(Jacob);
    Setnum();
})

Read.addEventListener('click',()=>{
    Setread(Mark);
    Setread(Angle);
    Setread(Jacob);
    Setnum();
})
















// for use

Setread =(con)=>{
    con.className = ('container');
    con.children[1].children[0].children[con.children[1].children[0].children.length-1].style.display = "none"
}

Setnum = ()=> {
    let show = document.getElementsByClassName('unread').length;
    document.getElementById('numshow').innerHTML = show;
}


