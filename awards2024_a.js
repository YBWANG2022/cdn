$(function () {
    Retrieve();
});

function Retrieve() {
    var dataArray = [];
    var URL = 'https://script.google.com/macros/s/AKfycbz7PmSqZMdQWhbDu3koA7lSiYsy2n3avmiHaRDfdIOnk7LcFNRil_0IMrEJiQca11OO/exec';
    $.ajax({
        url: URL,
        type: 'POST',
        dataType: "json",
        error: function (xhr) {
            alert('發生錯誤！請重新再試一次～');
        },
        success: function (Jdata) {
            var Info = Jdata.data;
            for (i = 0; Info.length > i; i++) {
                name = Info[i].name;
                awards = Info[i].awards;
                ctext = Info[i].ctext;
				nominee = Info[i].nominee;
                // 印出資料
                print();             
            };
            
            //  資料列印
            function print(){
                $("#table-data").append(
                    '<tr>' +
                        '<td class="w-10">' + nominee + '</td>' +
                        '<td class="w-10">' + awards + '</td>' +
                        '<td class="w-15">' + ctext + '</td>' +
                        '<td class="w-10">' + name + '</td>' +
                    '</tr>'
                );
            };
            // 獎項搜尋            
			$("#doaction").click(function(){
                select();
            });
			
			function select(){
                var result = "";
                $("#select").each(function () {
                    result = $(this).val() ;
                    search_table($(this).val()); 
                });
            };

            function search_table(value){  
                $('tbody tr').each(function(){  
                    var found = 'false';  
                    $(this).each(function(){  
                         if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                         {  
                              found = 'true';  
                         }  
                    });  
                    if(found == 'true')  
                    {  
                         $(this).show();  
                    }  
                    else  
                    {  
                         $(this).hide();  
                    }  
               }); 
			}  
        }  
    });
};
