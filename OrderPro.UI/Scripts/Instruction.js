//global variable
var selectedImageId = "";
var Complexity = "";
var DeliveryFormat = "";
var things = [];
var AllImages =new Array();
var GlobalModel;
// A $( document ).ready() block. to parse model list when page load
$(document).ready(function () {

    GlobalModel = '@Html.Raw(Newtonsoft.Json.JsonConvert.SerializeObject(Model))';
    GlobalModel = JSON.parse(GlobalModel);       
    $.each(GlobalModel, function (index, data) {
        console.log('index:' + index);

        AllImages[index] = new Array(2);
        //push this data into global variable because viewbug session may lost
        AllImages[index][0] = data.lblId;;
        AllImages[index][1] = data.Id
           
        //document.getElementById(data.Id).className = "shadow";

    });
});

$("#AllSelection").click(function () {
    console.log('Hitted All Image Length:' + AllImages.length);
    things = [];//newlly declared

    for (var i = 0; i < AllImages.length; i++) {
        //To do add AllImage data in things object      
        var lblId = AllImages[i][0];
        var imgId = AllImages[i][1];
        things.push({ id: lblId, imageId: imgId });    
        document.getElementById(imgId).className = "shadow";
    }
});


//$('.productImage, #AllSelection').click(function () {
//           console.log('amlog: selection function found!');
          
//           SelectAllImage();
//});       

//function SelectAllImage() {
//       alert('hited');
//       $('.productImage').each(function () {
//           console.log('product image html: ' + $(this).find('.lblImg').html());
//       });        
//$('.imgview').each(function () {console.log('product image html: ' + $(this).parent().html());});}

$("#Apply").click(function () {
    console.log('hited');

    var ins = document.getElementById("instruction").value;
    var orderRef = document.getElementById("OrderRef").value;

    if (things.length < 1)   //arr.length < 1
        alert("Please select Images for add instruction !!");
        //else if (ins == null || ins == "")
        //     alert("Please insert your instruction !!");
    else if (Complexity == null || Complexity == "")
        alert("Select a Complexity.");
    else if (DeliveryFormat == null || DeliveryFormat == "")
        alert("Select a Delivery Format.");

    else {

        DisableButton();
        //ajax call to add instruction
        try {
            console.log('before hit.display all Images');
            for (var i = 0; i < things.length; i++) {
                console.log('id:' + things[i].id + ' img id:' + things[i].imageId);
            }
            things = JSON.stringify({ 'things': things, 'OrderRef': orderRef, 'Instruction': ins, 'Complexity': Complexity, 'PreferredFormat': DeliveryFormat });
            $.ajax({
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                type: 'POST',
                url: '@Url.Action("AddInstruction", "Home")',    //'/Home/AddInstruction',
                data: things,
                // traditional: true,
                success: function (result) {
                    console.log('After success result:' + result.message);
                    if (result.message = "True") {
                        // alert('arr: ' + arr);
                        //arr = new Array();
                        things = [];
                        console.log('assigning new list of obj :' + things.length);

                        $.each(result.ImageList, function (index, item) {
                            //index is row and item contains data

                            //alert('ImgId :' + item.ImgId);
                            //alert('lableId :' + item.lableId);
                            //alert('Instruction :' + item.Instruction);
                            //alert('Complexity :' + item.Complexity);

                            document.getElementById(item.ImgId).className = "productImage remove";
                            document.getElementById(item.lableId).innerHTML = '<div>' + item.Instruction + '<br>' + item.Complexity + '<br>' + result.DeliveryFormat + '</div>';

                            //'<div class="lbldiv"><p>' + item.Instruction + '</p><p>Complexity:' + item.Complexity + '</p><p>' + result.DeliveryFormat + '</p></div>';
                        });
                        document.getElementById("Specified").innerHTML = result.Specified;

                    } else {
                        console.log('After Failed result:' + result.message + ' Image List length:' + images.length);
                        RemoveSelectedImage();
                        alert("Instruction saved failed.Error:" + result.message + "! Try again..");
                    }
                    EnableButton();
                },

                error: function (jqXHR, exception) {

                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.Try again.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404].Try again.' + exception.message;
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].Try again.';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.Try Again.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.Try Again';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.Try Again.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    alert("Can not add Instruction.Error:" + msg);
                    EnableButton();
                }
            });

        } catch (err) {

            alert(err.message);
            EnableButton();
        }
        RemoveSelectedImage();
    }
});

$("#Cancel").click(function () {
    if (things.length > 0) {

        //To do if array has then check is the lable id has any html content if not then delete this row from array list
        //because this image does not provide any complexity
        //Cancel Instruction complxcity
        var orderRef = document.getElementById("OrderRef").value;
        if (things != null) {

            try {
                console.log('before cancel Instruction.');
                //now check from client if any
                DisableButton();

                things = JSON.stringify({ 'things': things, 'OrderRef': orderRef });
                $.ajax({

                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    type: 'POST',
                    url: '@Url.Action("RemoveInstruction","Home")',
                    data: things,

                    //traditional: true,

                    success: function (result) {
                        if (result.message = "True") {

                            console.log('Cancel result:' + result.message);
                            things = [];

                            $.each(result.ImageList, function (index, item) {
                                //index is row and item contains data

                                //alert('ImgId :' + item.ImgId);
                                //alert('lableId :' + item.lableId);
                                //alert('Instruction :' + item.Instruction);
                                //alert('Complexity :' + item.Complexity);

                                document.getElementById(item.ImgId).className = "productImage remove";
                                document.getElementById(item.lableId).innerHTML = "";
                            });

                            document.getElementById("Specified").innerHTML = result.Specified;
                        }
                        else if (result.message == "") {
                            // RemoveSelectedImage()
                            console.log('Cancel result:' + result.message);
                        }
                        else {
                            // RemoveSelectedImage();
                            console.log('Cancel result:' + result.message);
                            alert("Instruction Cancelled failed! Try again..");
                        }

                        EnableButton();

                    },


                    error: function (jqXHR, exception) {
                        console.log('Cancel result:' + result.message);
                        //RemoveSelectedImage();
                        var msg = '';
                        if (jqXHR.status === 0) {
                            msg = 'Not connect.\n Verify Network.Try again.';
                        } else if (jqXHR.status == 404) {
                            msg = 'Requested page not found. [404].Try again.';
                        } else if (jqXHR.status == 500) {
                            msg = 'Internal Server Error [500].Try again.';
                        } else if (exception === 'parsererror') {
                            msg = 'Requested JSON parse failed.Try Again.';
                        } else if (exception === 'timeout') {
                            msg = 'Time out error.Try Again';
                        } else if (exception === 'abort') {
                            msg = 'Ajax request aborted.Try Again.';
                        } else {
                            msg = 'Uncaught Error.\n' + jqXHR.responseText;
                        }
                        alert("Error:" + msg);

                        EnableButton();
                    }
                });

            } catch (err) {

                // RemoveSelectedImage();
                alert(err.message);
                EnableButton();
            }
        } else {

            alert("Please select image for cancel instruction.");
        }

        RemoveSelectedImage();

    } else {

        alert("Please select images to remove their Instruction!");
    }

    RemoveSelectedImage();


});

$("#ClearSelection").click(function () {
    console.log('Image List length:' + things.length);
    //remove border shawdow
    RemoveSelectedImage();
});


$('#order').click(function () {

    try {

        console.log('Click Order Pre');


        //check if any file upload or not
        var instruction = document.getElementById("instruction").value;
        var totalImage = document.getElementById("totalImage").value;

        var orderRef = document.getElementById("OrderRef").value;
        var userEmail = document.getElementById("UserEmail").value;
        var serviceRef = document.getElementById("ServiceRef").value;

        console.log("Order ref" + OrderRef + " total Image:" + totalImage + " user:" + userEmail);

        if (Complexity != "" && Complexity != null) {  //instruction != "" && instruction != null &&

            console.log("Hit Instruction Successful.");
            DisableButton();
            $.ajax({

                type: 'GET',
                url: '@Url.Action("VarifiedInstruction", "Home")',

                data: {
                    OrderRef: orderRef,
                    TotalImage: totalImage

                },
                traditional: true,
                contentType: 'application/json; charset=utf-8',

                //,string

                success: function (result) {

                    // alert(result.message);
                    console.log("Hit Order Successful.Result" + result.message);
                    if (result.message === "True") {

                        var url = "@Url.Action("OrderPre", "Home")";
                        console.log("After Url." + url);
                        // var name = 'from checkout'; //pass parameter
                        $.get(url, { ServiceRef: serviceRef, UserName: userEmail, OrderRef: orderRef }, function (data) {

                            //  EnableButton();

                            $("#target").html(data);
                            EnableButton();
                        });

                    } else if (result.message === "SetAllImageComplexity") {
                        alert('Some Image are not set Complexity!!');
                        EnableButton();
                    }
                    else if (result.message === "PleaseAddComplexity") {
                        alert('Please add Complexity and Delivery format for all Images!!');
                        EnableButton();
                    } else if (result.message === "Can not find Order Reference!") {
                        alert('Can not find Order Reference.Please try again or Contact with us.');
                        EnableButton();
                    }
                    else {

                        alert(result.message);
                        EnableButton();
                    }
                    //Enable Next Button

                    //document.getElementById("load").style.display = "none";
                    //document.getElementById("Sendbtn").style.display = "block";
                },

                error: function (jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.Try again.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404].Try again.';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].Try again.';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.Try Again.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.Try Again';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.Try Again.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    alert("Error:" + msg);

                    EnableButton();
                    //document.getElementById("load").style.display = "none";
                    //document.getElementById("Sendbtn").style.display = "block";
                }
            });

        } else {

            //EnableButton();
            //document.getElementById("load").style.display = "none";
            //document.getElementById("Sendbtn").style.display = "block";
            alert('Add Instruction and Complexity!!');
        }


        return false;
    } catch (err) {
        EnableButton();
        //document.getElementById("load").style.display = "none";
        //document.getElementById("Sendbtn").style.display = "block";
        console.log(err.message);
        return false;
    }
})



function DisableButton() {
    //Disable Next button after uploading image enable this
    document.getElementById("load").style.display = "block";
    document.getElementById("load2").style.display = "block";

    document.getElementById("Sendbtn").style.display = "none";
    document.getElementById("imgLoad").style.display = "none";

}

function EnableButton() {
    //Enable Next Button
    document.getElementById("load").style.display = "none";
    document.getElementById("load2").style.display = "none";

    document.getElementById("Sendbtn").style.display = "block";
    document.getElementById("imgLoad").style.display = "block";

}

function hasInstruction() {
    var value = document.getElementById("order_name").value;
    if (value.length > 50) {
        alert("Max length exists.");
    }
}

function hasOrderName() {
    var value = document.getElementById("instruction").value;
}


function SelectComplexity(e) {
    Complexity = e;
    //alert(Complexity);
}


//arr[i] = new Array(2);
//arr[i][0] = e.toString();
//arr[i][1] = i.toString();

function SelectImage(e, i) {

    console.log('img id:' + e + ' lable id:' + i)
    var className = "shadow";
    var hasClass = document.getElementById(e).className.match(className);  //new RegExp('(\\s|^)' + className + '(\\s|$)')
    console.log('has class:' + hasClass);

    var index = i;
    var imageId = e;

    if (hasClass != className) {

        try {
            console.log('add image into list because class does not match')

            things.push({ id: i, imageId: e });

            document.getElementById(e).className = "shadow";

        } catch (err) {
            alert('Class Add error:' + err);
        }
    }
    else {
        console.log('hit else condition because class matched.');
        try {

            var listToDelete = [i];        //['abc', 'efg'];

            things.reduceRight(function (acc, obj, idx) {
                if (listToDelete.indexOf(obj.id) > -1)
                    things.splice(idx, 1);
            }, 0);

            document.getElementById(e).className = "remove";

        } catch (err) {
            alert('Class remove err:' + err.message);
        }
    }

}

function PreferredFormat(e) { DeliveryFormat = e; }        

function RemoveSelectedImage() {
    console.log(' length' + things.length);
    //remove border shawdow
    for (var i = 0; i < things.length; i++) {  // arr.length
        try {

            //array pop
            console.log('first array lable id:' + things[i].id + ' Image Id:' + things[i].imageId);

            //split the array
            //var res = arr[i].split(",");
            var imgId = things[i].imageId;                   //res[0];
            var lblId = things[i].id;                    //res[1];

            // alert('Image Id:' + imgId + ' lable Id:' + lblId + '  Index:' + i);      document.getElementById(lblId).innerHTML = "";

            console.log('Image Id:' + imgId + ' lable Id:' + lblId);
            document.getElementById(imgId).className = "productImage remove";



        } catch (err) {

            console.log('exception:' + err.message);
        }
    }

    //declare array new object so previous will be null
    //arr = new Array();
    things = [];

    console.log('Js list Object newly declared:' + things.length);
}




