'use-strict';

/* you can return a selector by using the synax: return $('selector').
function pSelector(){
  return $('p');
}
*/

function h1Selector() {
  return $('h1');
}

function liInOlSelector() {
  return $('ol li')
}

// I think the test for this function is broken
function linkSelector() {
  return $('a#my-id.my-class')
}


// Maybe it's just me at this point but I think the test here is broken too
function catSelector() {
  return $('img[alt="cat sleeping"]')
}

function checkboxInputSelector() {
  return $(':checkbox')
}
