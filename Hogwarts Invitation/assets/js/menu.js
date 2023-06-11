//選單圖示
var a = document.getElementById("myCanvas");
var ctx = a.getContext('2d');
ctx.lineWidth = 3;
ctx.strokeStyle = 'white';
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(40, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10,20);
ctx.lineTo(40,20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10,30);
ctx.lineTo(40,30);
ctx.stroke();

var VisibleMenu = ''; // 記錄目前顯示的子選單的 ID

// 顯示或隱藏子選單
function switchMenu( theMainMenu, theSubMenu, theEvent ){
    var SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.display == 'none' ){ // 顯示子選單
        SubMenu.style.display = 'flex';
        // hideMenu(); // 隱藏子選單
        VisibleMenu = theSubMenu;
    }
    else{ // 隱藏子選單
        if( theEvent != 'MouseOver' || VisibleMenu != theSubMenu ){
            SubMenu.style.display = 'none';
            VisibleMenu = '';
        }
    }
}

// 隱藏子選單
function hideMenu(){
    if( VisibleMenu != '' ){
        document.getElementById( VisibleMenu ).style.display = 'none';
    }
    VisibleMenu = '';
}

function Menu(SubMenu){
    subMenu.style.display == 'flex';
}