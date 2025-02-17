function showHint(str)
{
var xmlhttp;

        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200)      
                  {
                        var result=xmlhttp.responseText;
                        var obj = JSON.parse(result);//解析json字串為json物件形式
                                                
                        var html = '<table border=1 width=100%>';
                        
                        for (var i = 1; i < obj.length; i ++ ) {//
                                html  += '<tr>';//
                                for(j=0;j<obj[i].data.length;j++)
                                {
                                  html+= '<td>'+obj[i].data[j]+'</td>'; 
                                }
                                html  += '</tr>';            
                        }
                        html+="</table>";
                        
                        document.getElementById("nominee_status").innerHTML=html;
                        if(obj.length==0) //只有一筆代表查不到資料
                                alert('查無資料');
                  }

          }
    var url="https://script.google.com/macros/s/AKfycbw7-b2Za5_cfqgnEL5WyLCMHW6VWnQ-IjajE9hjLFUo4J_GQp1HUB3U5IoYyf_bG1xJ/exec";
        xmlhttp.open("get",url+"?nominee="+encodeURIComponent(str),true);
        xmlhttp.send();
}
