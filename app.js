var inputValue = +prompt("ap ko kaha tak table chahiye")

for(var i = 1; i <= inputValue; inputValue--){
   


    for(var j=1; j <=10;j++){
        document.write(
            "<table>","<tr>"
            ,"<th>",inputValue,"</th>",
            "<th>","x","</th>",
            "<th>",j,"</th>",
            "<th>","=","</th>",
            "<th>",inputValue*j,"</th>",
            "</tr>", "</table>")
    }
    document.write("<br><hr><br>")
}

