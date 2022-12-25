
//creat list items   
  let data = ["Section 1  ", "Section 2  ", "Section 3  ", "Section 4 "];     
  let list = document.getElementById("list");
  const li = document.querySelector('li');
  const all = document.querySelectorAll('li');
  var i =0;
// create the <li> & <a> with href     
  data.forEach((item) => {
    let li = document.createElement("li");
    const a = document.createElement('a');
    
    li.innerText = item;
    list.appendChild(li);

    a.href='#section'+ i++ ;
    a.innerText = li.innerText;
    li.innerHTML = '';
    li.appendChild(a);
  });