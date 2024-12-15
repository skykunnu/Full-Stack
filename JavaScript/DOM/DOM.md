1. 

<select id=""> -> In case of select always give id to select tag and value to option tag to work in DOM. 
and give one empty value of one option tag and give disabled selected to work as a placeholder for select. 
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
<option value=""></option>
</select>


2. If we want to create a table using js in DOM 
<div class="table">
<table id="DownTable">
               
</table>
</div>

now create tr and under tr create td as much as you want. 
first append all td inside tr and then append tr inside for ex DownTable.


3. Difference between innerText vs innerHTML vs TextContent. 

InnerHTML-> Reads and write the HTML markup inside an element & includes HTML tags,content & attributes. 

InnerText-> Reads or writes the visible text content of an element & excludes both hidden elements or styles. 

TextContent-> includes all text even if hidden by css. 
