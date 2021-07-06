function AddItemsToRow(url) {
  var row = document.getElementById("designRow");
  row.innerHTML += '<div class="col-4"><img src=' + url + ' alt="" /></div>';
}

var e = document.getElementById("alloption");

var strUser = e.value;
mapDesignList("");
console.log("select", strUser);

function mapDesignList(value) {
  const designList = data.filter(
    (item) => item.category.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
  console.log(designList);
  var row = document.getElementById("designRow");
  row.innerHTML = "";
  // designList.forEach(item => AddItemsToRow(item.url))
  for (let index = 0; index < designList.length; index++) {
    const element = designList[index];
    console.log(element);

    row.innerHTML +=
      '<div class="col-4"><img src=' + element.url + ' alt="" /></div>';
  }
}

function getSelectedValue(selectObject) {
  var value = selectObject.value;
  console.log();
  mapDesignList(value);
}
