$(document).ready(function() {
    var i = 2;
    $("#btnDK").click(function() {
        $("#myModal").modal();
    });

    function kiemTraMa() {
        var mauKT = /^[0-9]{9}$/;
        if ($("#txtMa").val() == "") {
            $("#tbMa").html("Bắt buộc nhập");
            $("#tbMa").addClass("mauDo");
        } else if (!mauKT.test($("#txtMa").val())) {
            $("#tbMa").html("Nhập sai");
            $("#tbMa").addClass("mauDo");
        } else {
            $("#tbMa").html("*");
            $("#tbMa").removeClass("mauDo");
        }
    }
    $("#txtMa").blur(kiemTraMa);

    function kiemTraHT() {
        var kt = /(^[A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]*)+$/;
        if ($("#txtHT").val() == "") {
            $("#tbTen").html("Bắt buộc nhập");
            $("#tbTen").addClass("mauDo");
            return false;
        } else if (!kt.test($("#txtHT").val())) {
            $("#tbTen").html("Nhập sai");
            $("#tbTen").addClass("mauDo");
            return false;
        }
        $("#tbTen").html("*");
        $("#tbTen").removeClass("mauDo");
        return true;
    };
    $("#txtHT").blur(kiemTraHT);

    function kiemTraDC() {
        var mauKT1 = /^[a-z0-9-_]{3,15}$/; // username pattern
        var mauKT = /(abc)$/; // pattern for 'abc'
        if ($("#txtDC").val() == "") {
            $("#tbDC").html("Bắt buộc nhập");
            $("#tbDC").addClass("mauDo");
            return false;
        } else if (!mauKT1.test($("#txtDC").val()) || !mauKT.test($("#txtDC").val())) {
            $("#tbDC").html("Nhập sai");
            $("#tbDC").addClass("mauDo");
            return false;
        }
        $("#tbDC").html("*");
        $("#tbDC").removeClass("mauDo");
        return true;
    }
    $("#txtDC").blur(kiemTraDC);

    //Lấy giá trị section
    $("#slGia").change(function() {
        $("#slGia option:selected").each(function() {
            alert($(this).val());
            //gán giá trị cho Textbox txtGiaDV
            $("#txtDV").val($(this).val())
        });
    });

    $(".chkDoDung").click(function() {
        var tienDD = 0;
        var n = $(".chkDoDung:checked").length;
        if (n == 0) {
            $("#txtDD").val(0);
        } else {
            $(".chkDoDung:checked").each(function() {
                tienDD += parseFloat($(this).val());
            });
            $("#txtDD").val(tienDD);
        }

        var tong = parseFloat($("#txtDD").val()) + parseFloat($("#txtDV").val());
        $("#txtTong").val(tong);
    });

    $("#btnSave").click(function() {
        var ma = $("#txtMa").val();
        var ht = $("#txtHT").val();
        var dc = $("#txtDC").val();
        var tdv = $("#txtDV").val();
        var tdd = $("#txtDD").val();
        var tong = $("#txtTong").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ht + "</td><td>" + dc + "</td><td>" +
            tdv + "</td><td>" + tdd + "</td><td>" + tong + "</td></tr>";
        $("#tbDanhSach").append(them);
        $("#myModal").modal("hide");
        return true;
    });
});