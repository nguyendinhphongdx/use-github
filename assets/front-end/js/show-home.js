var listJob = [];
var listCompany =[];
function setup(){
    listJob = JSON.parse(localStorage.getItem('listJobs'));
    listCompany =JSON.parse(localStorage.getItem('listCompany'));
    showCompanyHome(listCompany);
}
function showCompanyHome(list){
    var feartureCompany = document.getElementsByClassName('list-companies')[0];
    //console.log(feartureCompany.innerHTML);
    feartureCompany.innerHTML ="";
    var listTable ="";
    var length = list.length;
    for(var i=0; i<length;i++){
        listTable += '<li> <div class="company">  <div class="box-company"> <div class="picture"> '+
        ' <img src="assets/front-end/images/'+list[i].image+'">'+
        '</div></div><div class="name"><a href="">VNPT cuộc sống đích thực</a> </div></div> </li>' ;
        //console.log(list[i].name);
    }
    console.log(listTable);
    feartureCompany.innerHTML = listTable;
    console.log(feartureCompany.innerHTML);
}