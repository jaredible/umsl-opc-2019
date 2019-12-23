$("#input-p1").submit(function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/problems/1",
        crossDomain: true,
        data: JSON.stringify({
            numLevels: $(this.input).val()
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, status, xhr) {
            console.log(data);
            console.log(status);
            console.log(xhr);
            $("#output-p1").html(data.output.replace(/(?:\r\n|\r|\n)/g, '<br>'));
        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
        }
    });
});

$(function () {
    $("#input-p1 input[name='input']").mask("Z", {
        translation: {
            "Z": {
                pattern: /[1-9]/
            }
        }
    });

    $("#input-p1 input[name='input']").on("keyup", function (event) {
        $("#input-p1 button").prop("disabled", !this.value.length);
    });
});