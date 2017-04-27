if (document.querySelector('meta[content^="Knorr (Ship : 1970-)"]')) {
var element = document.querySelector('meta[content^="Knorr (Ship : 1970-)"]').attributes;
}
if (document.querySelector('meta[content^="Oceanus (Ship : 1975-)"]')) {
var element = document.querySelector('meta[content^="Oceanus (Ship : 1975-)"]').attributes;
}
if (document.querySelector('meta[content^="Atlantis (Ship : 1996-)"]')) {
var element = document.querySelector('meta[content^="Atlantis (Ship : 1996-)"]').attributes;
}



if (element) {



/*if there is a matching meta element, insert a geoLink div in right column.*/

  var topElement = document.getElementsByClassName("col-sm-8");
  var newElement = document.createElement("div");
  newElement.setAttribute("id","geoLink");
  newElement.setAttribute("class","geoLink");
  topElement[0].insertBefore(newElement,topElement[0].firstChild);
  
/*get the cruise from the element value and create gldeployment element, make contents of geoLink element*/
  var evalue = element.content.value;
  var cruise = evalue.split('Cruise ')[1];
  glConstruct = "<gldeployment-element params='{\"host\": \"GeoLink\", \"hosturl\":\"https://geolink.org\", \"label\": \"" + cruise + "\"}'/>"
  newElement.innerHTML = glConstruct;

}

/**var people = document.getElementsByClassName("ds-dc_contributor_author-authority");

for(var i=0; i<people.length;i++)
{
  var uri = people[i].children[1].href;
  if (uri === "https://darchive.mblwhoilibrary.org/concept/uuid:e374df8d-1423-482c-a3c2-143839331774") {
    console.log("Yes");
    var topElement = document.getElementsByClassName("col-sm-8");
    var newElement = document.createElement("div");
    newElement.setAttribute("id","geoLink");
    newElement.setAttribute("class","geoLink");
    topElement[0].insertBefore(newElement,topElement[0].firstChild);
    var link = document.createElement("link");
    link.rel = "import";
    link.href = "/themes/whoas-m2/geoLinkComponent/glperson.html"; 
    topElement[0].insertBefore(link,topElement[0].firstChild);
    var glPerson = "<glperson-element params='{\"host\": \"GeoLink\", \"hosturl\":\"https://geolink.org\", \"url\":\"https://darchive.mblwhoilibrary.org/rdf/resource/concept/uuid:e7d1ac61-f985-4469-aee3-8b990929c825\"}'/>";
    newElement.innerHTML = glPerson;
  }
}**/
