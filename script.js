/*
 DSCE SMART CAMPUS NAVIGATION
 Images folder: assets/images/
 Distances in kilometres; time in seconds.
*/

const PLACES = [
 {id:"entrance1",name:"First Entrance",mapName:"First Entrance",image:"entrance1.jpeg"},
 {id:"entrance2",name:"Second Entrance",mapName:"Second Entrance",image:"entrance2.jpeg"},
 {id:"parking1",name:"First Parking (Students)",mapName:"First Parking (Students)",image:"parking.jpeg"},
 {id:"parking2",name:"Second Parking (Staff)",mapName:"Second Parking (Staff)",image:"parking2.jpeg"},
 {id:"library",name:"Library",mapName:"Library",building:"BUILDING 2",image:"library.jpeg"},
 {id:"pcsagar",name:"PC Sagar Auditorium",mapName:"PC Sagar",image:"pcsagar.jpeg"},
 {id:"heritage",name:"Heritage Building",mapName:"Heritage",building:"BUILDING 1",image:"heritage.jpeg"},
 {id:"mechanical",name:"Mechanical Department",mapName:"Mechanical",building:"BUILDING 5",image:"mechanical.jpeg"},
 {id:"automobile",name:"Automobile",mapName:"Automobile",building:"BUILDING 3",image:"automobile.jpeg"},
 {id:"hemachandra",name:"Hemachandra Sagar",mapName:"Hemachandra Sagar",building:"BUILDING 4",image:"hemachandra.jpeg"},
 {id:"eee",name:"EEE",mapName:"EEE",building:"BUILDING 7",image:"eee.jpeg"},
 {id:"airobotics",name:"AI & Robotics",mapName:"AI and Robotics",building:"BUILDING 8",image:"aiandrobotics.jpeg"},
 {id:"chemical",name:"Chemical Engineering",mapName:"Chemical",building:"BUILDING 9",image:"chemical.jpeg"},
 {id:"cdsagar",name:"CD Sagar",mapName:"CD Sagar",building:"BUILDING 10",image:"cdsagar.jpeg"},
 {id:"ground",name:"Ground",mapName:"Ground",image:"ground.jpeg"},
 {id:"garden",name:"Garden",mapName:"Garden",image:"garden.jpeg"},
 {id:"businessblock",name:"Business Block",mapName:"Business Block",building:"BUILDING 13",image:"businessblock.jpeg"},
 {id:"businessschool",name:"Business School",mapName:"Business School",building:"BUILDING 15",image:"businessschool.jpg.jpeg"},
 {id:"girlshostel",name:"Girls Hostel",mapName:"Girls Hostel",building:"BUILDING 20",image:"girlshostel.jpeg"},
 {id:"boyshostel",name:"Boys Hostel",mapName:"Boys Hostel",building:"BUILDING 11",image:""},
 {id:"dayanandasagarschool",name:"Dayananda Sagar School",mapName:"Dayananda Sagar School",building:"BUILDING 16",image:"dayanandasagarschool.jpeg"},
 {id:"dayanandasagarcollege",name:"Dayananda Sagar College",mapName:"Dayananda Sagar College",building:"BUILDING 12",image:"dayanandasagarcollege.jpeg"},
 {id:"architecture",name:"Architecture",mapName:"Architecture",building:"BUILDING 14",image:"architecture.jpeg"},
 {id:"cseaiml",name:"CSE & AIML",mapName:"CSE and AIML",building:"BUILDING 18",image:"cseandaiml.jpeg"},
 {id:"electronics",name:"Electronics Block",mapName:"Electronics Block",building:"BUILDING 17",image:"electronicsblock.jpeg"},
 {id:"halladmission",name:"Hall of Admission",mapName:"Hall of Admission",building:"BUILDING 26",image:"hallofadmission.jpeg"},
 {id:"shavige",name:"Shavige Malleshwara Hills",mapName:"Shavige Malleshwara",image:"shavigemalleshwara.jpeg"},
 {id:"canteen",name:"Canteen",mapName:"Canteen",image:"canteen.jpeg"},
 {id:"conveno",name:"Conveno",mapName:"Conveno",image:"conveno.jpeg"},
 {id:"dental",name:"Dayananda Sagar Dental Science",mapName:"Dental",building:"BUILDING 25",image:"dental.jpeg"},
 {id:"cse",name:"CSE Department",mapName:"CSE",building:"BUILDING 19",image:"cse.jpeg"},
 {id:"computerdesign",name:"Computer Science & Design",mapName:"Computer Design",building:"BUILDING 22",image:"computerdesign.jpeg"},
 {id:"nelsonmandela",name:"Nelson Mandela House",mapName:"Nelson Mandela",building:"BUILDING 21",image:"nelsonmandela.jpeg"},
 {id:"amphitheatre",name:"Amphitheatre",mapName:"Amphitheatre",image:"amphitheatre.jpeg"},
 {id:"centreofexcellence",name:"Centre of Excellence",mapName:"Centre of Excellence",image:"centreofexcellence.jpeg"}
];

/* Walking connections: [start, end, distanceKm, timeSeconds] */
const EDGES = [
 ["entrance1","parking1",.08,60],
 ["parking1","mechanical",.07,60],
 ["parking1","automobile",.05,30],
 ["parking1","hemachandra",.05,30],
 ["automobile","hemachandra",.01,10],
 ["mechanical","eee",.04,30],
 ["eee","airobotics",.01,10],
 ["eee","chemical",.04,30],
 ["chemical","cdsagar",.02,30],
 ["cdsagar","ground",.07,60],
 ["ground","garden",.01,10],
 ["ground","businessblock",.05,30],
 ["businessblock","businessschool",.02,30],
 ["businessblock","girlshostel",.01,10],
 ["businessschool","cseaiml",.01,10],
 ["cseaiml","electronics",.01,10],
 ["cdsagar","boyshostel",.10,100],
 ["boyshostel","dayanandasagarcollege",.08,60],
 ["dayanandasagarcollege","architecture",.02,30],
 ["businessblock","architecture",.01,10],
 ["businessblock","dayanandasagarschool",.01,10],

 ["entrance1","mechanical",.15,120],
 ["entrance1","automobile",.10,60],
 ["entrance1","hemachandra",.12,60],
 ["entrance1","boyshostel",.30,180],
 ["entrance1","dayanandasagarcollege",.30,180],
 ["entrance1","eee",.19,150],
 ["entrance1","airobotics",.19,150],
 ["entrance1","chemical",.23,180],
 ["entrance1","cdsagar",.25,210],
 ["entrance1","ground",.32,270],
 ["entrance1","garden",.32,270],
 ["entrance1","businessblock",.37,300],
 ["entrance1","girlshostel",.37,300],
 ["entrance1","businessschool",.39,330],
 ["entrance1","cseaiml",.39,330],
 ["entrance1","electronics",.40,360],

 ["entrance1","library",.01,10],
 ["library","pcsagar",.03,10],
 ["pcsagar","heritage",.03,30],
 ["heritage","halladmission",.06,60],
 ["heritage","shavige",.06,60],
 ["halladmission","canteen",.01,5],
 ["halladmission","dental",.03,30],
 ["halladmission","conveno",.01,10],
 ["conveno","dental",.02,15],
 ["dental","cse",.03,20],
 ["dental","computerdesign",.04,40],
 ["computerdesign","nelsonmandela",.03,30],
 ["nelsonmandela","electronics",.03,30],
 ["entrance1","pcsagar",.03,20],
 ["entrance1","heritage",.05,60],
 ["shavige","canteen",.03,30],
 ["canteen","ground",.14,60],
 ["mechanical","shavige",.12,120],
 ["electronics","amphitheatre",.01,10],
 ["nelsonmandela","amphitheatre",.03,30],

 ["entrance2","entrance1",.08,40],
 ["entrance2","parking2",.08,60],
 ["parking2","conveno",.10,10],
 ["entrance2","conveno",.18,70]
];

/* Building positions matching the supplied campus layout */
const MAP_POSITIONS = {
 entrance2:[120,55],
 entrance1:[630,45],
 library:[465,105],
 pcsagar:[465,185],
 heritage:[300,260],
 halladmission:[300,335],
 parking1:[830,125],
 automobile:[1235,155],
 hemachandra:[1235,245],
 mechanical:[1080,345],
 eee:[1085,430],
 airobotics:[930,505],
 chemical:[1095,510],
 cdsagar:[1100,595],
 ground:[1100,685],
 garden:[930,650],
 boyshostel:[1300,590],
 dayanandasagarcollege:[1300,680],
 businessblock:[1100,765],
 architecture:[1300,770],
 girlshostel:[930,755],
 businessschool:[1110,850],
 cseaiml:[930,845],
 cse:[780,845],
 electronics:[850,935],
 dayanandasagarschool:[1110,935],
 computerdesign:[350,780],
 nelsonmandela:[350,870],
 amphitheatre:[610,870],
 shavige:[610,310],
 canteen:[610,445],
 conveno:[350,465],
 dental:[350,555],
 parking2:[155,445],
 centreofexcellence:[780,755]
};

/* Preferred routes from First Entrance */
const PREFERRED_FROM_FIRST_ENTRANCE = {
 parking1:["entrance1","parking1"],
 automobile:["entrance1","parking1","automobile"],
 hemachandra:["entrance1","parking1","hemachandra"],
 mechanical:["entrance1","parking1","mechanical"],
 chemical:["entrance1","parking1","mechanical","eee","chemical"],
 eee:["entrance1","parking1","mechanical","eee"],
 cdsagar:["entrance1","parking1","mechanical","eee","chemical","cdsagar"],
 ground:["entrance1","parking1","mechanical","eee","chemical","cdsagar","ground"],
 businessblock:["entrance1","parking1","mechanical","eee","chemical","cdsagar","ground","businessblock"],
 businessschool:["entrance1","parking1","mechanical","eee","chemical","cdsagar","ground","businessblock","businessschool"],
 dayanandasagarschool:["entrance1","parking1","mechanical","eee","chemical","cdsagar","ground","businessblock","dayanandasagarschool"],
 boyshostel:["entrance1","parking1","mechanical","eee","chemical","cdsagar","boyshostel"],
 airobotics:["entrance1","parking1","mechanical","eee","airobotics"],
 library:["entrance1","library"],
 pcsagar:["entrance1","library","pcsagar"],
 heritage:["entrance1","library","pcsagar","heritage"],
 halladmission:["entrance1","library","pcsagar","heritage","halladmission"],
 conveno:["entrance1","library","pcsagar","heritage","halladmission","conveno"],
 dental:["entrance1","library","pcsagar","heritage","halladmission","conveno","dental"],
 computerdesign:["entrance1","library","pcsagar","heritage","halladmission","conveno","dental","computerdesign"],
 nelsonmandela:["entrance1","library","pcsagar","heritage","halladmission","conveno","dental","computerdesign","nelsonmandela"],
 amphitheatre:["entrance1","library","pcsagar","heritage","halladmission","conveno","dental","computerdesign","nelsonmandela","amphitheatre"],
 cse:["entrance1","library","pcsagar","heritage","halladmission","conveno","dental","cse"],
 shavige:["entrance1","library","pcsagar","heritage","shavige"],
 canteen:["entrance1","library","pcsagar","heritage","halladmission","canteen"]
};

const placeById = new Map(PLACES.map(p=>[p.id,p]));
const sourceSelect = document.getElementById("source");
const destinationSelect = document.getElementById("destination");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

let currentRoute = null;

/* Fill starting point and destination dropdowns */
function populateSelects(){
 const sorted = [...PLACES].sort((a,b)=>a.name.localeCompare(b.name));

 sorted.forEach(place=>{
  sourceSelect.add(new Option(place.name,place.id));
  destinationSelect.add(new Option(place.name,place.id));
 });
}

/* Create graph */
function buildGraph(){
 const graph = new Map(PLACES.map(p=>[p.id,[]]));

 EDGES.forEach(([a,b,d,t])=>{
  graph.get(a).push({to:b,distance:d,time:t});
  graph.get(b).push({to:a,distance:d,time:t});
 });

 return graph;
}

/* Dijkstra shortest path algorithm */
function dijkstra(source,destination,weightType="distance"){
 const graph = buildGraph();
 const dist = new Map(PLACES.map(p=>[p.id,Infinity]));
 const prev = new Map();
 const unvisited = new Set(PLACES.map(p=>p.id));

 dist.set(source,0);

 while(unvisited.size){
  let current = null;
  let best = Infinity;

  for(const id of unvisited){
   if(dist.get(id)<best){
    best=dist.get(id);
    current=id;
   }
  }

  if(current===null) break;
  if(current===destination) break;

  unvisited.delete(current);

  for(const edge of graph.get(current)){
   if(!unvisited.has(edge.to)) continue;

   const weight = weightType==="time" ? edge.time : edge.distance;

   if(best+weight<dist.get(edge.to)){
    dist.set(edge.to,best+weight);
    prev.set(edge.to,current);
   }
  }
 }

 if(source!==destination && !prev.has(destination)) return null;

 const path=[destination];
 let cursor=destination;

 while(cursor!==source){
  cursor=prev.get(cursor);
  if(!cursor) return null;
  path.unshift(cursor);
 }

 return path;
}

/* Get distance and time for a connection */
function findEdge(a,b){
 const edge=EDGES.find(x=>
  (x[0]===a && x[1]===b) ||
  (x[0]===b && x[1]===a)
 );

 return edge ? {
  distanceKm:edge[2],
  timeSeconds:edge[3]
 } : null;
}

/* Calculate complete route distance and time */
function pathTotals(path){
 let distanceKm=0;
 let timeSeconds=0;

 for(let i=0;i<path.length-1;i++){
  const edge=findEdge(path[i],path[i+1]);
  if(!edge) return null;

  distanceKm+=edge.distanceKm;
  timeSeconds+=edge.timeSeconds;
 }

 return {distanceKm,timeSeconds};
}

/* Use preferred route if available, otherwise Dijkstra */
function getBestRoute(source,destination,mode="distance"){
 if(source==="entrance1" && PREFERRED_FROM_FIRST_ENTRANCE[destination]){
  const preferred=PREFERRED_FROM_FIRST_ENTRANCE[destination];

  if(
   preferred[0]===source &&
   preferred[preferred.length-1]===destination &&
   pathTotals(preferred)
  ){
   return preferred;
  }
 }

 return dijkstra(source,destination,mode);
}

/* Formatting functions */
function formatDistance(km){
 return km<1 ? `${Math.round(km*1000)} m` : `${km.toFixed(2)} km`;
}

function formatTime(sec){
 const m=Math.floor(Math.round(sec)/60);
 const s=Math.round(sec)%60;

 if(m===0) return `${s} sec`;
 if(s===0) return `${m} min`;

 return `${m} min ${s} sec`;
}

function setStatus(message,isError=false){
 statusEl.textContent=message;
 statusEl.classList.toggle("error",isError);
}

/* SVG element creation */
function svgElement(tag,attrs={}){
 const el=document.createElementNS(
  "http://www.w3.org/2000/svg",tag
 );

 Object.entries(attrs).forEach(([key,value])=>{
  el.setAttribute(key,value);
 });

 return el;
}

/* Draw campus map and selected route */
function drawCampusMap(route=[]){
 const nodes=document.getElementById("mapNodes");
 const routeLayer=document.getElementById("routeDrawing");

 nodes.replaceChildren();
 routeLayer.replaceChildren();

 if(route.length>1){
  const pts=route.map(id=>MAP_POSITIONS[id]).filter(Boolean);

  if(pts.length>1){
   const points=pts.map(p=>p.join(",")).join(" ");

   routeLayer.appendChild(
    svgElement("polyline",{
     points,
     class:"route-line-shadow"
    })
   );

   routeLayer.appendChild(
    svgElement("polyline",{
     points,
     class:"route-line"
    })
   );
  }
 }

 PLACES.forEach(place=>{
  const pos=MAP_POSITIONS[place.id];
  if(!pos) return;

  const [x,y]=pos;

  const w =
   place.id==="dayanandasagarcollege" ? 155 :
   place.id==="parking1" ? 170 :
   place.id==="dayanandasagarschool" ? 175 : 150;

  const h=64;

  const isStart=route[0]===place.id;
  const isEnd=route[route.length-1]===place.id;
  const isOnRoute=route.includes(place.id);

  const group=svgElement("g",{
   class:
    `map-node${isOnRoute?" on-route":""}`+
    `${isStart?" start-node":""}`+
    `${isEnd?" end-node":""}`
  });

  group.appendChild(svgElement("rect",{
   x:x-w/2,
   y:y-h/2,
   width:w,
   height:h,
   rx:13
  }));

  const first=svgElement("text",{
   x,
   y:y-7,
   "text-anchor":"middle",
   class:"map-building"
  });

  first.textContent=place.building || "NO NUMBER";
  group.appendChild(first);

  const second=svgElement("text",{
   x,
   y:y+17,
   "text-anchor":"middle",
   class:"map-place"
  });

  second.textContent=place.mapName;
  group.appendChild(second);

  const title=svgElement("title");
  title.textContent=place.name;
  group.appendChild(title);

  nodes.appendChild(group);
 });
}

/* Destination image */
function showImage(place){
 const image=document.getElementById("placeImage");
 const fallback=document.getElementById("imageFallback");

 if(!place.image){
  image.hidden=true;
  fallback.hidden=false;
  fallback.textContent="No image filename has been provided for this location.";
  return;
 }

 image.onload=()=>{
  image.hidden=false;
  fallback.hidden=true;
 };

 image.onerror=()=>{
  image.hidden=true;
  fallback.hidden=false;
  fallback.textContent=`Image not found: ${place.image}`;
 };

 image.src=`assets/images/${place.image}`;
 image.alt=`${place.name} image`;
}

/* Display route information */
function renderRoute(path,totals,source,destination){
 const steps=document.getElementById("routeSteps");
 steps.replaceChildren();

 path.forEach((id,index)=>{
  const li=document.createElement("li");

  li.textContent=index===path.length-1
   ? `${placeById.get(id).name} — destination`
   : placeById.get(id).name;

  steps.appendChild(li);
 });

 document.getElementById("distanceValue").textContent=
  formatDistance(totals.distanceKm);

 document.getElementById("timeValue").textContent=
  formatTime(totals.timeSeconds);

 document.getElementById("stopsValue").textContent=path.length;

 document.getElementById("routeTitle").textContent=
  `${placeById.get(source).name} → ${placeById.get(destination).name}`;

 document.getElementById("placeName").textContent=
  placeById.get(destination).name;

 document.getElementById("placeDescription").textContent=
  "Route calculated using walking distance as the priority.";

 showImage(placeById.get(destination));

 resultEl.classList.remove("hidden");
}

/* Find route button */
function findRoute(){
 const source=sourceSelect.value;
 const destination=destinationSelect.value;

 if(!source || !destination){
  resultEl.classList.add("hidden");
  currentRoute=null;
  drawCampusMap();

  setStatus(
   "Please select both a starting point and a destination.",
   true
  );
  return;
 }

 if(source===destination){
  resultEl.classList.add("hidden");
  currentRoute=null;
  drawCampusMap();

  setStatus(
   "Your starting point and destination are the same.",
   true
  );
  return;
 }

 const path=getBestRoute(source,destination,"distance");

 if(!path){
  resultEl.classList.add("hidden");
  currentRoute=null;
  drawCampusMap();

  setStatus(
   "No complete measured walking route is available between these locations yet. Add the missing verified connection in EDGES.",
   true
  );
  return;
 }

 const totals=pathTotals(path);

 if(!totals){
  resultEl.classList.add("hidden");
  currentRoute=null;
  drawCampusMap();

  setStatus(
   "This route contains a connection without a verified distance/time. Please check EDGES.",
   true
  );
  return;
 }

 currentRoute={path,totals,source,destination};

 renderRoute(path,totals,source,destination);
 drawCampusMap(path);

 setStatus(
  "Route found. Follow the highlighted blue line and the stops in order."
 );
}

/* Voice navigation */
function speakRoute(){
 if(!currentRoute){
  setStatus("Find a route before starting voice directions.",true);
  return;
 }

 if(!("speechSynthesis" in window)){
  setStatus("Voice navigation is not supported by this browser.",true);
  return;
 }

 window.speechSynthesis.cancel();

 const names=currentRoute.path.map(
  id=>placeById.get(id).name
 );

 const message=`Starting navigation. ${
  names.map((name,i)=>
   i===names.length-1
    ? `You have reached ${name}.`
    : `Go to ${name}.`
  ).join(" ")
 }`;

 const utterance=new SpeechSynthesisUtterance(message);

 utterance.lang="en-IN";
 utterance.rate=.9;
 utterance.pitch=1;

 window.speechSynthesis.speak(utterance);
}

/* Reset application */
function resetApp(){
 sourceSelect.value="";
 destinationSelect.value="";

 resultEl.classList.add("hidden");
 currentRoute=null;

 if("speechSynthesis" in window){
  window.speechSynthesis.cancel();
 }

 drawCampusMap();

 setStatus("Select a starting point and destination.");
}
/* CURRENT LOCATION DETECTION */

let userCoordinates = null;

function getCurrentLocation() {

  if (!navigator.geolocation) {
    setStatus(
      "Geolocation is not supported by this browser.",
      true
    );
    return;
  }

  setStatus("Requesting your current location...");

  navigator.geolocation.getCurrentPosition(

    function(position) {

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      userCoordinates = {
        latitude: latitude,
        longitude: longitude,
        accuracy: accuracy
      };

      setStatus(
        `Location received! Latitude: ${latitude.toFixed(6)}, ` +
        `Longitude: ${longitude.toFixed(6)}. ` +
        `Accuracy: approximately ${Math.round(accuracy)} metres.`
      );

      console.log("Current location:", userCoordinates);
    },

    function(error) {

      let message = "Unable to retrieve your location.";

      if (error.code === 1) {
        message = "Location permission was denied. Please allow location access.";
      } else if (error.code === 2) {
        message = "Your current location is unavailable. Check your GPS.";
      } else if (error.code === 3) {
        message = "Location request timed out. Please try again.";
      }

      setStatus(message, true);
    },

    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    }

  );
}


/* Button events */
document.getElementById("findBtn")
 .addEventListener("click",findRoute);

document.getElementById("resetBtn")
 .addEventListener("click",resetApp);

document.getElementById("speakBtn")
 .addEventListener("click",speakRoute);

document.getElementById("stopSpeakBtn")
 .addEventListener("click",()=>{
  if("speechSynthesis" in window){
   window.speechSynthesis.cancel();
  }
 });
document.getElementById("locateBtn")
  .addEventListener("click", getCurrentLocation);

document.getElementById("swapBtn")
 .addEventListener("click",()=>{
  const old=sourceSelect.value;

  sourceSelect.value=destinationSelect.value;
  destinationSelect.value=old;
 });

/* Start application */
populateSelects();
drawCampusMap();