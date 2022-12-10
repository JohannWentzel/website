var imgSize = 100;
var breaks = 1;

const mapping = "1100pp^^22VVvvSSddooRR~~$$!!==[[AA99{{ww66::<<KK??}}##((__ll44CCMMPPGGrryyhh\"\">>;;\'\'kkcc55\\\\IINNWWiiFF88LL++--ffssZZmmXX33,,``//iiYYEE%%zzTT77]]**jjHHUU))bb--qq&&uu@@DDeeBBggttJJxxOOnnaaQQ  ..’’";

function settext(){
    var inputString = $("textarea").val();
    // console.log(val);
    // $("h1").text(val);

    $('#imageArea').empty();

    for (var i = 0; i < inputString.length; i++){

        // line break 
        if (inputString[i] == '\n'){
            var htmlString;

            if (breaks == 1){
                htmlString = "<div class='linebreak' "
                            + "style='height:"+imgSize+"px'"+
                            "/>";
                breaks = 0;
            }
            else if (breaks == 0){
                htmlString = "<div class='linebreak'/>";
                breaks++;
            }
            
            $('#imageArea').append(htmlString);
        }

        else {
            var index = mapping.indexOf(inputString[i])

            var finalWidth = imgSize;

            if (index == 188 || index == 189){
                finalWidth = finalWidth / 2;
            }

            if (index == -1) {
                console.log("Unsupported character: " + inputString[i]);
                continue;
            }

            fileName = "chars\\maTYPEa_face" + index + ".jpg";
            var htmlString = "<img class='fontImg' " 
            + "src='" + fileName + "' " 
            + "width='" + finalWidth + "'"
            + "height='" + imgSize + "'"
            + "/>";

            $('#imageArea').append(htmlString);
            breaks = 0;
        }
    }
}

function decFont(){
    imgSize = Math.max(imgSize-10,10);
    $('#size-num').html(""+imgSize+"px");
    settext();
}

function incFont(){
    imgSize = Math.min(imgSize+10, 500);
    $('#size-num').html(""+imgSize+"px");
    settext();
}