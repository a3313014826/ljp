function check(){
    let psd1=document.getElementById("psd1").value;
    let psd2=document.getElementById("psd2").value;
    if(psd1!=psd2){
        // alert("密码不相等");
        document.getElementsByTagName('form').item(0).innerHTML+="<div>密码不相等</div>"
    }
}