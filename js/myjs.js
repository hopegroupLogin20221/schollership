        function checkPin(pin,id){
            if(pin.length == 6){                
                $.ajax({
                url: "https://personalloanslender.com/api/postal.php",
                type: "GET",
                dataType: "json",
                data: {pin: pin},
                success: function(data){   
                    if(data["status"]=="found"){
                        $("#city"+id+" option").remove();
                        document.getElementById("state"+id).value = ""; 
                        var x = document.getElementById("city"+id);
                        x.disabled = false;
                        for (i = 0; i <= data["area"].length; i++){                        
                            var option = document.createElement("option");
                            option.value = option.text = data["area"][i]+', '+data["district"];
                            x.add(option);
                        }
                        option.value = "Other";
                        option.text = "Other Location";
                        x.add(option);
                        document.getElementById("state"+id).value = data["state"];
                    }else{
                        $("#city"+id+" option").remove();
                        var option = document.createElement("option");
                        document.getElementById("state"+id).value = ""; 
                        var x = document.getElementById("city"+id);
                        x.disabled = false;
                        option.value = "Other";
                        option.text = "Other Location";
                        x.add(option);
                        document.getElementById("state"+id).value = "Other";
                    }        
                },
                error: function(error){
                    $("#city"+id+" option").remove();
                    var option = document.createElement("option");
                    document.getElementById("state"+id).value = ""; 
                    var x = document.getElementById("city"+id);
                    x.disabled = false;
                    option.value = "Other";
                    option.text = "Other Location";
                    x.add(option);
                    document.getElementById("state"+id).value = "Other";
                }
                });
            }else{
                $("#city"+id+" option").remove();
                var option = document.createElement("option");
                document.getElementById("state"+id).value = ""; 
                var x = document.getElementById("city"+id);
                x.disabled = false;
                option.value = "Other";
                option.text = "Other Location";
                x.add(option);
                document.getElementById("state"+id).value = "Other";
            }            
        }
        function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }