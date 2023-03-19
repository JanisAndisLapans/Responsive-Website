var dragParent = null;
var dragElem = null;

function dragStart(ev)
{
    dragElem = ev.currentTarget;
    dragParent = ev.currentTarget.parentElement;
   // dragParent.removeChild(dragElem);
   dragElem.classList.add("dragging");
}

function dragEnd(ev)
{
    ev.preventDefault();
    if(invisibleSquare.parentElement!=null){
        invisibleSquare.parentElement.insertBefore(dragElem, invisibleSquare);
        ev.target.parentElement.removeChild(invisibleSquare);
    }
    else if(ev.currentTarget.parentElement==null)
    {
        dragParent.appendChild(ev.currentTarget);
    }
    dragElem.classList.remove("dragging");
    nextElem = null;
}


var squares = document.getElementsByClassName("drag-square");

var nextElem = null;
var invisibleSquare = document.createElement("div");
invisibleSquare.classList.add("drag-square");
invisibleSquare.classList.add("invisible-square");
function dragoverSibling(ev)
{
    
}

var lastInsertionHoverPos;

function dist(point1, point2){
    let xdist = Math.abs(point1.pageX-point2.pageX);
    let ydist = Math.abs(point1.pageY-point2.pageY);
    return Math.sqrt(xdist*xdist+ydist*ydist);
}

const maxDistToRestart = 30;

document.addEventListener("dragover", ev=>{
    ev.preventDefault();
    if(lastInsertionHoverPos==null || dist(ev, lastInsertionHoverPos)>maxDistToRestart){
        if(invisibleSquare.parentElement!=null){
            invisibleSquare.parentElement.removeChild(invisibleSquare);
        }
        if(ev.target.classList.contains("drag-square")){
            nextElem = ev.target;
            const rangeNext = document.createRange(), rangeDrag = document.createRange();
            rangeNext.setStartBefore(nextElem, 0);
            rangeNext.setEndAfter(nextElem, 0);
            rangeDrag.setStartBefore(dragElem, 0);
            rangeDrag.setEndBefore(dragElem, 0);

            if(rangeDrag.getBoundingClientRect().right>rangeNext.getBoundingClientRect().right){
                if(nextElem.nextSibling!=null){
                    nextElem.parentElement.insertBefore(invisibleSquare, nextElem.nextSibling);
                }
                else{
                    ev.target.appendChild(invisibleSquare);
                }
            }
            else{
            nextElem.parentElement.insertBefore(invisibleSquare, nextElem);
            }
            lastInsertionHoverPos = {
                pageX:ev.pageX,
                pageY:ev.pageY
            };
        }
        else if(ev.target.classList.contains("box")){
            ev.target.appendChild(invisibleSquare);
            lastInsertionHoverPos = {
                pageX:ev.pageX,
                pageY:ev.pageY
            };
        }
    }
}, false);

for(let s of squares)
{
   // s.addEventListener("drag", drag, false);
    s.addEventListener("dragstart", dragStart, false);
    s.addEventListener("dragend", dragEnd, false);
    s.addEventListener("dragover", dragoverSibling, false);
}
