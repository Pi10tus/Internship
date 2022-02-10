$("#btn_submit").on("click", function() {
    var name = $("#user_name").val().trim();
    var surname = $("#user_surname").val().trim();
    var job_position = $("#user_position").val().trim();
    var phone = $("#user_telephone").val().trim();
    var email = $("#user_email").val().trim();

    $.ajax({
        url: '/scripts/send.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'surname': surname, 'job_position': job_position, 'phone': phone, 'email': email},
        dataType: 'html',
        success: function(data) {
            if(!data) {
                alert("Сообщение не отправлено");
            } else 
                $("#register_form").trigger("reset");
        }
    })
});