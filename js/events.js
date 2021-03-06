/**
 * Created by joe on 6/24/17.
 */

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


function onEventListUpdated(events) {
    updateEventTimes(events);
    updateEventSummaries(events);
}

function updateEventSummaries(events){
    var processed = [];
    var eList = document.getElementById("Events");
    var textContent = document.createElement("td");
    textContent.setAttribute("id","EventSummary");
    if(events.length>0){
        for (i = 0; i < events.length && processed.length<8; i++) {
            var event = events[i];
            if(processed.indexOf(event.summary)==-1 && event.summary.indexOf("High")==-1){
                var message = event.summary;
                var p = document.createElement("p");
                p.innerHTML="<strong>"+message+"</strong>";
                add(textContent, p);
                processed.push(event.summary);
            }
        }
    }
    eList.appendChild(textContent);
}

function add(td, p){
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var td2 = document.createElement("td");
    td2.appendChild(p);
    tr.appendChild(td2);
    table.appendChild(tr);
    td.appendChild(table);
}

function updateEventTimes(events){
    var eList = document.getElementById("Events");
    eList.innerHTML="";
    var textContent = document.createElement("td");
    var timeContent = document.createElement("td");
    if(events.length>0){
        for (var i = 0; i < events.length && i < 8; i++) {
            var event = events[i];
            var month = (event.date.getMonth());
            month = months[month];
            var day = (event.date.getDate()+1);
            var message = month+" "+day;
            var hr = event.date.getHours()%12+1;
            var ampm = event.date.getHours()/12;
            if(ampm<1)
                ampm="am";
            else
                ampm="pm";
            //message = message+ " @ "+hr + " " + ampm;
            var p = document.createElement("p");
            p.innerHTML="<strong>"+message+"</strong>";
            add(textContent, p);
            var p2 = document.createElement("p");
            p2.innerHTML="<strong> @"+hr+ampm+"</strong>";
            add(timeContent, p2);
        }
    }
    eList.appendChild(textContent);
    timeContent.setAttribute("id","EventTimeHour");
    eList.appendChild(timeContent);
}
