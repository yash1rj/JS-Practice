var x,y;
var chr="";
for(x=1;x<6;x++)
{
    for(y=1;y<=x;y++)
    {
        if(y%2!=0)
        {
            chr+="*";
        }
        else
        {
            chr+="#";
        }
    }
    console.log(chr);
    chr="";
}