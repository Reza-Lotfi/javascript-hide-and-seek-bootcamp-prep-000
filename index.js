function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested div div div div')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');
  lis.forEach(function(li){
    li.innerHTML = (parseInt(li.innerHTML) + n)
  })
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}