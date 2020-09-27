var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const id = this.parentNode.parentNode.childNodes[1].innerText
    console.log(id)
    fetch('AccPay', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': id,
      })
    })
    fetch('AccRec', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': id,
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});

function checkAP(){
  if (document.getElementById("ap").checked = true){
    document.getElementById("form").action = '/AP'
  }
}

function checkAR(){
  if (document.getElementById("ar").checked = true){
    document.getElementById("form").action = '/AR'
  }
}
